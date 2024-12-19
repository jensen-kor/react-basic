import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from '.-create/App.jsx'
// import App from "./05-props/App";
// import App from "./06-events/App.jsx";
// import App from "./07-slate/App.jsx";
// import App from "./08-create/App.jsx";
import App from "./09-update/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
