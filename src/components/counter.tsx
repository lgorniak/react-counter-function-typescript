import React, { useEffect, useState } from "react";
import { Count } from "../types/count";

const formatCounter = (counter: Count | null): string | number => {
	let counterValue: string | number;

	counter
		? counter.number === 0
			? (counterValue = `Zero`)
			: (counterValue = counter.number)
		: (counterValue = `Counter Object not set`);

	return counterValue;
};

const iterateCounter = (
	counter: Count | null,
	customHook: React.Dispatch<React.SetStateAction<Count | null>>
) => {
	if (counter) {
		customHook({ number: counter.number + 1, tags: counter.tags });
	}
};

const getBadgeClasses = (counter: Count | null): string => {
	let classes = "badge m-2 bg-";
	classes += counter?.number === 0 ? "warning" : "info";
	return classes;
};

const Counter = (): JSX.Element => {
	const [counter, setCounter] = useState<Count | null>(null);

	useEffect((): void => {
		setCounter({ number: 0, tags: ["tag1", "tag2", "tag3"] });
	}, []);

	return (
		<>
			<span className={getBadgeClasses(counter)}>{formatCounter(counter)}</span>

			<button
				className="btn btn-success btn-sm"
				onClick={() => iterateCounter(counter, setCounter)}
			>
				Increment
			</button>
			<ul>
				{counter ? counter.tags.map((tag) => <li key={tag}>{tag}</li>) : null}
			</ul>
		</>
	);
};

export default Counter;
