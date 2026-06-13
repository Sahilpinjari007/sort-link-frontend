import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type CircularLoaderSize = "sm" | "md" | "lg";

export interface CircularLoaderProps {
  size?: CircularLoaderSize;
  className?: string;
  label?: string;
  inline?: boolean;
}

const SIZE_MAP: Record<CircularLoaderSize, string> = {
  sm: "h-4.5 w-4.5",
  md: "h-5.5 w-5.5",
  lg: "h-7 w-7",
};

/**
 * Premium, accessible circular spinner. Inherits `currentColor` so it adapts
 * automatically to light/dark themes and to the surrounding button variant.
 */
export function CircularLoader({
  size = "md",
  className,
  label = "Loading",
  inline = false,
}: CircularLoaderProps) {
  const icon = (
    <Loader2
      className={cn("animate-spin text-current", SIZE_MAP[size], className)}
      aria-hidden="true"
    />
  );
  if (inline) return icon;
  return (
    <span role="status" aria-live="polite" className="inline-flex items-center">
      {icon}
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default CircularLoader;
