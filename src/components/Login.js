import { useRef, useState } from "react";
import { NETFLIX_LOGIN_BACKGROUND } from "../utils/constants";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessageData, setErrorMessageData] = useState(null);

  const emailData = useRef(null);
  const passwordData = useRef(null);
  const nameData = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const message = checkValidateData(
      emailData.current.value,
      passwordData.current.value,
      isSignInForm
    );
    setErrorMessageData(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailData.current.value,
        passwordData.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameData.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessageData(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessageData(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailData.current.value,
        passwordData.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessageData(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_LOGIN_BACKGROUND} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 my-36 mx-auto absolute right-0 left-0 text-white bg-black p-12 bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4 ">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameData}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          ref={emailData}
          type="text"
          placeholder="Email"
          className="p-2 my-2 w-full rounded-md bg-gray-700"
        />

        <input
          ref={passwordData}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-md bg-gray-700"
        />
        {errorMessageData != null && (
          <p className="my-2 text-red-700 py-2 font-bold text-lg ">
            {errorMessageData}
          </p>
        )}
        <button
          className="p-4 my-2 bg-red-700 w-full font-bold rounded-md"
          onClick={() => handleSubmit()}
        >
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
