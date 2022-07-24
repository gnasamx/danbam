import Layout from "@/components/layout";
import { GetServerSidePropsContext } from "next";
import { Session, unstable_getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { prisma } from "@/lib/prisma";
import { Project } from "@prisma/client";

const headings: Array<string> = ["Project", "Client"];

function ProjectIndex({ projects }) {
  return (
    <>
      <div className="mb-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-1/2">
          <input
            type="search"
            aria-label="Find a project"
            placeholder="Find a project…"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            className="w-full rounded-md border px-3 shadow-sm ring-offset-0 text-gray-850 dark:text-white h-8 py-1 text-base focus-ring border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
        </div>
        <div className="mb-4 sm:mb-0">
          <Link href="/projects/new">
            <a
              type="button"
              className="box-border relative inline-flex items-center justify-center text-center leading-none no-underline whitespace-nowrap font-semibold rounded-md shrink-0 transition select-none overflow-hidden focus-ring bg-gray-800 hover:bg-gray-900 dark:bg-gray-50 border border-transparent text-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900 cursor-pointer hover:text-white h-8.5 py-3 px-4"
            >
              New project
            </a>
          </Link>
        </div>
      </div>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {headings.map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="text-gray-600 dark:text-gray-400 text-left text-sm font-medium tracking-normal px-4 py-2 border-t border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 first:border-l first:rounded-l-md last:border-r last:rounded-r-md"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project: Project) => (
              <tr key={project.id}>
                <td className="text-left p-4 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap py-3 text-purple-600 dark:text-purple-400">
                  {project.name}
                </td>
                <td className="text-left p-4 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap py-3">
                  {project.client.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

ProjectIndex.auth = true;

ProjectIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session?.user) {
    return {
      redirect: {
        permanent: true,
        destination: "/sign-in",
      },
    };
  }

  let projects = await prisma?.project.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      client: true,
    },
  });

  projects = JSON.parse(JSON.stringify(projects));

  console.log(projects);

  return {
    props: { projects },
  };

  return {
    props: {},
  };
};

export default ProjectIndex;
