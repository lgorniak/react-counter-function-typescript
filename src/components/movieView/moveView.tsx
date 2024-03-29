import React, { useState } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { Movie } from "./movie";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const MovieView = (): JSX.Element => {
	const [movies, setMovies] = useState<Movie[]>(getMovies());

	if (movies.length === 0) return <div>There are no movies</div>;

	const handleDelete = (id: string): void => {
		const filteredMovies = movies.filter((m) => m._id !== id);
		setMovies(filteredMovies);
	};

	
	const columns = [
		{ label: "Title", path: "title" },
		{ label: "Genre", path: "genre.name" },
		{ label: "Stock", path: "dailyRentalRate" },
		{ label: "Rate", path: "numberInStock" },
		{ label: "", path: "" },
	];

	return (
		<>
			<div>Showing {movies.length} in the database</div>
			<table className="table">
				<TableHeader columns={columns} />
				<TableBody data={movies} onDelete={handleDelete} />
			</table>
		</>
	);
};

export default MovieView;
