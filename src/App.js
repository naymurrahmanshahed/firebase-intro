import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebase.init";

import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data);
      } else {
        console.log("no user found");
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route path="/requireauth" element={<RequireAuth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
