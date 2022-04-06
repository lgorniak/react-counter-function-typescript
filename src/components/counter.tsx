import React, { useState } from "react";
import { Count } from "../types/count";

function Counter() {
	const [counter, setCounter] = useState<Count | null>(null);

	const formatCounter = () => {
		let value: string | number;

		counter
			? counter.number === 0
				? (value = `Zero`)
				: (value = counter.number)
			: (value = `State Object not set`);

		return value;
	};

	const iterateCounter = () => {
		counter
			? setCounter({ number: counter.number + 1 })
			: setCounter({ number: 0 });
	};

	return (
		<>
			<h1>{formatCounter()}</h1>
			<button onClick={iterateCounter}>Increment</button>
		</>
	);
}

export default Counter;
