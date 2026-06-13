"use client";

import { useResetPass } from "@/hooks/auth.hooks";
import { getApiErrorMessage } from "@/lib/api-error";
import { ResetPassInput, ResetPassSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token")!;

  const resetPassMutation = useResetPass();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassInput>({
    resolver: zodResolver(ResetPassSchema),
  });

  const onSubmit = async (data: ResetPassInput) => {
    resetPassMutation.mutate(
      {
        token,
        newPassword: data.newPassword,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);
          setTimeout(() => {
            router.replace("/auth/sign-in");
          }, 600);
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error));
        },
      },
    );
  };

  if (!token) {
    return (
      <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-16">
        <div className="max-w-md text-center">
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Invalid reset password link!
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This reset password link you&apos;re looking for doesn&apos;t exist
            or has been expired.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Set a new password
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Choose a strong password you haven&apos;t used before.
      </p>
      <div className="mt-8">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              New password
            </label>
            <input
              type="password"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="password"
              {...register("newPassword")}
            />
            {errors.newPassword && (
              <p className="text-xs text-destructive">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="confirm"
            >
              Confirm password
            </label>
            <input
              type="password"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="confirm"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full rounded-lg"
            type="submit"
            disabled={resetPassMutation.isPending}
          >
            {resetPassMutation.isPending ? "Updating…" : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
