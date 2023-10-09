import { setupWorker, rest } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

declare global {
  interface Window {
    msw: { worker: typeof worker; rest: typeof rest };
  }
}

window.msw = {
  worker,
  rest,
};
