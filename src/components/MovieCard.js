import { CARD_CDN } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        className="p-2 cursor-pointer transition duration-300 ease-in-out hover:scale-105"
        src={CARD_CDN + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
