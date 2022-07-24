import Layout from "@/components/layout";
import SelectClient from "@/components/select-client-modal";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  projectName: string;
  description: string;
  clientName: string;
};

function ProjectNew() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      projectName: "",
      clientName: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    fetch("/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectName: data.projectName,
        clientName: data.clientName,
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
            Name your project. You can also add a description if you’d like.
          </p>
          <div className="space-y-6">
            <fieldset>
              <label
                htmlFor="projectName"
                className="inline-block mb-3 leading-none text-gray-850 dark:text-white font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="projectName"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                required
                {...register("projectName")}
                className="w-full rounded-md border px-3 shadow-sm ring-offset-0 text-gray-850 dark:text-white h-8 py-1 text-base focus-ring border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </fieldset>
            <fieldset>
              <label
                htmlFor="description"
                className="inline-block mb-3 leading-none text-gray-850 dark:text-white font-semibold"
              >
                Description
                <span className="font-normal text-gray-600 dark:text-gray-400">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                id="description"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                required
                {...register("description")}
                className="w-full rounded-md border px-3 shadow-sm ring-offset-0 text-gray-850 dark:text-white h-8 py-1 text-base focus-ring border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </fieldset>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-100 dark:border-gray-800" />

        <h2 className="text-lg font-semibold">Choose or create client</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          The client is the person or company for whom you’re completing this
          work.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="box-border relative inline-flex items-center justify-center text-center leading-none no-underline whitespace-nowrap font-semibold rounded-md shrink-0 transition select-none overflow-hidden focus-ring cursor-pointer h-8.5 py-3 px-4 text-gray-850 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-850 focus:border-blue-500 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900"
        >
          Add client
        </button>
        {open && <SelectClient setOpen={setOpen} />}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  colSpan={2}
                  className="text-gray-600 dark:text-gray-400 text-left text-sm font-medium tracking-normal px-4 py-2 border-t border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 first:border-l first:rounded-l-md last:border-r last:rounded-r-md"
                >
                  New York
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left p-4 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap py-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="flex shrink-0 items-center">
                        <div
                          title="Ganesh Pawar"
                          className="relative inline-flex flex-shrink-0 rounded-full"
                        >
                          <Image
                            src="/gravatar-fallback.png"
                            alt="Ganesh Pawar"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                          <div className="absolute inset-0 rounded-full"></div>
                        </div>
                      </span>
                      <div>
                        <div className="whitespace-nowrap font-medium">
                          Ganesh Pawar
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          gnasamx@gmail.com
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="box-border relative inline-flex items-center justify-center text-center leading-none no-underline whitespace-nowrap font-semibold rounded-md shrink-0 transition select-none overflow-hidden focus-ring cursor-pointer text-gray-850 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-850 focus:border-blue-500 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm py-2 h-7 px-3"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
