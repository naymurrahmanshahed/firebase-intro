import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="flex justify-between container mx-auto items-center py-5 border-b">
      <Link to="/" className="font-medium text-rose-600">
        FireBase Killer
      </Link>
      <ul className="links flex gap-10 font-normal ">
        <li>
          <Link to="/home" className="hover:text-rose-400 duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-rose-400 duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-rose-400 duration-300">
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={`/${user.email ? "profile" : "login"}`}
            className="hover:text-rose-400 duration-300"
          >
            {user.email ? `Wellcome, ${user.displayName}` : "Login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
