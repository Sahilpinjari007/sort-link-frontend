"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error(error);
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold tracking-tight">
            This page didn&apos;t load
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong on our end. Try refreshing or head back home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => reset()}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
