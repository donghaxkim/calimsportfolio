import React from 'react';

const App = () => {
  const menuItems = [
    { id: '01', label: 'About Me' },
    { id: '02', label: 'Experience' },
    { id: '03', label: 'Portfolio' },
    { id: '04', label: 'Surface Modeling' },
    { id: '05', label: 'For Fun' },
  ];

  // STYLE VARIABLES
  // text-[3.1vw]: Small, elegant size.
  // font-light: Thinner weight (300).
  const baseStyle = "text-[3.1vw] leading-[0.85] tracking-[-0.03em] text-[#111] font-light";

  // SPACING VARIABLE
  const sectionGap = "mb-[6vh]"; 

  return (
    <main className="relative w-screen h-screen bg-white overflow-hidden select-none cursor-default font-helvetica">
      
      {/* TOP LEFT CONTENT */}
      <div className="absolute top-2 left-2 flex flex-col items-start">
        
        {/* Name */}
        <h1 className={`${baseStyle} ${sectionGap}`}>
          Kim-Wansbrough, Calim
        </h1>
        
        {/* Contact Line */}
        <div className={`flex items-baseline ${sectionGap} group cursor-pointer`}>
          <span className={`${baseStyle} group-hover:opacity-60 transition-opacity`}>
            Contact
          </span>
          {/* [i] */}
          <span className={`${baseStyle} ml-3 group-hover:opacity-60 transition-opacity`}>
            [i]
          </span>
        </div>

        {/* Navigation List */}
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href="#"
              className={`${baseStyle} hover:opacity-50 transition-opacity block`}
            >
              {item.id}—{item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* BOTTOM RIGHT CONTENT - MOVED UP AND LEFT */}
      {/* Increased spacing significantly to bottom-32 right-32 */}
      <div className="absolute bottom-32 right-32 text-right flex flex-col items-end whitespace-nowrap">
        <p className={`${baseStyle}`}>
          “Less opinion, more perspective”
        </p>
        <p className={`${baseStyle} mt-0`}>
          Brandon McCartney
        </p>
      </div>

      {/* BOTTOM LEFT TIMESTAMP */}
      <div className="absolute bottom-3 left-3">
        <p className="text-xs font-medium text-gray-600 tracking-wide font-sans">
          Last Updated: 1.05.26
        </p>
      </div>
      
    </main>
  );
};

export default App;