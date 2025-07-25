//- components/navbar.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { handleBuyNow } from './button';
const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 585);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className="
      fixed flex
      px-5 py-3 z-50
      w-full
      justify-between
      border-b border-b-lucide-border
      bg-lucide-nav/80 backdrop-blur-md
      shadow-xs
    ">
      <div className="container mx-auto md:px-4 relative flex items-center justify-between">
        <div className="flex flex-1 font-lg font-bold text-lucide-title">
          Apple Watch SE
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0n mx-auto">
          <button className={`
            px-3 py-1
            bg-lucide-red
            text-white text-xs
            cursor-pointer
            rounded-full
            shadow-md
            transition-all duration-300
            ${scrolledDown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleBuyNow}
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
