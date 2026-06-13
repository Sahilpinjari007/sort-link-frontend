import {
  forgetPass,
  loginUser,
  registerUser,
  resendOTP,
  resetPass,
  verfiyOTP,
} from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useResendOTP = () => {
  return useMutation({
    mutationFn: resendOTP,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useVerfiyOTP = () => {
  return useMutation({
    mutationFn: verfiyOTP,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useForgetPass = () => {
  return useMutation({
    mutationFn: forgetPass,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useResetPass = () => {
  return useMutation({
    mutationFn: resetPass,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

