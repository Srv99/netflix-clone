import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSerachBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="py-2 col-span-3 px-4 m-4 text-white font-bold rounded-lg bg-red-600">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSerachBar;
