const Profile = ({ user }) => {
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
          <button className="google-sign-in h-14 w-64 bg-gray-700 text-white rounded uppercase hover:bg-rose-500 duration-300">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
