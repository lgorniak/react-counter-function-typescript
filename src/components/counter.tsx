import React, { useEffect, useState } from "react";
import { Count } from "../types/count";

function Counter() {
	const [counter, setCounter] = useState<Count | null>(null);

	useEffect(() => {
		setCounter({ number: 0 });
	}, []);

	const formatCounter = () => {
		let counterValue: string | number;

		counter
			? counter.number === 0
				? (counterValue = `Zero`)
				: (counterValue = counter.number)
			: (counterValue = `State Object not set`);

		return counterValue;
	};

	const iterateCounter = () => {
		if (counter) setCounter({ number: counter.number + 1 });
	};

	return (
		<>
			<h1>{formatCounter()}</h1>
			<button onClick={iterateCounter}>Increment</button>
		</>
	);
}

export default Counter;
