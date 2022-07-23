import Github from "@/components/icons/github";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { unstable_getServerSession } from "next-auth/next";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]";

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <div className="max-w-sm py-8 max-auto min-w-min md-w-7/12 md:py-20">
        <h2 className="text-xl font-semibold md:text-2xl text-gray-850 dark:text-white">
          Sign in
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          New to Danbam?{" "}
          <Link href="/sign-up">
            <a className="font-medium text-blue-600 dark:text-blue-400">
              Sign up for an account
            </a>
          </Link>
          {"."}
        </p>
        <div className="my-8">
          {Object.values(providers!).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  signIn(provider.id, undefined, { role: "ADMIN" })
                }
                type="button"
                className="btn btn-primary"
              >
                <Github />
                {` Sign in with ${provider.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const providers = await getProviders();

  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: { providers },
    };
  }

  return {
    props: { providers },
  };
};

export default SignIn;
