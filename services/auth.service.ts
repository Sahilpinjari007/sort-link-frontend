import { api } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";
import {
  ForgetPassPayload,
  ForgetPassResponse,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  ResendOTPPayload,
  ResendOTPResponse,
  ResetPassPayload,
  ResetPasswordResponse,
  VerifyOTPPayload,
  VerifyOTPResponse,
} from "@/types/auth.types";

export const registerUser = async (payload: RegisterPayload) => {
  const response = await api.post<ApiResponse<RegisterResponse>>(
    "/auth/register",
    payload,
  );
  return response.data;
};

export const resendOTP = async (payload: ResendOTPPayload) => {
  const response = await api.post<ApiResponse<ResendOTPResponse>>(
    "/auth/resend-otp",
    payload,
  );
  return response.data;
};

export const verfiyOTP = async (payload: VerifyOTPPayload) => {
  const response = await api.post<ApiResponse<VerifyOTPResponse>>(
    "/auth/verify-otp",
    payload,
  );
  return response.data;
};

export const loginUser = async (payload: LoginPayload) => {
  const response = await api.post<ApiResponse<LoginResponse>>(
    "/auth/login",
    payload,
  );
  return response.data;
};

export const forgetPass = async (payload: ForgetPassPayload) => {
  const response = await api.post<ApiResponse<ForgetPassResponse>>(
    "/auth/forget-password",
    payload,
  );
  return response.data;
};

export const resetPass = async (payload: ResetPassPayload) => {
  const response = await api.post<ApiResponse<ResetPasswordResponse>>(
    "/auth/reset-password",
    payload,
  );
  return response.data;
};