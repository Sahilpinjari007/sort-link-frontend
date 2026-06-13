import AppLayoutClient from "@/components/layout/App.layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | SortLink",
  },
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppLayoutClient>{children}</AppLayoutClient>;
};

export default AppLayout;
