import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  MOVIE_VIDEO_DATA_PREFIX,
  MOVIE_VIDEO_DATA_SUFFIX,
} from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerVideoData = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideo = async () => {
    const data = await fetch(
      MOVIE_VIDEO_DATA_PREFIX + movieID + MOVIE_VIDEO_DATA_SUFFIX,
      API_OPTIONS
    );
    const json = await data.json();
    const filterTrailerData = json?.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailerVideoData = filterTrailerData.length
      ? filterTrailerData[0]
      : json?.results[0];
    dispatch(addTrailerVideo(trailerVideoData));
  };

  useEffect(() => {
    !trailerVideoData && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
