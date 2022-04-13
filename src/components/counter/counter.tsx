import React, { useEffect, useState } from "react";
import { Count } from "./count";

interface Props {
	value: number;
	selected: boolean;
	tags: string[];
}

const formatCounter = (counter: Count | null): string | number => {
	let counterValue: string | number;

	counter
		? counter.value === 0
			? (counterValue = `Zero`)
			: (counterValue = counter.value)
		: (counterValue = `Counter Object not set`);

	return counterValue;
};

const iterateCounter = (
	counter: Count | null,
	customHook: React.Dispatch<React.SetStateAction<Count | null>>
) => {
	if (counter) {
		customHook({
			value: counter.value + 1,
			selected: counter.selected,
			tags: counter.tags,
		});
	}
};

const getBadgeClasses = (counter: Count | null): string => {
	let classes = "badge m-2 bg-";
	classes += counter?.value === 0 ? "warning" : "info";
	return classes;
};

const renderListItems = (
	counter: Count | null
): JSX.Element | JSX.Element[] | null => {
	if (counter && counter.tags.length === 0) return <p>There are not Tags"</p>;
	return counter && counter.tags.map((tag) => <span>{tag} </span>);
};

const Counter = (props: Props): JSX.Element => {
	const [counter, setCounter] = useState<Count | null>(null);
	const { value, tags, selected } = props;

	useEffect((): void => {
		setCounter({ value, selected, tags });
	}, [tags, selected, value]);

	return (
		<>
			<span className={getBadgeClasses(counter)}>{formatCounter(counter)}</span>
			<button
				className="btn btn-success btn-sm"
				onClick={() => iterateCounter(counter, setCounter)}
			>
				Increment
			</button>
			<div>{renderListItems(counter)}</div>
		</>
	);
};

export default Counter;
