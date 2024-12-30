import React from 'react';
import p1 from '../images/p1.webp'
import { FaFire } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex  justify-between flex-wrap relative top-3 bg-white-500 p-5 rounded-md shadow-lg mb-4">
      <div className="logo flex  justify-center gap-4">
     

          <FaFire className='relative top-0 text-blue-500 size-7'/>
          <h1 className='text-lg'>Lowcer</h1>
      </div>
      <div className="profile flex gap-[2%]">
        <FaRegBell className='size-6 relative right-2 top-1'/>
        <img src={p1} alt="Profile" className="rounded-full  w-10 h-10 relative bottom-1"/>
      </div>
    </header>
  );
};
export default Header;
