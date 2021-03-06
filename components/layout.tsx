import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Logo from "./icons/logo";
import { useTheme } from "next-themes";
import { capitalize } from "@/lib/text";
import { signOut, useSession } from "next-auth/react";

type LayoutProps = {
  children: React.ReactNode;
};

const navigationList = [
  { label: "Time", path: "/time" },
  { label: "Projects", path: "/projects" },
  { label: "Team", path: "/team" },
  { label: "Settings", path: "/settings" },
] as const;

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const { theme, themes, setTheme } = useTheme();

  return (
    <div>
      <div className="relative z-40 border-b border-gray-100 dark:border-gray-800  px-6 sm:px-12 lg:px-16">
        <header className="relative mx-auto max-w-7xl">
          <div className="flex items-center pt-6 pb-4 md:pt-8 md:pb-6">
            <div className="mr-2 flex shrink-0 items-center">
              <Link aria-label="Go to dashboard" href="/">
                <a className="rounded text-gray-850 dark:text-white">
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="flex flex-grow items-center">
              <div className="hidden items-center p-1 text-lg leading-3 sm:flex">
                <Link href="/gnasamx/inbox">
                  <a className="flex items-center rounded text-lg leading-none text-gray-850 dark:text-white transition font-medium">
                    inbox
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-none items-center">
              <details className="relative inline-flex">
                <summary
                  className="inline-flex cursor-pointer rounded-full hide-webkit-marker"
                  aria-haspopup="true"
                >
                  <div
                    title={session?.user?.name || ""}
                    className="relative inline-flex flex-shrink-0 rounded-full"
                  >
                    <Image
                      src={session?.user?.image || "/gravatar-fallback.png"}
                      alt={session?.user?.name || "Profile image"}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full"></div>
                  </div>
                </summary>
                <div className="absolute z-40 mt-2 w-60 rounded-lg bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:shadow-black dark:border-gray-800 right-0 origin-top-right">
                  <div className="py-2">
                    <li className="list-none">
                      <Link href="/settings">
                        <a className="block px-6 py-2 text-gray-850 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-850">
                          Settings
                        </a>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link href="/design-system">
                        <a className="block px-6 py-2 text-gray-850 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-850">
                          Design system
                        </a>
                      </Link>
                    </li>
                    <li className="list-none">
                      <hr className="my-2 border-t border-t-gray-100 dark:border-t-gray-800" />
                    </li>
                    <li className="list-none">
                      <button
                        type="button"
                        onClick={() => signOut()}
                        className="block w-full rounded-none px-6 py-2 text-left text-gray-850 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-850"
                      >
                        Sign out
                      </button>
                    </li>
                  </div>
                  <div className="rounded-b-lg border-t border-t-gray-100 dark:border-t-gray-800 bg-gray-50 dark:bg-gray-850 py-3 px-6">
                    <div className="flex items-stretch rounded-md border border-gray-200 dark:border-gray-700 text-gray-850 dark:text-white shadow-sm h-8">
                      <label className="mb-0 flex select-none items-center space-x-1 whitespace-nowrap rounded-l-md border-r border-gray-200 dark:border-gray-700 bg-gray-050 dark:bg-gray-850 px-3 font-medium">
                        <span>Theme</span>
                      </label>
                      <select
                        id="theme"
                        name="theme"
                        value={theme}
                        onChange={(event) => {
                          setTheme(event.target.value);
                        }}
                        className="text-base inline-block rounded bg-white dark:bg-gray-900 py-0  pl-4 pr-8 h-auto w-full rounded-l-none rounded-r-md border-none shadow-none"
                      >
                        {themes.map((theme) => (
                          <option key={theme} value={theme}>
                            {capitalize(theme)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
          <div className="flex space-x-6 overflow-x-auto sm:space-x-0">
            {navigationList.map((navigationItem) => {
              return (
                <Link href={navigationItem.path} key={navigationItem.label}>
                  <a
                    className={classNames(
                      "whitespace-nowrap border-b pb-4 pt-2 leading-none text-gray-850 dark:text-white transition sm:px-4 border-transparent",
                      {
                        "border-blue-500 font-semibold":
                          router.pathname.includes(navigationItem.path),
                      },
                      {
                        "hover:border-gray-300 dark:hover:border-gray-600":
                          router.pathname.includes(navigationItem.path),
                      }
                    )}
                  >
                    {navigationItem.label}
                  </a>
                </Link>
              );
            })}
          </div>
        </header>
      </div>
      <div className="flex h-screen flex-col">
        <main className="mx-auto w-full flex-1 px-6 py-12 sm:px-12 lg:px-16">
          <div className="mx-auto h-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
