/* eslint-disable no-unused-vars */

import { NavLink } from "react-router-dom";
import "./navbar.css";
import logoImg from "../../assets/logo.png";

/* eslint-disable react/no-unknown-property */
const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/donation">Donation</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar 0">
        <div className="navbar-start">
          <NavLink to="/" className="flex items-center ">
            <img src={logoImg} className="w-4/5" alt="" />
          </NavLink>
        </div>
        <div className="navbar-end ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu right-0 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-10 text-lg font-normal">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
