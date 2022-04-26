import React from "react";
import { Movie } from "./movie";

interface Props<T> {
	data: T[];
	onDelete: (id: string) => void;
}

const TableBody = <T extends Movie>(props: Props<T>): JSX.Element => {
	return (
		<tbody>
			{props.data.map((movie: T) => {
				const { _id, title, genre, dailyRentalRate, numberInStock } = movie;
				return (
					<tr key={_id}>
						<td>{title}</td>
						<td>{genre.name}</td>
						<td>{dailyRentalRate}</td>
						<td>{numberInStock}</td>
						<td>
							<button
								onClick={() => props.onDelete(_id)}
								type="button"
								className="btn btn-danger btn-sm"
							>
								delete
							</button>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
