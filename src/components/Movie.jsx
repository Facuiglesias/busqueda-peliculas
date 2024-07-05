function Movie({ movie }) {
  return (
    <div key={movie.imdbID} className="text-center flex flex-col gap-2">
      <div>
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold">
          {movie.Title}
        </h3>
        <p className="text-sm">{movie.Year}</p>
      </div>
      <img
        className="h-full hover:scale-105"
        src={movie.Poster}
        alt={`Poster de la pelicula ${movie.Title}`}
      />
    </div>
  );
}

export default Movie;
