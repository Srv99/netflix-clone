import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSerachBar from "./GptSerachBar";
import {NETFLIX_LOGIN_BACKGROUND} from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NETFLIX_LOGIN_BACKGROUND} alt="background" />
      </div>
      <GptSerachBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
