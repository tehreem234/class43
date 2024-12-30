import React from 'react';
import { FaAngleLeft } from "react-icons/fa";
const Header1 = () => {
    return (

        <header1 className="flex justify-between item-center p-4 bg-white shadow-md">
            <div className='logo flex  gap-4'>
                <FaAngleLeft className='relative top-0 text-black size-6'/>
                <h1 className='text-lg'> Bluemoon Studio</h1>
            </div>

            <div className='profile flex gap-2'>
            <div className='relative top-0  text-black size-6'>3dots</div>

            </div>

        </header1>

    );
};

export default Header1;