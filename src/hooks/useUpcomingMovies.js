import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
