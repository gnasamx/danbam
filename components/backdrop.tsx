type BackdropProps = {
  children: React.ReactNode;
};
export default function Backdrop({ children }: BackdropProps) {
  return (
    <div className="fixed inset-0 z-40 flex min-h-screen items-end justify-center overflow-y-auto px-6 pt-8 pb-40 text-center sm:block sm:p-0">
      <div
        className="fixed inset-0 bg-black/75 transition-opacity backdrop-blur"
        aria-hidden="true"
      />
      <span
        className="hidden sm:inline-block sm:h-screen sm:align-middle"
        aria-hidden="true"
      />
      <div className="relative z-50 inline-block w-full transform-gpu overflow-hidden rounded-xl bg-white dark:bg-gray-900 text-left align-bottom shadow-2xl shadow-black/40 transition duration-200 border-gray-100 dark:border-gray-800 dark:shadow-black/80 sm:my-16 sm:max-w-md sm:align-middle">
        <div role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          {children}
        </div>
      </div>
    </div>
  );
}
