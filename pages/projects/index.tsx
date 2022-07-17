import Layout from "@/components/layout";

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
            className="w-full rounded-md border px-3 shadow-sm ring-offset-0 text-primary h-8 py-1 text-base focus-ring border-secondary bg-secondary"
          />
        </div>
        <div className="mb-4 sm:mb-0">
          <button
            type="button"
            className="box-border relative inline-flex items-center justify-center text-center no-underline leading-none whitespace-nowrap font-semibold rounded-md shrink-0 transition select-none overflow-hidden focus-ring bg-gray-800 hover:bg-gray-900 dark:bg-gray-50 border border-transparent text-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900 cursor-pointer hover:text-white h-8 py-3 px-4"
          >
            New project
          </button>
        </div>
      </div>
    </>
  );
}

ProjectIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProjectIndex;
