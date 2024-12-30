import React from 'react';
import JobCard from '../JobCard/JobCard';

const JobList = () => {
  const jobs = [
    {
      color: 'bg-orange-500',
      cn: 'bg-gray-200 text-gray text-sm  rounded-md',
      title: 'Create Packaging Designs for...',
      company: 'Fireart Studio',
      skills: ['Figma', 'Branding', 'Adobe Photoshop'],
      verified: true,
      rating: '⭐⭐⭐⭐⭐',
      time: '1 Hour Ago'
    },

    {
      color: 'bg-blue-500',
      cn: 'bg-gray-200 text-gray text-sm  rounded-md',
      title: 'Looking for BackEnd  Devolp...',
      company: 'Bluemoon Studio',
      skills: ['Figma', 'Dashboard', 'App'],
      verified: true,
      rating: '⭐⭐⭐⭐⭐',
      time: '1 Hour Ago'
    },
    
  ];
  const hbox=[
    {
      class:"bg-white rounded-xl w-28 h-10 flex items-center  justify-center  hover:bg-black hover:text-white transition-colors",
      title: 'Recent Jobs',
    },
    {
      class:"bg-white rounded-xl w-28 h-10 flex justify-center items-center  hover:bg-black hover:text-white transition-colors",
      title: 'popular Jobs', 
    },
    {
      class:"bg-white rounded-xl w-28 h-10 flex justify-center items-center  hover:bg-black hover:text-white transition-colors",
      title: 'Recent Jobs',
    }, 
  ]
  return (
    <div className="p-[5%] flex flex-wrap overflow-x-hidden bg-gray-100">
      <div className='flex flex-row justify-between  relative top-4 w-full rounded-xl bg-white '>
        {hbox.map((box,index)=>(
          <div key={index} className={box.class} >
            {box.title}
          </div>
        ))}
      </div>
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};
export default JobList;
