import React from "react";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="flex flex-row gap-5 text-sky-500 justify-end p-5 mb-20 pr-16">
      <div className="w-20 h-10 text-center leading-10 hover:border-2 border-sky-500 rounded-xl transition-all duration-500">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="w-20 h-10 text-center leading-10 hover:border-2 border-sky-500 rounded-xl transition-all duration-500">
        <NavLink to="/pastes">Pastes</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
