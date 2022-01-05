import { StrictMode } from "react";
import { render } from "react-dom";

import Root from "containers/root";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = document.getElementById("root");

render(
  <StrictMode>
    <Root />
  </StrictMode>,
  root,
);

reportWebVitals();
