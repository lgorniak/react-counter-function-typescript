import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./components/counter";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<Counter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
