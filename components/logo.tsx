import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  withText = true,
}: {
  className?: string;
  withText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-semibold tracking-tight",
        className,
      )}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 14a4 4 0 0 1 0-5.66l3-3a4 4 0 1 1 5.66 5.66l-1.5 1.5" />
          <path d="M14 10a4 4 0 0 1 0 5.66l-3 3a4 4 0 1 1-5.66-5.66l1.5-1.5" />
        </svg>
      </span>
      {withText && <span className="text-[15px]">SortLink</span>}
    </Link>
  );
}
