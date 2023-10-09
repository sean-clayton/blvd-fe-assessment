import { DefaultBodyType, PathParams, rest } from "msw";

export function get<T extends DefaultBodyType>(url: string, response: T) {
  return rest.get<DefaultBodyType, PathParams<never>, T>(
    url,
    (_req, res, ctx) => {
      return res(ctx.json(response));
    }
  );
}
