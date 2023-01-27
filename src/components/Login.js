import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const auth = getAuth(app);
const Login = () => {
  const navigate = useNavigate();
  //google login system
  const googleSignHandler = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //github login system
  const githubSignHandler = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //facebook login system
  const facebookSignHandler = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-4xl font-medium text-gray-500 mb-10">
        Sign In
      </h2>
      <div className="login-platforms flex flex-col gap-5 items-center">
        <button
          onClick={googleSignHandler}
          className="google-sign-in h-14 w-96 bg-gray-700 text-white rounded uppercase hover:bg-rose-500 duration-300"
        >
          Sign with Google
        </button>
        <button
          onClick={githubSignHandler}
          className="google-sign-in h-14 w-96 bg-gray-700 text-white rounded uppercase hover:bg-rose-500 duration-300"
        >
          Sign with GitHub
        </button>
        <button
          onClick={facebookSignHandler}
          className="google-sign-in h-14 w-96 bg-gray-700 text-white rounded uppercase hover:bg-rose-500 duration-300"
        >
          Sign with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
