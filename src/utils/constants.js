const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const NETFLIX_LOGIN_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const USER_AVATAR =
  "https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

const MOVIE_VIDEO_DATA_PREFIX = "https://api.themoviedb.org/3/movie/";
const MOVIE_VIDEO_DATA_SUFFIX = "/videos";

const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing";

const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular";

const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated";

const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming";

const CARD_CDN = "https://image.tmdb.org/t/p/w500";

const SUPPORTED_LANGUAGES = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "spanish", language: "Spanish" },
];

const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;

const SEARCH_MOVIES_API = "https://api.themoviedb.org/3/search/movie?query=";
const SEARCH_MOVIES_API_SUFFIX = "&include_adult=false&language=en-US&page=1";

export {
  NETFLIX_LOGO,
  NETFLIX_LOGIN_BACKGROUND,
  USER_AVATAR,
  API_OPTIONS,
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
  MOVIE_VIDEO_DATA_PREFIX,
  MOVIE_VIDEO_DATA_SUFFIX,
  CARD_CDN,
  SUPPORTED_LANGUAGES,
  OPEN_AI_KEY,
  SEARCH_MOVIES_API,
  SEARCH_MOVIES_API_SUFFIX,
};
