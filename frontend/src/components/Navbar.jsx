import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between font-medium py-5">
      <Link to="/">
        <img className="w-25 border-none" src={assets.logo} alt="" />
      </Link>

      <nav className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex items-center flex-col gap-1">
          <p>Home</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/menu" className="flex items-center flex-col gap-1">
          <p>Menu</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex items-center flex-col gap-1">
          <p>About</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex items-center flex-col gap-1">
          <p>Contact</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
      </nav>

      <div className="flex items-center gap-6">
        <IoIosSearch className="text-2xl cursor-pointer" />
        <div className="group relative">
          <IoPersonOutline className="text-2xl cursor-pointer" />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col bg-slate-100 text-gray-500 rounded gap-2 w-36 py-5 px-3">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p
                onClick={() => navigate("/order")}
                className="cursor-pointer hover:text-black"
              >
                Orders
              </p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <IoCartOutline className="text-2xl cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] bg-black text-white leading-4 w-4 aspect-square rounded-full text-[8px] text-center">
            10
          </p>
        </Link>

        <IoMenuOutline
          onClick={() => setVisible(true)}
          className="text-2xl block sm:hidden cursor-pointer "
        />
      </div>

      <div
        className={`absolute top-0 bottom-0 right-0 bg-white overflow-hidden transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <IoChevronForwardOutline className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="pl-6 py-2 border-t border-gray-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            onClick={() => setVisible(false)}
            className="pl-6 py-2 border-t border-gray-200"
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="pl-6 py-2 border-t border-gray-200"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="pl-6 py-2 border-t border-b border-gray-200"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
