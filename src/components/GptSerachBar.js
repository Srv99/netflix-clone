import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import {
  API_OPTIONS,
  SEARCH_MOVIES_API,
  SEARCH_MOVIES_API_SUFFIX,
} from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const fetchMovies = async (movie) => {
    const data = await fetch(
      SEARCH_MOVIES_API + movie + SEARCH_MOVIES_API_SUFFIX,
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
    }

    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(", ");
    const promiseArray = gptMovies.map((movie) => fetchMovies(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className="py-2 col-span-3 px-4 m-4 text-white font-bold rounded-lg bg-red-600"
          onClick={() => handleSearch()}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
