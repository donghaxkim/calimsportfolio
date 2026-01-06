import React from 'react';

const AboutMe = ({ onClose, baseStyle }) => {
  return (
    // 1. WRAPPER: Fixed to cover the whole screen so we can detect clicks anywhere
    <div className="fixed inset-0 z-40 flex justify-end">
      
      {/* 2. BACKDROP: Invisible layer that catches clicks "outside" the panel */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 w-full h-full cursor-default"
      />

      {/* 3. THE PANEL: w-[50%] on the right. 
          We stop propagation here so clicking INSIDE the panel doesn't close it. */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative w-[50%] h-full bg-white border-l border-gray-200 p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300 shadow-xl"
      >
        
        {/* Top Section: Header + Bio Text */}
        <div className="flex justify-between items-start mt-2">
          <h2 className={`${baseStyle}`}>
            01—About me
          </h2>
          
          <div className="w-[45%] text-xs md:text-sm font-helvetica leading-snug text-black text-right md:text-left">
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
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
            <p className="text-[10px] mt-1 font-helvetica text-black">My Inspiration</p>
          </div>

          {/* Image 2 */}
          <div className="w-1/2">
            <img 
              src="https://media.discordapp.net/attachments/1119747231459610724/1119747231459610724/lilb.jpg" 
              alt="My Hero" 
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
            <p className="text-[10px] mt-1 font-helvetica text-black">My Hero</p>
          </div>
        </div>

        {/* Bottom Right: Close Button */}
        <button 
          onClick={onClose}
          className="absolute bottom-3 right-3 text-xs md:text-sm text-black hover:opacity-50 transition-opacity"
        >
          (Close)
        </button>

      </div>
    </div>
  );
};

export default AboutMe;