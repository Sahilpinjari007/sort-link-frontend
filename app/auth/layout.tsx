import AuthLayoutClient from "@/components/layout/Auth.layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Authentication",
    template: "%s | SortLink",
  },
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayoutClient>{children}</AuthLayoutClient>;
};

export default AuthLayout;
