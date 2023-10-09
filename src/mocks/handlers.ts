import { DisifySingleEmailResponse } from "../disify";
import { get } from "./utils";

export const handlers = [
  get<DisifySingleEmailResponse>("https://www.disify.com/api/email/test", {
    format: false,
  }),
  get<DisifySingleEmailResponse>(
    "https://www.disify.com/api/email/test@test.example.com",
    {
      format: true,
      domain: "test.example.com",
      disposable: false,
      dns: false,
    }
  ),
];
