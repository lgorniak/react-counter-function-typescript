import React from "react";
import Navbar from "../navbar/navbar";
import Counters from "../counters/counters";
import MovieView from "../movieView/moveView";

const App = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Counters />
				<MovieView />
			</div>
		</>
	);
};

export default App;
