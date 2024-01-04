import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const filteredJson = json.results.filter((each) => each.type === "Trailer");

    const trailer = filteredJson.length ? filteredJson[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
