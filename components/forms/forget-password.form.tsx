"use client";

import { useForgetPass } from "@/hooks/auth.hooks";
import { getApiErrorMessage } from "@/lib/api-error";
import { ForgetPassInput, ForgetPassSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ForgetPasswordForm = () => {
  const forgetPassMutation = useForgetPass();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPassInput>({ resolver: zodResolver(ForgetPassSchema) });

  const onSubmit = (data: ForgetPassInput) => {
    forgetPassMutation.mutate(
      {
        email: data.email,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error));
        },
      },
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Reset your password
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Enter your email and we&apos;ll send a reset link.
      </p>
      <div className="mt-8">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="email"
              placeholder="you@company.com"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full rounded-lg"
            type="submit"
            disabled={forgetPassMutation.isPending}
          >
            {forgetPassMutation.isPending ? "Sending…" : "Send reset link"}
          </button>
        </form>
      </div>
      <div className="mt-6 text-sm text-muted-foreground">
        <Link href="/auth/sign-in" className="text-foreground hover:underline">
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
