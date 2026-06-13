export interface RegisterPayload {
  fullname: string;
  email: string;
  password: string;
}

export type RegisterResponse = null;

export interface ResendOTPPayload {
  email: string
}

export type ResendOTPResponse = null;

export interface VerifyOTPPayload {
  email: string;
  otp: string;
}

export interface VerifyOTPResponse {
  accessToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface ForgetPassPayload {
  email: string;
}

export type ForgetPassResponse = null;

export interface ResetPassPayload {
  token: string;
  newPassword: string;
}
export type ResetPasswordResponse = null;
