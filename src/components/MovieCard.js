import { POSTER_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { data } = props;
  const { poster_path, original_title } = data;

  return (
    <div className="w-40 mr-5 shrink-0 ">
      <img
        className="rounded"
        src={POSTER_URL + poster_path}
        alt={original_title}
      />
    </div>
  );
};

export default MovieCard;
