import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  const { title, data } = props;
  return (
    <div className="py-5 px-12">
      <h1 className="text-2xl  py-2">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar pl-0">
        {data?.map((movie) => (
          <MovieCard data={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
