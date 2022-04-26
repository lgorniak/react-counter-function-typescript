import React from "react";


interface Props {
	data: number;
}

const Navbar = (prop: Props): JSX.Element => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<span className="navbar-brand mb-0 h1">Shopping Center</span>
				<span className="badge m-1 ms-0 bg-dark">
					({prop.data}) different Items in Cart
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
