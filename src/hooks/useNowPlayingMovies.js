import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    !nowPlayingMovie && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
