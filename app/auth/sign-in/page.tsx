import SignInForm from "@/components/forms/sign-in.form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your SortLink account and manage your links.",
};

const SignIn = () => {
  return <SignInForm />;
};

export default SignIn;
