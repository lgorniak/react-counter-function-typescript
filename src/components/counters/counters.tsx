import React, { useEffect, useState } from "react";
import Counter from "../counter/counter";
import { CountersType } from "./countersType";

const Counters = (): JSX.Element => {
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

	const handleDelete = (id: number): void => {
		const reducedCounters = counters.filter((c) => c.data.id !== id);
		setCounters(reducedCounters);
	};

	return (
		<>
			{counters.map((counter) => {
				const { data } = counter;
				return (
					<Counter key={data.id} data={data} onDelete={handleDelete}></Counter>
				);
			})}
		</>
	);
};

export default Counters;
