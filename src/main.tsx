import * as ReactDOM from "react-dom/client";
import AppWrapper from "./app-wrapper";
import App from "./app";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

async function prepareApp() {
  // Only in development do we want to bundle the MSW worker.
  // Make sure it's started before running the app in this case.
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    return worker.start();
  }

  // If not in development, just immediately resolve this promise so we can
  // start the app as soon as possible.
  return Promise.resolve();
}

prepareApp().then(() => {
  root.render(
    <AppWrapper>
      <App />
    </AppWrapper>
  );
});
