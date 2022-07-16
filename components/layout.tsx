import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <main className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 lg:px-16">
        <div className="mx-auto h-full max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
