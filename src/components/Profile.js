import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    signOut(auth)
      .then(() => {
        setUser("");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="profile container mx-auto py-10">
      <h2 className="section-title text-center text-4xl font-medium text-gray-500 mb-10">
        My Profile
      </h2>
      {user.email && (
        <div className="profile-card flex  flex-col gap-3 items-center object-cover">
          <img className="h-28 w-28 rounded-full" src={user.photoURL} alt="" />
          <h3 className="text-5xl">{user.displayName}</h3>
          <p>{user.email}</p>
          <button
            onClick={handleSignIn}
            className="google-sign-in h-14 w-64 bg-gray-700 text-white rounded uppercase hover:bg-rose-500 duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
