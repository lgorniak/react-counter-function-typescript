import React, { useEffect, useState } from "react";
import Counter from "../counter/counter";
import { CountersType } from "./countersType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./counters.css";

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
			<div className="shopping_header bg-dark p-2 d-flex justify-content-between align-items-center">
				<FontAwesomeIcon
					icon={faShoppingCart}
					size="lg"
					className="icon-color"
				/>
				Your Cart
				<button onClick={handleReset} className="btn btn-danger btn-sm">
					reset
				</button>
			</div>

			{counters.map((counter) => {
				const { data } = counter;
				return (
					<Counter
						key={data.id}
						data={data}
						onDelete={handleDelete}
						onIterate={iterateCounter}
					></Counter>
				);
			})}
		</>
	);
};

export default Counters;
