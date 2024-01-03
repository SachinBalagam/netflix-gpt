import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const handleForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute bg-black w-3/12 mx-auto my-36 right-0 left-0 p-12 text-white rounded-xl bg-opacity-80">
        <h1 className="text-2xl mb-3 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 w-full my-3 bg-gray-700 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 w-full my-3 bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 w-full my-3 bg-gray-700 rounded"
        />
        <button type="submit" className="bg-red-700 w-full p-3 my-5 rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-3 text-gray-400">
          {isSignInForm ? "New to Netflix ? " : "Already Registered ? "}

          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={handleForm}
          >
            {isSignInForm ? "Sign Up" : "Login In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
