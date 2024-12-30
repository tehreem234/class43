import AppIcon from '../AppIcon/AppIcon';
import { ICONS } from '../../constants/icons';
import React from 'react';
import { FaFire } from "react-icons/fa6";
import { FaDove } from "react-icons/fa";

const IconCircle = () => {

  // const getPositionClass = (position) => {
  //   switch (position) {
  //     case 'top': return '-top-4';
  //     case 'right': return 'right-0';
  //     case 'bottom': return 'bottom-0';
  //     case 'left': return 'left-0';
  //     default: return '';
  //   }
  // };

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Center icon */}
      <div className="absolute">
        <AppIcon color="bg-blue-500" size="lg" />
        <FaFire className='relative bottom-10 text-white size-5 left-5'/>
      </div>

      {/* Dotted circle */}
      <div className="w-[40%] h-[40%] rounded-full border-2 border-dashed border-gray-200 absolute" />
      <div className="w-[65%] h-[65%] rounded-full border-2 border-dashed border-gray-200 absolute" />
      <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-gray-200 absolute" />
      <div className="w-[100%] h-[100%] rounded-full border-2 border-dashed border-gray-100 absolute" />

      {/* Surrounding icons */}
      {ICONS.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${getPositionClass(icon.position)}`}
        >
          <AppIcon color={icon.color} size="sm" />
          <FaDove className='relative bottom-7  left-3  text-white'  />
        </div>
      ))}
    </div>
  );
};


export default IconCircle;
