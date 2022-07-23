import Github from "@/components/icons/github";
import { capitalize } from "@/lib/text";
import { useTheme } from "next-themes";

const DesignSystem = () => {
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className="flex h-screen flex-col">
      <main className="relative mx-auto w-full flex-1 px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto h-full max-w-7xl">
          <div className="absolute bottom-10 right-10">
            <select
              id="theme"
              name="theme"
              value={theme}
              onChange={(event) => {
                setTheme(event.target.value);
              }}
              className="btn btn-primary btn-sm rounded-full h-auto text-left"
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {capitalize(theme)}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Buttons</h2>
            <ul className="space-y-4">
              <li className="space-y-2">
                <p>Primary button</p>
                <button className="btn btn-primary">Primary</button>
              </li>
              <li className="space-y-3">
                <p>Primary button with icon</p>
                <button className="btn btn-primary">
                  <Github />
                  <span>Primary with icon</span>
                </button>
              </li>
              <li className="space-y-2">
                <p>Secondary button</p>
                <button className="btn btn-secondary">Secondary</button>
              </li>
              <li className="space-y-3">
                <p>Secondary button with icon</p>
                <button className="btn btn-secondary">
                  <Github />
                  <span>Secondary with icon</span>
                </button>
              </li>
              <li className="space-y-2">
                <p>Small button</p>
                <button className="btn btn-primary btn-sm">Small button</button>
              </li>
              <li className="space-y-3">
                <p>Danger button</p>
                <button className="btn btn-danger">Danger button</button>
              </li>
            </ul>
            <h2 className="text-xl font-semibold">Typography</h2>
            <ul className="space-y-4">
              <li className="space-y-2">
                <p className="text-gray-850 dark:text-white">Text primary</p>
                <p className="text-gray-850 dark:text-white">Text primary</p>
                <p className="text-gray-850 dark:text-white">Text primary</p>
              </li>
              <li className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  Text secondary
                </p>
              </li>
              <li className="space-y-2">
                <p className="text-red-600 dark:text-red-500">Text red</p>
              </li>
            </ul>
            <h2 className="text-xl font-semibold">Form</h2>
            <ul className="space-y-4">
              <li className="space-y-2 w-80">
                <p>Input</p>
                <input type="text" value="Danbam" />
              </li>
              <li className="space-y-2 w-80">
                <p>Select</p>
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesignSystem;
