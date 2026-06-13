import { ZodError } from "zod";

export const getZodErrorMessage = (error: unknown): string => {
  if (error instanceof ZodError) {
    return error.issues[0]?.message || "Something went wrong";
  }

  return "Something went wrong";
};