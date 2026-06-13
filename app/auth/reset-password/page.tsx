import ResetPasswordForm from "@/components/forms/reset-password.form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Create a new password for your SortLink account.",
};

const ResetPasswordPage = () => {
  return <ResetPasswordForm />;
};

export default ResetPasswordPage;
