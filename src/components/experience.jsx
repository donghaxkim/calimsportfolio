import React from 'react';

const Experience = ({ onClose }) => {
  const jobs = [
    {
      company: 'Tesla',
      id: '[i]',
      role: '(Equipment Design)',
      date: '9 / 25 - 12 / 25',
    },
    {
      company: 'Magna',
      id: '[ii]',
      role: '(Manufacturing)',
      date: '5 / 25 - 9 / 25',
    },
    {
      company: 'WATonomous',
      id: '[iii]',
      role: '(Mechanical Design)',
      date: '9 / 24 - Present',
    },
    {
      company: 'Richmond Hill High School',
      id: '', 
      role: '(Physics & Calculus Tutor)',
      date: '9 / 22 - 6 / 24',
    },
  ];

  const baseSize = "text-[2.25vw] leading-none tracking-tight text-[#111] font-light font-monument";

  return (
    <div className="fixed inset-0 z-40 flex justify-end font-monument">
      
      {/* BACKDROP */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 w-full h-full cursor-default"
      />

      {/* PANEL */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative w-[55vw] h-full bg-white border-l border-gray-200 p-4 flex flex-col animate-in slide-in-from-right duration-300 shadow-xl overflow-y-auto justify-between"
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
              // MAIN CONTAINER
              <div key={index} className={`relative w-full ${baseSize}`}>
                
                {/* ROW 1: Company + ID + Date */}
                <div className="flex justify-between items-baseline whitespace-nowrap">
                  <div>
                    {/* Changed ml-1 to ml-2 for a bit more space before the [i] */}
                    {job.company} <span className="ml-2">{job.id}</span>
                  </div>
                  <div className="text-right ml-4">
                    {job.date}
                  </div>
                </div>

                {/* ROW 2: Role */}
                {/* UPDATED: Changed ml-[4.1vw] to ml-[5.5vw] to shift brackets right */}
                <div className="mt-0 whitespace-nowrap ml-[5.5vw]">
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