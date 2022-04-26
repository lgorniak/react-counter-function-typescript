import React from "react";
import Counter from "../counter/counter";
import { CountersType } from "./countersType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./counters.css";

interface Props {
	data: CountersType[];
	onDelete: (_id: number) => void;
	onIterate: (_id: number) => void;
	onReset: () => void;
}

const Counters = (props: Props): JSX.Element => {
	return (
		<>
			<div className="shopping_header bg-dark p-2 d-flex justify-content-between align-items-center">
				<FontAwesomeIcon
					icon={faShoppingCart}
					size="lg"
					className="icon-color"
				/>
				Your Cart
				<button onClick={props.onReset} className="btn btn-danger btn-sm">
					reset
				</button>
			</div>
			{console.log(props.data)}
			{props.data.map((counter: CountersType) => {
				const { data } = counter;
				return (
					<Counter
						key={data.id}
						data={data}
						onDelete={props.onDelete}
						onIterate={props.onIterate}
					></Counter>
				);
			})}
		</>
	);
};

export default Counters;
