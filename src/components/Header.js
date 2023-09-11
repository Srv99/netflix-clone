import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showLangChange = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showLangChange && (
            <select
              onChange={(e) => handleLanguageChange(e)}
              className="p-2 m-2 bg-gray-900 text-white"
              name="language"
              id="language"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.language}
                </option>
              ))}
            </select>
          )}
          <button
            className="mx-4 my-2 py-2 px-4 bg-pink-900 text-white rounded-lg font-bold font-mono"
            onClick={() => handleGptSearch()}
          >
            {showLangChange ? "Home Page" : "GPT search"}
          </button>
          <img
            className="h-12 w-12 opacity-80 rounded-full"
            src={user?.photoURL ? user?.photoURL : USER_AVATAR}
            alt="Profile Icon"
          />
          <button
            className="ml-2 font-bold text-red-900"
            onClick={() => handleSignOut()}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
