import SignUpForm from "@/components/forms/sign-up.form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create your SortLink account and start managing links.",
};

const SignUpPage = () => {
  return <SignUpForm />;
};

export default SignUpPage;
