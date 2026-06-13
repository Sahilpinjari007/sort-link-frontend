"use client";

import CircularLoader from "@/components/shared/circular-loader";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useResendOTP, useVerfiyOTP } from "@/hooks/auth.hooks";
import { getApiErrorMessage } from "@/lib/api-error";
import { getZodErrorMessage } from "@/lib/zod-error";
import { verifyOtpSchema } from "@/schemas/auth.schemas";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const VerifyOTPForm = () => {
  const [code, setCode] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(60);
  const tickRef = useRef<number | null>(null);

  const email =
    typeof window !== "undefined" ? sessionStorage.getItem("verifyEmail")! : "";
  const router = useRouter();

  const verfiyOTPMutation = useVerfiyOTP();
  const resendOTPMutation = useResendOTP();

  useEffect(() => {
    if (!email) {
      router.replace("/auth/sign-up");
    }
  }, [email, router]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    tickRef.current = window.setInterval(
      () => setSecondsLeft((s) => Math.max(0, s - 1)),
      1000,
    );
    return () => {
      if (tickRef.current) window.clearInterval(tickRef.current);
    };
  }, [secondsLeft]);

  useEffect(() => {
    if (code.length === 6 && !verfiyOTPMutation.isPending) {
      const validation = verifyOtpSchema.safeParse({ email, otp: code });

      if (!validation.success) {
        toast.error(getZodErrorMessage(validation.error));
        return;
      }

      verfiyOTPMutation.mutate(
        {
          email,
          otp: code,
        },
        {
          onSuccess: (response) => {
            toast.success("Email verified — welcome to SortLink! 🎉");
            router.replace("/app/dashboard");
          },
          onError: (error: unknown) => {
            setCode("");
            toast.error(getApiErrorMessage(error));
          },
        },
      );
    }
  }, [code, router]);

  const handleOTPChange = (otp: string) => {
    setCode(otp.replace(/\D/g, ""));
  };

  const handleResend = () => {
    resendOTPMutation.mutate(
      {
        email,
      },
      {
        onSuccess: (response) => {
          setSecondsLeft(60);
          setCode("");
          toast.success(response.message);
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error));
        },
      },
    );
  };

  if (!email) {
    return (
      <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center items-center py-16">
        <CircularLoader size="lg" />
      </div>
    );
  }
  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Verify your email
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        We sent a 6-digit code to {email}. Enter it below to continue.
      </p>
      <div className="mt-8">
        <div className="rounded-2xl border border-border/80 bg-muted/30 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background">
              <svg
                aria-hidden="true"
                className="lucide lucide-mail h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect height="16" rx="2" width="20" x="2" y="4" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Code sent</p>
              <p className="truncate text-xs text-muted-foreground">{email}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <InputOTP
              maxLength={6}
              value={code}
              onChange={handleOTPChange}
              disabled={verfiyOTPMutation.isPending}
            >
              <InputOTPGroup>
                {[0, 1, 2].map((i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="h-12 w-11 text-base"
                  />
                ))}
              </InputOTPGroup>
              <div className="mx-2 h-px w-3 self-center bg-border" />
              <InputOTPGroup>
                {[3, 4, 5].map((i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="h-12 w-11 text-base"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          {verfiyOTPMutation.isPending && (
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <CircularLoader size="sm" inline /> Verifying...
            </p>
          )}
          {!verfiyOTPMutation.isPending && (
            <p className="mt-4 text-center text-xs text-muted-foreground">
              You can paste the full code from your email — auto-detect is on.
            </p>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={handleResend}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
            disabled={secondsLeft > 0}
          >
            {secondsLeft > 0 ? `Resend in ${secondsLeft}s` : "Resend code"}
          </button>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>
          Wrong email?{" "}
          <Link
            className="font-medium text-foreground hover:underline"
            href="/auth/sign-up"
          >
            Change email
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTPForm;
