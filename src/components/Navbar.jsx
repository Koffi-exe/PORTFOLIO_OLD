import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-6 mb-12 flex justify-between items-center">
      <div className="logo text-slate-500 text-2xl font-black">As</div>
      <div className="links text-slate-500 flex gap-5 text-2xl">
        <a href="https://www.linkedin.com/in/adithya-sasi-5ba33b1aa/" target="_blank" >{<FaLinkedin />}</a>
        <a href="https://github.com/Koffi-exe/">{<FaGithub />}</a>
        <a href="mailto:adithyaaa@outlook.com">{<IoIosMailUnread />}</a>
        {/* <a href="#">{<FaSquareXTwitter />}</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
