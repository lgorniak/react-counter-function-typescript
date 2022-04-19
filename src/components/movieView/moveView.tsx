import React, { useState } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { Movie } from "./movie";

const handleDelete = (
	movies: Movie[],
	movie: Movie,
	handler: React.Dispatch<React.SetStateAction<Movie[]>>
): void => {
	const filteredMovies = movies.filter((m) => m._id !== movie._id);
	handler(filteredMovies);
};

const MovieView = (): JSX.Element => {
	const [movies, setMovies] = useState<Movie[]>(getMovies());

	if (movies.length === 0) return <div>There are no movies</div>;

	return (
		<>
			<div>Showing {movies.length} in the database</div>
			<table className="table">
				<thead>
					<tr className="table-primary">
						<th>Title</th>
						<th>Genre</th>
						<th>Rate</th>
						<th>Stock</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{movies.map((movie) => {
						const { _id, title, genre, dailyRentalRate, numberInStock } = movie;
						return (
							<tr key={_id}>
								<td>{title}</td>
								<td>{genre.name}</td>
								<td>{dailyRentalRate}</td>
								<td>{numberInStock}</td>
								<td>
									<button
										onClick={() => handleDelete(movies, movie, setMovies)}
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
			</table>
		</>
	);
};

export default MovieView;
