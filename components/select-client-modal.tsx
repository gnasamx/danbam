import Backdrop from "./backdrop";

type SelectClientProps = {
  setOpen: Function;
};

export default function SelectClient({ setOpen }: SelectClientProps) {
  return (
    <Backdrop>
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
            Select a client for the{" "}
            <span className="font-medium">planetscale</span> project.
          </p>
          <select
            name="member_id"
            aria-label="Filter type"
            className="focus-ring inline-block text-base rounded-md border border-gray-200 dark:border-gray-700 text-gray-850 dark:text-gray-50 bg-white dark:bg-gray-900 py-0 pl-3 pr-8 shadow-sm h-8"
          >
            <option value="9l4eau137yir" data-member-type="User">
              Client A
            </option>
            <option value="o3bef2icb5ao" data-member-type="OrganizationTeam">
              Client B
            </option>
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
    </Backdrop>
  );
}
