import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-56 p-12 relative z-20">
        <div>
          {movies?.nowPlayingMovies && (
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
          )}
        </div>
        <div>
          {movies?.upcomingMovies && (
            <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
          )}
        </div>
        <div>
          {movies?.popularMovies && (
            <MovieList title="Popular" movies={movies?.popularMovies} />
          )}
        </div>
        <div>
          {movies?.topRatedMovies && (
            <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
