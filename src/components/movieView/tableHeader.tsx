import React from "react";

interface Props {}

const TableHeader = (props: Props): JSX.Element => {
	return (
		<thead>
			<tr className="table-primary">
				<th>Title</th>
				<th>Genre</th>
				<th>Rate</th>
				<th>Stock</th>
				<th></th>
			</tr>
		</thead>
	);
};

export default TableHeader;
