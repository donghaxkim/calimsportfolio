import React from 'react';

const AboutMe = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-40 flex justify-end font-monument">
      
      {/* BACKDROP */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 w-full h-full cursor-default"
      />

      {/* THE PANEL */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative w-[55vw] h-full bg-white border-l border-gray-200 p-6 flex flex-col justify-between"
      >
        
        {/* Top Section: Header + Bio Text */}
        <div className="flex justify-between items-start mt-2">
          {/* Header */}
          <h2 className="text-[2vw] leading-none tracking-tight text-[#111] font-light font-monument">
            01—About me
          </h2>
          
          {/* Bio Text */}
          <div className="w-[45%] text-xs md:text-sm font-monument leading-snug text-black text-right md:text-left">
            <p className="mb-4">
              I'm a mechanical engineering student interested in robotics, consumer electronics and technology.
            </p>
            <p>
              I like to nature, good weather, music and plant cloning.
            </p>
          </div>
        </div>

        {/* Middle Section: Images */}
        <div className="flex gap-4 items-end justify-center h-full pb-20">
          {/* Image 1 */}
          <div className="w-1/2">
            <img 
              src="https://media.discordapp.net/attachments/1119747231459610724/1119747231459610724/duck.jpg" 
              alt="Duck Inspiration" 
              className="w-full aspect-square object-cover"
            />
            {/* Caption */}
            <p className="text-[10px] mt-1 font-monument text-black">My Inspiration</p>
          </div>

          {/* Image 2 */}
          <div className="w-1/2">
            <img 
              src="https://media.discordapp.net/attachments/1119747231459610724/1119747231459610724/lilb.jpg" 
              alt="My Hero" 
              className="w-full aspect-square object-cover"
            />
            {/* Caption */}
            <p className="text-[10px] mt-1 font-monument text-black">My Hero</p>
          </div>
        </div>

        {/* Bottom Right: Close Button */}
        <button 
          onClick={onClose}
          className="absolute bottom-3 right-3 text-xs md:text-sm text-black hover:opacity-50 transition-opacity font-monument"
        >
          (Close)
        </button>

      </div>
    </div>
  );
};

export default AboutMe;
