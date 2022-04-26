import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Counters from "../counters/counters";
import MovieView from "../movieView/moveView";
import { CountersType } from "../counters/countersType";

const App = (): JSX.Element => {
	const [counters, setCounters] = useState<CountersType[]>([]);

	useEffect((): void => {
		setCounters([
			{ data: { id: 0, value: 0, selected: true, tags: ["tag 1"] } },
			{
				data: { id: 1, value: 1, selected: true, tags: ["tag 2", "tag  3"] },
			},
			{
				data: {
					id: 2,
					value: 2,
					selected: true,
					tags: ["tag 4", "tag 5", "tag 6"],
				},
			},
			{
				data: {
					id: 3,
					value: 3,
					selected: true,
					tags: ["tag7 ", "tag 8", "tag 9", "tag 10"],
				},
			},
		]);
	}, []);

	const handleReset = (): void => {
		const resetCounters = counters.map((counter) => {
			counter.data.value = 0;
			return counter;
		});
		setCounters(resetCounters);
	};

	const iterateCounter = (id: number): void => {
		const iteratedCounter = counters.map((counter) => {
			if (counter.data.id === id) {
				counter.data.value++;
			}
			return counter;
		});
		setCounters(iteratedCounter);
	};

	const handleDelete = (id: number): void => {
		const reducedCounters = counters.filter((c) => c.data.id !== id);
		setCounters(reducedCounters);
	};
	return (
		<>
			<Navbar
				data={counters.filter((counter) => counter.data.value !== 0).length}
			/>
			<div className="container-sm">
				<div className="row">
					<div className="col-8">
						<MovieView />
					</div>
					<div className="col-4 p-4">
						<Counters
							data={counters}
							onDelete={handleDelete}
							onReset={handleReset}
							onIterate={iterateCounter}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
