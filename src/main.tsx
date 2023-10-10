import * as ReactDOM from "react-dom/client";
import AppWrapper from "./app-wrapper";
import App from "./app";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <AppWrapper>
    <App />
  </AppWrapper>
);
