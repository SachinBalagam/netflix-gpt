import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { WEBSITE_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            uid: uid,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between items-center">
      <img src={WEBSITE_LOGO} alt="logo" className="w-44" />
      {user && (
        <button
          className="bg-red-700 text-white rounded cursor-pointer px-3 py-2"
          onClick={handleSignout}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Header;
