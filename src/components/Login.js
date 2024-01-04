import { useState, useRef } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { WEBSITE_BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (isSignInForm) {
      const message = ValidateForm(email.current.value, password.current.value);
      setErrorMessage(message);
      if (message) return;
      // Sign in Login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode.slice(5));
        });
    } else {
      const message = ValidateForm(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setErrorMessage(message);
      if (message) return;
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, displayName, email } = user;

              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  uid: uid,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode.slice(5));
        });
    }
  };

  const handleForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={WEBSITE_BACKGROUND} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 mx-auto my-36 right-0 left-0 p-12 text-white rounded-xl bg-opacity-80"
      >
        <h1 className="text-2xl mb-3 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 w-full my-3 bg-gray-700 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 w-full my-3 bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 w-full my-3 bg-gray-700 rounded"
        />
        <p className="text-red-600 ">{errorMessage}</p>
        <button
          type="submit"
          className="bg-red-700 w-full p-3 my-5 rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-3 text-gray-400">
          {isSignInForm ? "New to Netflix ? " : "Already Registered ? "}

          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={handleForm}
          >
            {isSignInForm ? "Sign Up" : "LogIn"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
