import React from 'react';

const Portfolio = ({ onClose }) => {
  const projects = [
    {
      name: '6-Axis Robotic Arm',
      id: '[>]',
      status: '(In Progress)',
    },
    {
      name: 'FEA Optimized Mini Drone',
      id: '[>]',
      status: '',
    },
    {
      name: 'Axial Flux Actuator',
      id: '[>]',
      status: '', 
    },
    {
      name: 'Humanoid Elbow',
      id: '[>]',
      status: '',
    },
    {
      name: 'Computer Fan',
      id: '[>]',
      status: '',
    },
    {
      name: 'Pancake Printer',
      id: '[>]',
      status: '',
    },
    {
      name: '5-Axis Robotic Arm',
      id: '[>]',
      status: '',
    },
    {
      name: 'Card Shuffling Robot',
      id: '[>]',
      status: '',
    },
  ];

  // --- UPDATED STYLES ---
  // Changed leading-tight to leading-none for maximum tightness
  const headerStyle = "text-[2.5vw] leading-none tracking-tight text-[#111] font-normal font-monument";
  const itemStyle = "text-[2.5vw] leading-none tracking-tight text-[#111] font-normal font-monument";
  const closeStyle = "text-[1.2vw] leading-none tracking-tight text-[#111] font-normal font-monument";

  return (
    <div className="fixed inset-0 z-40 flex font-monument">
      
      {/* BACKDROP */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 w-full h-full cursor-default z-0"
      />

      {/* SPACER */}
      <div className="w-[45vw] pointer-events-none" />

      {/* RIGHT PANEL (PORTFOLIO LIST) */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative z-10 w-[55vw] h-full bg-white border-l border-gray-200 px-6 py-4 flex flex-col animate-in slide-in-from-right duration-300 overflow-y-auto justify-between"
      >
        
        <div>
          {/* HEADER */}
          <div className="mb-6 mt-2">
            <h2 className={headerStyle}>
              03—Portfolio
            </h2>
          </div>

          {/* PORTFOLIO LIST */}
          {/* UPDATED: 
              - Changed mt-[15vh] to mt-[12vh] (moved up)
              - Changed space-y-1 to space-y-0 (removed gaps between items) 
          */}
          <div className="flex flex-col space-y-0 w-full mt-[12vh]">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="relative w-full hover:opacity-60 transition-opacity cursor-pointer"
              >
                {/* Flex container for Name+ID and Status */}
                <div className={`flex justify-between items-baseline whitespace-nowrap ${itemStyle}`}>
                  
                  {/* LEFT: Name + ID */}
                  <div>
                    {project.name} <span className="ml-2">{project.id}</span>
                  </div>

                  {/* RIGHT: Status */}
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
          className={`self-end mb-3 mr-3 hover:opacity-50 transition-opacity ${closeStyle}`}
        >
          (Close)
        </button>

      </div>
    </div>
  );
};

export default Portfolio;