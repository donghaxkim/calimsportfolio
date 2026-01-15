import React, { useState } from 'react';

const Experience = ({ onClose }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      company: 'Tesla',
      id: '[i]',
      role: '(Equipment Design)',
      date: '9 / 25 - 12 / 25',
      hasDetails: true,
      details: {
        title: 'Equipment Design Engineer',
        responsibilities: [
          'Design and fabricate equipment for the Tesla Semi release candidate one & two launches',
          'Develop control logic to automate processes on the Semi drive axle production line'
        ],
        impact: [
          'Designed equipment for manufacturing processes. Designs were optimized for lifespan, ergonomics and ease of use',
          'Designed a gauging system to catch issues early in production preventing over $150,000 in rework losses',
          'Developed PLC logic for 9 assembly stations utilizing different sensors and tools'
        ],
        skills: 'PLCs, Mechanical Design, User Centric Design, GD&T, DFM, DFA',
        image: '/Black Stone.png', 
        caption: 'Milky Way from Black Rock Desert'
      }
    },
    {
      company: 'Magna',
      id: '[ii]',
      role: '(Manufacturing)',
      date: '5 / 25 - 9 / 25',
      hasDetails: true,
      details: {
        title: 'Manufacturing Engineer',
        responsibilities: [
          'Assist in the development of processes to improve yield, savings, and cycle time',
          'Improve injection molding process to minimize defects and increase cycle time.'
        ],
        impact: [
          'Led root cause analysis of part design to resolve quality issues caused by the laser welding process leading to an average improvement of 1.2 in the cpk values',
          'Optimized injection molding process through tooling improvements and changes to parameters, eliminated defects like weld lines, flow lines, and sink marks; increased yield by over 40%',
          'Designed and fabricated modular fixtures to improve ergonomics and effeciency for factory workers'
        ],
        skills: 'Injection Molding Principles, GD&T, Excel, Statistical Analysis, Process Capability',
        image: '/Dmt Field.png',
        caption: 'Field Next to Office'
      }
    },
    {
      company: 'WATonomous',
      id: '[iii]',
      role: '(Mechanical Design)',
      date: '9 / 24 - Present',
      hasDetails: true, 
      details: {
        title: 'Mechanical Design Engineer',
        responsibilities: [
          'Design and fabricate actuators, joints and parts for a humanoid robot',
          'Design sensor mounts for LiDAR based self driving car'
        ],
        impact: [
          'Designed and fabricated radial flux actuators for the elbow, shoulder and forearm joints with a torque to weight ratio of 35Nm/kg. Manufacturing costs were also 20% cheaper than commercial alternatives',
          'Calculate required torque for different joints and design and test different reduction methods for backlash, accuracy, and manufacturability',
          'Develop mounting equipment to hold LiDAR sensors, cameras and other equipment to the car'
        ],
        skills: 'Mechanical Design, Actuator Design, FEA, Thermal Management',
        image: '/WATO-banner.png',
        caption: 'WATO'
      }
    },
    {
      company: 'Richmond Hill High School',
      id: '', 
      role: '(Physics & Calculus Tutor)',
      date: '9 / 22 - 6 / 24',
      hasDetails: false,
    },
  ];

  const baseSize = "text-[2.25vw] leading-none tracking-tight text-[#111] font-normal font-monument";
  const labelSize = "text-[1.5vw] leading-none tracking-tight text-[#111] font-medium font-monument";
  const bodySize = "text-[0.75vw] leading-tight tracking-normal text-[#111] font-normal font-monument";

  return (
    <div className="fixed inset-0 z-40 flex font-monument">
      
      {/* BACKDROP */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 w-full h-full cursor-default z-0"
      />

      {/* LEFT PANEL (DETAILS) */}
      {selectedJob && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-[45vw] h-full bg-white p-4 flex flex-col animate-in slide-in-from-left duration-300"
        >
          {/* Header */}
          <div className="mt-2 mb-8 min-h-[4vw] flex items-end justify-center">
            <h2 className="text-[2vw] leading-none text-center font-medium">
              {selectedJob.details?.title}
            </h2>
          </div>

          {/* Content Container */}
          <div className="flex-grow flex flex-col gap-5 px-4">
            
            {/* Responsibilities */}
            <div className="flex w-full">
              <div className={`w-[35%] ${labelSize}`}>
                Responsibilities:
              </div>
              <div className={`w-[65%] flex flex-col gap-2 ${bodySize}`}>
                {selectedJob.details?.responsibilities.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="flex w-full">
              <div className={`w-[35%] ${labelSize}`}>
                Impact:
              </div>
              <div className={`w-[65%] flex flex-col gap-2 ${bodySize}`}>
                {selectedJob.details?.impact.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="flex w-full">
              <div className={`w-[35%] ${labelSize}`}>
                Skills:
              </div>
              <div className={`w-[65%] ${bodySize}`}>
                <p>{selectedJob.details?.skills}</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-auto mb-4 px-4 pt-4">
            <div className="w-[90%] mx-auto aspect-[16/9] bg-gray-100 overflow-hidden relative">
              <img 
                src={selectedJob.details?.image} 
                alt="Experience Detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[0.6vw] text-center mt-2 uppercase tracking-widest text-gray-500">
              {selectedJob.details?.caption}
            </p>
          </div>
        </div>
      )}

      {/* SPACER */}
      {!selectedJob && <div className="w-[45vw] pointer-events-none" />}

      {/* RIGHT PANEL (LIST) */}
      <div 
        onClick={(e) => {
          // 1. UPDATED: Stop click from reaching the backdrop (which closes the whole modal)
          e.stopPropagation(); 
          // 2. UPDATED: If details are open, clicking this panel (whitespace) closes them
          if (selectedJob) {
            setSelectedJob(null);
          }
        }} 
        className="relative z-10 w-[55vw] h-full bg-white border-l border-gray-200 p-4 flex flex-col animate-in slide-in-from-right duration-300 overflow-y-auto justify-between"
      >
        
        <div>
          {/* HEADER */}
          <div className="mt-2 mb-9">
            <h2 className={`${baseSize}`}>
              02—Experience
            </h2>
          </div>

          {/* EXPERIENCE LIST */}
          <div className="flex flex-col space-y-7 w-full pr-4">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                onClick={(e) => {
                  if (job.hasDetails) {
                    // 3. UPDATED: Stop propagation so the click doesn't bubble to the panel 
                    // and immediately close the details we just opened.
                    e.stopPropagation(); 
                    setSelectedJob(job);
                  }
                  // If it doesn't have details, we let it bubble, which triggers the panel click
                  // and effectively deselects any currently selected job (Standard behavior).
                }}
                className={`relative w-full ${baseSize} ${job.hasDetails ? 'cursor-pointer hover:opacity-60 transition-opacity' : ''}`}
              >
                
                {/* ROW 1: Company + ID + Date */}
                <div className="flex justify-between items-baseline whitespace-nowrap">
                  <div>
                    {job.company} <span className="ml-2">{job.id}</span>
                  </div>
                  <div className="text-right ml-4">
                    {job.date}
                  </div>
                </div>

                {/* ROW 2: Role */}
                <div className="mt-1 whitespace-nowrap ml-[5.5vw]">
                  {job.role}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="self-end mb-3 mr-3 text-xs md:text-sm text-black hover:opacity-50 transition-opacity font-monument"
        >
          (Close)
        </button>

      </div>
    </div>
  );
};

export default Experience;