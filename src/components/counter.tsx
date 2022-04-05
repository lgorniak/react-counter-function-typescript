import React, { useState } from "react";

function Counter() {
	const [count, setCounter] = useState(0);

	const formatCounter = () => {
		return count === 0 ? "Zero" : count;
	};

	return (
		<React.Fragment>
			<h1>{formatCounter()}</h1>
			<button onClick={() => setCounter(count + 1)}>Increment</button>
		</React.Fragment>
	);
}

export default Counter;
