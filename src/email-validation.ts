import { DisifySingleEmailResponse } from "./disify";

export type EmailValidationResult = {
  email: string;
  result?: DisifySingleEmailResponse;
  error?: string;
};
