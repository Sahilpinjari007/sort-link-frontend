"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handlToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:flex"
        >
          <div style={{ position: "relative" }}>
            <ul
              data-orientation="horizontal"
              className="group flex flex-1 list-none items-center justify-center space-x-1 gap-1"
              dir="ltr"
            >
              <li>
                <Link
                  href="/#features"
                  className="inline-flex h-10 items-center justify-center rounded-lg px-3.5 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  data-radix-collection-item=""
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#analytics"
                  className="inline-flex h-10 items-center justify-center rounded-lg px-3.5 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  data-radix-collection-item=""
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="inline-flex h-10 items-center justify-center rounded-lg px-3.5 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  data-radix-collection-item=""
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="inline-flex h-10 items-center justify-center rounded-lg px-3.5 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  data-radix-collection-item=""
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute left-0 top-full flex justify-center" />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/auth/sign-in"
            className="hidden h-10 items-center rounded-lg px-4 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground md:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-2 hidden h-10 rounded-lg px-4 text-[14px] md:inline-flex"
          >
            Start free
          </Link>
          <button
            onClick={handlToggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            aria-label="Toggle menu"
          >
            {!toggleMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`border-t border-border/60 lg:hidden ${!toggleMenu ? "hidden" : "block"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          <Link
            href="/#features"
            className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
          >
            Features
          </Link>
          <Link
            href="/#analytics"
            className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
          >
            Analytics
          </Link>
          <Link
            href="/#pricing"
            className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
          >
            FAQ
          </Link>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border/60 pt-3">
            <Link
              href="/auth/sign-in"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/auth/sign-up"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Start free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
