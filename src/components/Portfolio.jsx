import React, { useState } from 'react';

const Portfolio = ({ onClose }) => {
  // Data extraction from your uploaded image
  const projects = [
    {
      name: '6-Axis Robotic Arm',
      id: '[i]',
      status: '(In Progress)',
    },
    {
      name: 'FEA Optimized Mini Drone',
      id: '[ii]',
      status: '(In Progress)',
    },
    {
      name: 'Axial Flux Actuator',
      id: '[iii]',
      status: '', // No status shown in image
    },
    {
      name: 'Humanoid Elbow',
      id: '[iv]',
      status: '',
    },
    {
      name: 'Computer Fan',
      id: '[v]',
      status: '',
    },
    {
      name: 'Pancake Printer',
      id: '[vi]',
      status: '',
    },
    {
      name: '5-Axis Robotic Arm',
      id: '[vii]',
      status: '',
    },
    {
      name: 'Card Shuffling Robot',
      id: '[viii]',
      status: '',
    },
  ];

  // Shared font styles
  const baseSize = "text-[2.9vw] leading-none tracking-tight text-[#111] font-normal font-monument";
  const contentStyle = "text-[3.25vw] leading-[0.85] tracking-[-0.03em] text-[#111] font-normal font-monument";

  return (
    <div className="fixed inset-0 z-40 flex font-monument">
      
      {/* BACKDROP */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 w-full h-full cursor-default z-0"
      />

      {/* SPACER (Left side empty to show underlying page) */}
      <div className="w-[45vw] pointer-events-none" />

      {/* RIGHT PANEL (PORTFOLIO LIST) */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative z-10 w-[55vw] h-full bg-white border-l border-gray-200 p-4 pt-2 flex flex-col animate-in slide-in-from-right duration-300 overflow-y-auto justify-between"
      >
        
        <div>
          {/* HEADER */}
          <div className="mt-[-0.5vh] mb-6">
            <h2 className={`${baseSize}`}>
              03—Portfolio
            </h2>
          </div>

          {/* PORTFOLIO LIST */}
          <div className="flex flex-col space-y-2 w-full pr-4 mt-[12vh]">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="relative w-full hover:opacity-60 transition-opacity cursor-pointer"
              >
                {/* Flex container for Name+ID and Status */}
                <div className={`flex justify-between items-baseline whitespace-nowrap ${contentStyle}`}>
                  
                  {/* LEFT: Name + ID */}
                  <div>
                    {project.name} <span className="ml-2">{project.id}</span>
                  </div>

                  {/* RIGHT: Status (Only shows if status exists) */}
                  <div className="text-right ml-4">
                    {project.status}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className={`self-end mb-3 mr-3 hover:opacity-50 transition-opacity ${contentStyle}`}
        >
          (Close)
        </button>

      </div>
    </div>
  );
};

export default Portfolio;