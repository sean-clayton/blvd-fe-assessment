import { rest } from "msw";
import { DisifySingleEmailResponse } from "../disify";
import { simpleGet } from "./utils";

export const handlers = [
  simpleGet<DisifySingleEmailResponse>(
    "https://www.disify.com/api/email/test",
    {
      format: false,
    }
  ),
  simpleGet<DisifySingleEmailResponse>(
    "https://www.disify.com/api/email/test@test.example.com",
    {
      format: true,
      domain: "test.example.com",
      disposable: false,
      dns: false,
    }
  ),
  rest.get("https://www.disify.com/api/email/cause-error", (_req, res, ctx) => {
    return res(ctx.status(403));
  }),
  rest.get(
    "https://www.disify.com/api/email/another%20test",
    (_req, res, ctx) => {
      return res(ctx.status(403));
    }
  ),
];
