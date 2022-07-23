import Layout from "@/components/layout";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  project_name: string;
  client_name: string;
};

function ProjectNew() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      project_name: "",
      client_name: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    fetch("/api/project/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectName: data.project_name,
        clientName: data.client_name,
      }),
    });
    reset();
  };

  return (
    <form id="new-project-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 max-w-xl">
        <h1 className="text-xl font-semibold mb-6">Create new project</h1>
        <div className="rounded-md border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 p-6">
          <h2 className="text-lg font-semibold">Project metadata</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Add project and client information
          </p>

          <div className="space-y-6">
            <fieldset>
              <label
                htmlFor="project_name"
                className="inline-block mb-3 leading-none text-gray-850 dark:text-white font-semibold"
              >
                Project name
              </label>
              <input
                type="text"
                id="project_name"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                required
                {...register("project_name")}
                className="w-full rounded-md border px-3 shadow-sm ring-offset-0 text-gray-850 dark:text-white h-8 py-1 text-base focus-ring border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
              {errors["project_name"] && (
                <p>{errors["project_name"].message}</p>
              )}
            </fieldset>
            <fieldset>
              <label
                htmlFor="client_name"
                className="inline-block mb-3 leading-none text-gray-850 dark:text-white font-semibold"
              >
                Client name
              </label>
              <input
                type="text"
                id="client_name"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                required
                {...register("client_name")}
                className="w-full rounded-md border px-3 shadow-sm ring-offset-0 text-gray-850 dark:text-white h-8 py-1 text-base focus-ring border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </fieldset>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-100 dark:border-gray-800" />
        <button
          type="submit"
          className="box-border relative inline-flex items-center justify-center text-center leading-none no-underline whitespace-nowrap font-semibold rounded-md shrink-0 transition select-none overflow-hidden focus-ring bg-gray-800 hover:bg-gray-900 dark:bg-gray-50 border border-transparent text-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900 cursor-pointer hover:text-white h-8.5 py-3 px-4"
        >
          Create project
        </button>
      </div>
    </form>
  );
}

ProjectNew.auth = true;

ProjectNew.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProjectNew;
