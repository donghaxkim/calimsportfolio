import React, { useState } from 'react';
import AboutMe from './components/aboutme';
import Experience from './components/experience'; // IMPORT NEW COMPONENT

const App = () => {
  // Active Section can be 'contact', 'about', 'experience', or null
  const [activeSection, setActiveSection] = useState(null);
  const closeAll = () => setActiveSection(null);

  const menuItems = [
    { id: '01', label: 'About Me', action: () => setActiveSection('about') },
    { id: '02', label: 'Experience', action: () => setActiveSection('experience') }, // UPDATED ACTION
    { id: '03', label: 'Portfolio', action: () => {} },
    { id: '04', label: 'Surface Modeling', action: () => {} },
    { id: '05', label: 'For Fun', action: () => {} },
  ];

  const baseStyle = "text-[3.25vw] leading-[0.85] tracking-[-0.03em] text-[#111] font-light font-monument";
  const sectionGap = "mb-[7vh]"; 

  return (
    <main className="relative w-screen h-screen bg-white overflow-hidden select-none cursor-default font-monument">
      
      {/* BLUR WRAPPER - Active for 'contact' only */}
      <div className={`w-full h-full transition-all duration-500 ease-in-out ${activeSection === 'contact' ? 'blur-sm opacity-50 scale-[0.99]' : ''}`}>
        
        {/* NAV */}
        <div className="absolute top-2 left-2 flex flex-col items-start z-10">
          <h1 className={`${baseStyle} ${sectionGap}`}>
            Kim-Wansbrough, Calim
          </h1>
          
          <div 
            onClick={() => setActiveSection('contact')}
            className={`flex items-baseline ${sectionGap} group cursor-pointer`}
          >
            <span className={`${baseStyle} group-hover:opacity-60 transition-opacity`}>Contact</span>
            <span className={`${baseStyle} ml-3 group-hover:opacity-60 transition-opacity`}>[i]</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                onClick={item.action}
                className={`${baseStyle} hover:opacity-50 transition-opacity block cursor-pointer`}
              >
                {item.id}–{item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* QUOTE - Hidden if ANY side panel is open ('about' OR 'experience') */}
        {activeSection !== 'about' && activeSection !== 'experience' && (
          <div className="absolute bottom-16 right-16 text-right flex flex-col items-end whitespace-nowrap transition-opacity duration-300">
            <p className={`${baseStyle}`}>“Less opinion, more perspective”</p>
            <p className={`${baseStyle} mt-0`}>Brandon McCartney</p>
          </div>
        )}

        {/* TIMESTAMP */}
        <div className="absolute bottom-3 left-3 z-0">
          <p className="text-sm font-medium text-gray-400 tracking-wide font-monument translate-y-2">
            Last Updated: 1.05.26
          </p>
        </div>

      </div>

      {/* OVERLAY: CONTACT */}
      {activeSection === 'contact' && (
        <div 
          onClick={closeAll}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
        >
          <div className="flex flex-col items-center text-center font-monument text-[#1c1c1c] text-base md:text-lg leading-none font-normal tracking-tight">
            <a href="https://linkedin.com/in/ckimwans" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity block">
              linkedin.com/in/ckimwans
            </a>
            <a href="mailto:ckimwans@uwaterloo.ca" className="hover:opacity-50 transition-opacity block">
              ckimwans@uwaterloo.ca
            </a>
            <p className="cursor-text block">
              +1 (647)–297–9687
            </p>
          </div>
        </div>
      )}

      {/* SLIDE-IN: ABOUT ME */}
      {activeSection === 'about' && (
        <AboutMe onClose={closeAll} />
      )}

      {/* SLIDE-IN: EXPERIENCE (NEW) */}
      {activeSection === 'experience' && (
        <Experience onClose={closeAll} />
      )}
      
    </main>
  );
};

export default App;