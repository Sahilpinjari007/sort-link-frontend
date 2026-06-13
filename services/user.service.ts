import { api } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";
import { GetUserCurrentResponse } from "@/types/user.types";

export const getCurrentUser = async () => {
  const response = await api.get<ApiResponse<GetUserCurrentResponse>>("/user/me");
  return response.data;
};
