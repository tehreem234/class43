import React from 'react';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Footer = () => {
  return (
    <footer className=" fixed bottom-0  w-[95%] bg-white  shadow-md">
      <div className="flex justify-between  items-center  ">
        <CiHome className="size-6"/>
        <CiSearch className="size-6 "/>
        <IoMdTime className="size-6 "/>
        <CgProfile className="size-6 "/>
      </div>
    </footer>
  );
};
export default Footer;
