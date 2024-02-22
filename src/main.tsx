import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/style.scss";
import App from "./app/app.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
