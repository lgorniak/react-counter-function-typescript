import React, { useEffect, useState } from "react";
import Counter from "./counter";
import { Count } from "./count";

interface CountersType {
	id: number;
	data: Count;
}

const Counters = (): JSX.Element => {
	const [counters, setCounters] = useState<CountersType[]>([]);

	useEffect((): void => {
		setCounters([
			{ id: 0, data: { value: 0, selected: true, tags: ["tag 1"] } },
			{ id: 1, data: { value: 1, selected: true, tags: ["tag 2", "tag  3"] } },
			{
				id: 2,
				data: { value: 2, selected: true, tags: ["tag 4", "tag 5", "tag 6"] },
			},
			{
				id: 3,
				data: {
					value: 3,
					selected: true,
					tags: ["tag7 ", "tag 8", "tag 9", "tag 10"],
				},
			},
		]);
	}, []);

	const handleDelete = (id: number): void => {
		const reducedCounters = counters.filter((c) => c.id !== id);
		setCounters(reducedCounters);
	};

	return (
		<>
			{counters.map((counter) => {
				const { id, data } = counter;
				return (
					<Counter
						key={id}
						id={id}
						data={data}
						onDelete={handleDelete}
					></Counter>
				);
			})}
		</>
	);
};

export default Counters;
