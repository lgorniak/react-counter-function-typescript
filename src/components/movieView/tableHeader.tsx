import React from "react";
import { Column } from "./column";

import { v4 as uuidv4 } from "uuid";

interface Props<T> {
	columns: T[];
}

const TableHeader = <T extends Column>(props: Props<T>): JSX.Element => {
	return (
		<thead>
			<tr className="table-primary">
				{props.columns.map((column: T) => (
					<th key={uuidv4()}>{column.label}</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
