import axios from "axios";

export const getApiErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.log(error?.response)
    return (
      error.response?.data?.message || error.message || "Something went wrong"
    );
  }

  return "Unexpected error occured";
};
