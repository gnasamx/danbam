import Layout from "@/components/layout";
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
        {open && (
          <div className="fixed inset-0 z-40 flex min-h-screen items-end justify-center overflow-y-auto px-6 pt-8 pb-40 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-black/75 transition-opacity backdrop-blur"
              aria-hidden="true"
            />
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            />
            <div className="relative z-50 inline-block w-full transform-gpu overflow-hidden rounded-xl bg-white dark:bg-gray-900 text-left align-bottom shadow-2xl shadow-black/40 transition duration-200 dark:border dark:shadow-black/80 sm:my-16 sm:max-w-md sm:align-middle">
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white dark:bg-gray-900 p-6">
                  <div className="mb-6 flex space-x-3 justify-between">
                    <h3
                      className="text-xl font-semibold leading-6 text-gray-850 dark:text-gray-50"
                      id="modal-headline"
                    >
                      Add a client
                    </h3>
                    <button
                      type="button"
                      title="Close dialog"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-md text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-50 dark:hover:bg-gray-850 hover:text-gray-850 dark:hover:text-gray-50 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="shrink-0"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.5 6.5l-11 11M6.5 6.5l11 11"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-4">
                      Select an client for the{" "}
                      <span className="font-medium">planetscale</span> project.
                    </p>
                    <select
                      name="member_id"
                      aria-label="Filter type"
                      className="focus-ring inline-block text-base rounded-md border border-gray-200 dark:border-gray-700 text-gray-850 dark:text-gray-50 py-0 pl-3 pr-8 shadow-sm h-8"
                    >
                      <optgroup label="Members">
                        <option value="9l4eau137yir" data-member-type="User">
                          Ganesh Pawar
                        </option>
                      </optgroup>
                      <optgroup label="Teams">
                        <option
                          value="o3bef2icb5ao"
                          data-member-type="OrganizationTeam"
                        >
                          Team A
                        </option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 px-6 py-4">
                  <button
                    form="add-database-admin-form"
                    type="submit"
                    className="mr-4 box-border relative inline-flex items-center justify-center text-center leading-none no-underline whitespace-nowrap font-semibold rounded-md shrink-0 transition select-none overflow-hidden focus-ring bg-gray-800 hover:bg-gray-900 dark:bg-gray-50 border border-transparent text-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900 cursor-pointer hover:text-white h-8 py-3 px-4"
                  >
                    Select client
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="box-border relative inline-flex items-center justify-center text-center leading-none no-underline whitespace-nowrap font-semibold rounded-md shrink-0 transition select-none overflow-hidden focus-ring cursor-pointer h-8 py-3 px-4 text-gray-850 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-850 focus:border-blue-500 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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

{
  /* <fieldset>
  <label
    htmlFor="clientName"
    className="inline-block mb-3 leading-none text-gray-850 dark:text-white font-semibold"
  >
    Client information
  </label>
  <input
    type="text"
    id="clientName"
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="none"
    required
    {...register("clientName")}
    className="w-full rounded-md border px-3 shadow-sm ring-offset-0 text-gray-850 dark:text-white h-8 py-1 text-base focus-ring border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
  />
</fieldset>; */
}

// <div className="bg-primary p-3">
//                 <div className="mb-3 flex space-x-3 justify-between">
//                   <div className="space-y-1">
//                     <h3
//                       className="text-xl font-semibold leading-6 text-primary"
//                       id="modal-headline"
//                     >
//                       Add an administrator
//                     </h3>
//                   </div>
//                   <button
//                     type="button"
//                     title="Close dialog"
//                     className="inline-flex h-3 w-3 items-center justify-center rounded-sm text-secondary transition-colors hover:bg-secondary hover:text-primary focus:outline-none"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       className="shrink-0"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.5"
//                         d="M17.5 6.5l-11 11M6.5 6.5l11 11"
//                       ></path>
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="mt-2">
//                   <form
//                     id="add-database-admin-form"
//                     className="mt-3"
//                     method="post"
//                     action="https://api.planetscale.com/v1/organizations/gnasamx/databases/studio/memberships"
//                   >
//                     <div className="flex flex-col">
//                       <p className="mb-2">
//                         Select an administrator for the{" "}
//                         <span className="font-medium">gnasamx</span> database.
//                       </p>
//                       <input type="hidden" name="member_type" value="User" />
//                       <select
//                         name="member_id"
//                         aria-label="Filter type"
//                         className="focus-ring inline-block rounded border border-secondary bg-primary py-0 pl-1.5 pr-4 shadow-sm h-4"
//                       >
//                         <optgroup label="Members">
//                           <option value="9l4eau137yir" data-member-type="User">
//                             Ganesh Pawar
//                           </option>
//                         </optgroup>
//                         <optgroup label="Teams">
//                           <option
//                             value="o3bef2icb5ao"
//                             data-member-type="OrganizationTeam"
//                           >
//                             Team A
//                           </option>
//                         </optgroup>
//                       </select>
//                     </div>
//                   </form>
//                 </div>
//               </div>
