import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function PartnerSlider2() {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const partners = [
    {
      name: "City of Charlotte",
      logo: "https://static.wixstatic.com/media/c73eb8_700baefe23de4530a9b76d2192a92104~mv2.png",
    },
    {
      name: "Seven Roots",
      logo: "https://static.wixstatic.com/media/c73eb8_e8318769dbb945ca9f7f22c79371ff3f~mv2.png",
    },
    {
      name: "Neighboring Concepts",
      logo: "https://static.wixstatic.com/media/c73eb8_3897d4f8aab94cb08e8b954d47e425e5~mv2.png",
    },
    {
      name: "Mecklenburg County",
      logo: "https://static.wixstatic.com/media/c73eb8_cac84fa263b14db58031da92c9a64b28~mv2.png",
    },
    {
      name: "Land Design",
      logo: "https://static.wixstatic.com/media/c73eb8_07ffee8ab0804d65b582067f017918a7~mv2.png",
    },
    {
      name: "America's Healthy Food Financing Initiative",
      logo: "https://static.wixstatic.com/media/c73eb8_410533cb467b4a91adf7fed3864595b2~mv2.png",
    },
    {
      name: "Choate Construction",
      logo: "https://static.wixstatic.com/media/c73eb8_b5210f95a32e4fb887560b935e8c7189~mv2.png",
    },
    {
      name: "BlueCross BlueShield of North Carolina",
      logo: "https://static.wixstatic.com/media/c73eb8_8da8bf6260f94d69b901fdba74c2f8c4~mv2.png",
    },
    {
      name: "Charlotte Food Policy Council",
      logo: "https://static.wixstatic.com/media/c73eb8_3c221d273c0b44d9a8f8e654df635716~mv2.png",
    },
    {
      name: "West Blvd Neighborhood Coalition",
      logo: "https://static.wixstatic.com/media/c73eb8_c599eb402b40443498a09aabc61d4380~mv2.png",
    },
    {
      name: "UNC Charlotte",
      logo: "https://static.wixstatic.com/media/c73eb8_70101ae4aed34d2dbc2057546b9eae8f~mv2.png",
    },
    {
      name: "BrandUScript",
      logo: "https://static.wixstatic.com/media/c73eb8_86de8681d5a74093b590d6a3649b77ed~mv2.jpg",
    },
    {
      name: "Johnson C. Smith University",
      logo: "https://static.wixstatic.com/media/c73eb8_c291f99b887545a4a1f0bdd9a58241cf~mv2.jpg",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        // Recalculate any necessary dimensions
        const width = sliderRef.current.offsetWidth;
        sliderRef.current.style.setProperty('--slider-width', `${width}px`);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="px-[5%] py-[10%] md:py-[4%] bg-white relative overflow-hidden">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent h-full z-10"></div>
      <div className="absolute right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent h-full z-10"></div>
      
      <div className="container mb-4 md:mb-0">
        <p className="text-center text-lg font-medium text-neutral-black/60">
          Our Partners & Affiliates
        </p>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden mt-12">
        <div 
          className="flex gap-6 overflow-x-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={sliderRef}
        >
          <div className={`flex gap-6 animate-scroll-mobile ${isHovered ? 'animation-play-state: paused' : ''}`}>
            {/* First set */}
            {partners.map((partner, index) => (
              <div 
                key={`partner-mobile-1-${index}`}
                className="flex-none w-[200px] h-[100px] flex items-center justify-center snap-center bg-white/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[80px] w-auto object-contain transition-all duration-300 grayscale hover:grayscale-0 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div 
                key={`partner-mobile-2-${index}`}
                className="flex-none w-[200px] h-[100px] flex items-center justify-center snap-center bg-white/50 backdrop-blur-sm rounded-lg p-4 transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[80px] w-auto object-contain transition-all duration-300 grayscale hover:grayscale-0 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Infinite Scroll */}
      <div 
        className="hidden md:block overflow-hidden mt-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex gap-16 animate-scroll ${isHovered ? 'animation-play-state: paused' : ''}`}>
          <div className="flex gap-16 min-w-[80%] justify-center">
            {partners.slice(0, 7).map((partner, index) => ( // Show only 6 logos
        <div 
          key={`partner-1-${index}`}
          className="flex items-center justify-center w-[250px] h-[150px] transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-[140px] w-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-16 min-w-[80%] justify-center">
            {partners.slice(8, 13).map((partner, index) => ( // Show only 6 logos
        <div 
          key={`partner-1-${index}`}
          className="flex items-center justify-center w-[250px] h-[150px] transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-[140px] w-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
            
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-16 min-w-[80%] justify-center">
            {partners.slice(0, 7).map((partner, index) => ( // Show only 6 logos
        <div 
          key={`partner-1-${index}`}
          className="flex items-center justify-center w-[250px] h-[150px] transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-[140px] w-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
            
          </div>
        </div>
      </div>

      

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes scrollMobile {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 45s linear infinite;
          }
          .animate-scroll-mobile {
            animation: scrollMobile 60s linear infinite;
          }
          .animate-scroll:hover,
          .animate-scroll-mobile:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}

export default PartnerSlider2;