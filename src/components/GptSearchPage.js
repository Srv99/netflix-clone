import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSerachBar";
import { NETFLIX_LOGIN_BACKGROUND } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={NETFLIX_LOGIN_BACKGROUND} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
