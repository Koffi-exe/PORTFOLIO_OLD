import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-6 mb-12 flex justify-between items-center">
      <div className="logo text-slate-500 text-2xl font-black">LOGO</div>
      <div className="links text-slate-500 flex gap-5 text-2xl">
        <a href="#">{<FaLinkedin />}</a>
        <a href="#">{<FaGithub />}</a>
        <a href="#">{<IoIosMailUnread />}</a>
        <a href="#">{<FaSquareXTwitter />}</a>
      </div>
    </nav>
  );
};

export default Navbar;
