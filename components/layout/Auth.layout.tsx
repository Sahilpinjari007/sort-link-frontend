"use client";

import { Logo } from "@/components/logo";
import CircularLoader from "@/components/shared/circular-loader";
import { useCurrentUser } from "@/hooks/user.hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

const AuthLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: user, isLoading } = useCurrentUser();

  useEffect(() => {
    if (!isLoading && user) {
      toast.success("Sign in successfuly — welcome back 🎉");
      router.replace("/app/dashboard");
    }
  }, [user, isLoading, router]);

  if (isLoading || user) {
    return (
      <div className=" w-screen h-screen flex items-center justify-center">
        <CircularLoader size="lg" inline={true} />
      </div>
    );
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-6 py-10 sm:px-10">
        <div className="flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Home
          </Link>
        </div>
        {children}
        <p className="text-xs text-muted-foreground">
          © 2026 SortLink. All rights reserved.
        </p>
      </div>
      <div className="relative hidden overflow-hidden border-l border-border/60 bg-muted/40 lg:block">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md">
            <blockquote className="text-2xl font-medium tracking-tight">
              &quot;SortLink replaced three tools we used to pay for. The
              analytics are stunning and the dashboard just gets out of the
              way.&quot;
            </blockquote>
            <div className="mt-6">
              <p className="text-sm font-semibold">Maya Chen</p>
              <p className="text-xs text-muted-foreground">
                Head of Growth, Northwind
              </p>
            </div>
            <div className="mt-12 rounded-2xl border border-border/80 bg-card p-5 shadow-pop">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>sortlink.io/launch</span>
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                128,402
              </p>
              <p className="text-xs text-muted-foreground">
                Total clicks · last 24h
              </p>
              <div className="mt-4 grid grid-cols-7 items-end gap-1.5">
                <div
                  className="rounded-sm bg-foreground/80"
                  style={{ height: "40%", minHeight: 8 }}
                />
                <div
                  className="rounded-sm bg-foreground/80"
                  style={{ height: "65%", minHeight: 8 }}
                />
                <div
                  className="rounded-sm bg-foreground/80"
                  style={{ height: "30%", minHeight: 8 }}
                />
                <div
                  className="rounded-sm bg-foreground/80"
                  style={{ height: "80%", minHeight: 8 }}
                />
                <div
                  className="rounded-sm bg-foreground/80"
                  style={{ height: "55%", minHeight: 8 }}
                />
                <div
                  className="rounded-sm bg-foreground/80"
                  style={{ height: "90%", minHeight: 8 }}
                />
                <div
                  className="rounded-sm bg-foreground/80"
                  style={{ height: "70%", minHeight: 8 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayoutClient;
