import { useState } from "react";
import { NETFLIX_LOGIN_BACKGROUND } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_LOGIN_BACKGROUND} alt="background" />
      </div>
      <form className=" w-3/12 my-36 mx-auto absolute right-0 left-0 text-white bg-black p-12 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4 ">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-2 w-full rounded-md bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 my-2 bg-red-700 w-full font-bold rounded-md">
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={() => toggleSignIn()}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
