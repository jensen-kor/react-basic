import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from '.-create/App.jsx'
import App from "./05-props/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
