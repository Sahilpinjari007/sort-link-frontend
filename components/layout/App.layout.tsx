"use client";

import CircularLoader from "@/components/shared/circular-loader";
import { useCurrentUser } from "@/hooks/user.hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AppLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: user, isLoading } = useCurrentUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/auth/sign-in");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className=" w-screen h-screen flex items-center justify-center">
        <CircularLoader size="lg" inline={true} />
      </div>
    );
  }
  return (
    <div>
      it is layout
      {children}
    </div>
  );
};

export default AppLayoutClient;
