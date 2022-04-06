import React, { useEffect, useState } from "react";
import { Count } from "../types/count";

const formatCounter = (counter: Count | null): string | number => {
	let counterValue: string | number;

	counter
		? counter.number === 0
			? (counterValue = `Zero`)
			: (counterValue = counter.number)
		: (counterValue = `State Object not set`);

	return counterValue;
};

const iterateCounter = (
	counter: Count | null,
	customHook: React.Dispatch<React.SetStateAction<Count | null>>
) => {
	if (counter) customHook({ number: counter.number + 1 });
};

const Counter = (): JSX.Element => {
	const [counter, setCounter] = useState<Count | null>(null);

	useEffect((): void => {
		setCounter({ number: 0 });
	}, []);

	return (
		<>
			<h1>{formatCounter(counter)}</h1>
			<button onClick={() => iterateCounter(counter, setCounter)}>
				Increment
			</button>
		</>
	);
};

export default Counter;
