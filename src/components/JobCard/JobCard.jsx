import React from 'react';
import AppIcon from '../AppIcon/AppIcon';
import { FaFireAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";

const JobCard = (props) => {
  return (
    <div className="w-full relative bg-white rounded-md mt-10 shadow-lg mb-[4%]">
      <div className="flex w-full flex-col gap-5 mb-[4%] ">

        <div className='flex mt-5 ml-3'>
        <AppIcon color={props.color}/>
        <FaFireAlt className='relative top-[26%] size-5 text-white right-8' />
        <h3 className="text-[15px] font-semibold">{props.title}</h3>
       </div>
      
        <p className="text-gray-500 relative left-[7%] bottom-6">{props.company}</p>
        
        <div className="flex gap-[2%] mt-[2%] ml-[4%]">
          {props.skills.map((skill, index) => (
            <span key={index} className={props.cn}>{skill}</span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
          {props.verified && '☑️'}
          <p className="text-gray-500 text-[12px]">
            {props.verified}Payment verified
          </p>
          <div className="flex items-center">
            <span className="text-yellow-500">{props.rating}</span>
          </div>
        </div>
      </div>
      <div className="flex  items-center">
        <CiHeart />
        <CiSaveDown2 />
        <p className="text-sm text-gray-500 relative left-32">{props.time}</p>
        <button className="text-blue-500 text-sm relative left-32">View Details</button>
      </div>
    </div>
  );
};

export default JobCard;
