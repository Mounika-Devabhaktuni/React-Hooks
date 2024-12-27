import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ComponentA from "./ComponentA";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ComponentA />
  </StrictMode>
);
