import React from "react";
import "./index.css";
import Counters from "./components/counters/counters";
import MovieView from "./components/movieView/moveView";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
	<>
		<Counters />
		<MovieView />
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
