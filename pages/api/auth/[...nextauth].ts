import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization:
        "https://github.com/login/oauth/authorize?scope=read:user+user:email+read:org",
      userinfo: {
        url: "https://api.github.com/user",
        async request({ client, tokens }) {
          console.log("client", client);
          console.log("tokens", tokens);
          const profile = await client.userinfo(tokens);

          console.log("profile", profile);
          // If user has email hidden, get their primary email from the GitHub API
          if (!profile.email) {
            const emails = await (
              await fetch("https://api.github.com/user/emails", {
                headers: {
                  Authorization: `token ${tokens.access_token}`,
                },
              })
            ).json();

            console.log("emails", emails);

            if (emails?.length > 0) {
              profile.email = emails.find((email: any) => email.primary)?.email;
              if (!profile.email) profile.email = emails[0].email;
            }
          }

          const userOrgs = await (
            await fetch("https://api.github.com/user/orgs", {
              headers: { Authorization: `token ${tokens.access_token}` },
            })
          ).json();

          // Set flag to deny signIn if allowed org is not found in the user organizations
          // if (
          //   !userOrgs.find(
          //     (org: any) => org.login === serverEnv.GITHUB_ALLOWED_ORG
          //   )
          // ) {
          //   profile.notAllowed = true;
          // }

          return profile;
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
