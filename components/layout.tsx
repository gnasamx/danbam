import Link from "next/link";
import * as React from "react";
import Logo from "./logo";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="relative z-40 border-b bg-primary text-primary px-6 sm:px-12 lg:px-16">
        <header className="relative mx-auto max-w-7xl">
          <div className="flex items-center pt-6 pb-4 md:pt-8 md:pb-6">
            <div className="mr-2 flex shrink-0 items-center">
              <Link aria-label="Go to dashboard" href="/">
                <a className="rounded text-primary">
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="flex flex-grow items-center">
              <div className="hidden items-center p-1 text-lg leading-3 sm:flex">
                <Link href="/gnasamx/inbox">
                  <a className="flex items-center rounded text-lg leading-none text-primary transition font-medium">
                    inbox
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 overflow-x-auto sm:space-x-0">
            <Link href="/time">
              <a className="whitespace-nowrap border-b pb-4 pt-2 leading-none text-primary transition sm:px-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                Time
              </a>
            </Link>
            <Link href="/projects">
              <a className="whitespace-nowrap border-b pb-4 pt-2 leading-none text-primary transition sm:px-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                Projects
              </a>
            </Link>
            <Link href="/overview">
              <a className="whitespace-nowrap border-b pb-4 pt-2 leading-none text-primary transition sm:px-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                Branches
              </a>
            </Link>
            <Link href="/overview">
              <a className="whitespace-nowrap border-b pb-4 pt-2 leading-none text-primary transition sm:px-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                Settings
              </a>
            </Link>
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
