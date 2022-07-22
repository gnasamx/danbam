import Layout from "@/components/layout";
import Link from "next/link";

function ProjectIndex() {
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
          />
        </div>
        <div className="mb-4 sm:mb-0">
          <Link href="/projects/new">
            <a type="button" className="btn btn-primary">
              New project
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

ProjectIndex.auth = true;

ProjectIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProjectIndex;
