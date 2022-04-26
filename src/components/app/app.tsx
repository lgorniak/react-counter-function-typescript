import React from "react";
import Navbar from "../navbar/navbar";
import Counters from "../counters/counters";
import MovieView from "../movieView/moveView";

const App = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<div className="container-xxl">
				<div className="row">
					<div className="col-8">
						<MovieView />
					</div>
					<div className="col-4 p-4">
						<Counters />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
