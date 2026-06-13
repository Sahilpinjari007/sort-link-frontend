import ForgetPasswordForm from "@/components/forms/forget-password.form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your SortLink account password securely.",
};

const ForgetPasswordPage = () => {
  return <ForgetPasswordForm />;
};

export default ForgetPasswordPage;
