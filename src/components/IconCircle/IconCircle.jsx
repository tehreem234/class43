import AppIcon from '../AppIcon/AppIcon';
import React from 'react';
import { FaDove } from "react-icons/fa";
const IconCircle = () => {
  const ICONS = [
    {
      id: 1,
      name: 'Flexport Studio',
      color: 'bg-orange-500',
      position: '-top-0',
      size: 'sm',
      cn:'relative bottom-7  left-3   text-white '
    },
    {
      id: 2,
      name: 'Leaf',
      color: 'bg-green-400',
      position: 'right-0',
      size: 'sm',
      cn:'relative bottom-7  left-3   text-white '
    },
    {
      id: 3,
      name: 'Target',
      color: 'bg-blue-400',
      position: 'left-0',
      size: 'sm',
      cn:'relative bottom-7  left-3   text-white '
    },
    {
      id: 4,
      name: 'Cloud',
      color: 'bg-indigo-500',
      position: '-bottom-4',
      size: 'sm',
      cn:'relative bottom-7  left-3   text-white '
    },
  
    {
      id:5,
      name: 'center',   
      color: 'bg-blue-500',
      position: 'top-24 left-25',
      size: 'lg',
      cn:'relative bottom-10  left-5   text-white '
      
    }
  ]; 
  const circle = [
    {
      cn: 'w-[40%] h-[40%] rounded-full border-2 border-dashed border-gray-200 absolute'
    },
    {
      cn: 'w-[65%] h-[65%] rounded-full border-2 border-dashed border-gray-200 absolute'
    },
    {
      cn: 'w-[85%] h-[85%] rounded-full border-2 border-dashed border-gray-200 absolute'
    },
    {
      cn: 'w-[100%] h-[100%] rounded-full border-2 border-dashed border-gray-100 absolute'
    },
  ]
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">

      {/* Dotted circle */}
      {circle.map((cir, index) => (
        <div key={index} className={cir.cn} />
      ))}

      {/* Surrounding icons */}
      {ICONS.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${(icon.position)}`}>
          <AppIcon color={icon.color} size={icon.size} />
          <FaDove className={icon.cn} />
        </div>
      ))}
    </div>
  );
};

export default IconCircle;
