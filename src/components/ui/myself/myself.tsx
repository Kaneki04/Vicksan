'use client';

import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Header() {
  useEffect(() => {
    const typed1 = new Typed('.type', {
      strings: ['Programming.', 'Music.', 'Life.', 'Languages.', 'Learning.'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex max-w-6xl w-full px-6 space-y-8 lg:space-y-0 lg:flex-row flex-col">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center animate__animated animate__fadeIn animate__delay-0.5s">
          <img
            src="/images/ich.jpg"
            alt="App Screenshot"
            className="w-80 h-80 object-cover rounded-lg shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-8 space-y-6 animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-3xl  tracking-wide text-shadow-lg">
            Hey, I am Vicken!
          </h2>

          <p className="text-2xl /90">Blog Dedicated to</p>
          <span className="type text-[#1cafc5] text-xl font-semibold"></span>
          
          <p className="text-lg /80 mt-4">
            Discover my language learning app! Master essential vocabulary effortlessly with flashcards designed to boost your retention and confidence.
          </p>
          
          <a
            href="https://play.google.com/store/apps/details?id=com.vicksan.vicken&hl=en-GB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent  text-lg font-medium rounded-lg border border-white shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-white hover:text-black"
          >
            <img
              src="/images/gp.png" // Update this path with your actual image location
              alt="Google Play Logo"
              className="w-5 h-5 mr-3"
            />
            <span className="text-sm font-semibold">Google Play</span>
          </a>
        </div>
      </div>
    </div>
  );
}