import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black text-white">
        <div className="-mt-60 relative z-20">
          <MoviesList title={"Now Playing"} data={movies.nowPlayingMovies} />
          <MoviesList title={"Popular"} data={movies.popular} />
          <MoviesList title={"Top Rated"} data={movies.topRated} />
          <MoviesList title={"Upcoming"} data={movies.upcoming} />
          <MoviesList title={"Award Winning"} data={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
