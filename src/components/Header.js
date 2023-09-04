import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, NETFLIX_PROFILE_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="h-12 w-12 opacity-80"
            src={user?.photoURL ? user?.photoURL : NETFLIX_PROFILE_ICON}
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
