import React, { useEffect, useRef } from 'react';

const Carousel = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setActiveSection = (index) => {
    // Handle setting active class on the navigation or other effects
    console.log('Active section:', index);
  };

  return (
    <div ref={appRef} className="app">
      <div className="section section1">Section 1</div>
      <div className="section section2">Section 2</div>
      <div className="section section3">Section 3</div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Carousel;
