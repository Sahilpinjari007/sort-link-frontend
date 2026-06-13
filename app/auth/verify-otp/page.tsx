import { Metadata } from "next";
import VerifyOTPForm from "../../../components/forms/verfiy-otp.form";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to activate your SortLink account.",
};

const VerifyOTPPage = () => {
  return <VerifyOTPForm />;
};

export default VerifyOTPPage;
