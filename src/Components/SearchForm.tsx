
import React, { useState } from "react";
import Slider from 'react-slick'
import './Search.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/react.svg";
import Carousel1 from "../assets/Carousel1.jpg";
import Carousel3 from "../assets/Carousel3.jpg";
import Carousel4 from "../assets/Carousel4.jpg";
import Carousel5 from "../assets/Carousel5.jpg";
import Carousel6 from "../assets/Carousel6.jpg";

const SearchForm: React.FC = () => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const toggleAdvanced = () => setIsAdvancedOpen(prev => !prev);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Carousel - Fixed height */}
      <div className="absolute inset-0 z-0">
        <Slider {...carouselSettings}>
          {[Carousel1, Carousel3, Carousel4, Carousel5, Carousel6].map((img, idx) => (
            <div key={idx} className="h-screen">
              <img 
                src={img} 
                alt={`Background ${idx}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Blurred Overlay */}
      <div className="absolute inset-0 z-5 bg-black/80 backdrop-blur-9xl"></div>
      
      {/* Centered Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Find Your Dream Home
        </h1>
      </div>

      {/* Content Overlay - Scrollable */}
      <div className="relative z-10 h-screen flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="flex-shrink-0 p-4 bg-gray-800 bg-opacity-90">
          <div className="flex items-center justify-between lg:flex-row lg:items-center">
            <div className="flex-shrink-0">
              <img src={logo} className="h-10" alt="Logo" />
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-center text-2xl text-white">
              <nav className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">Home</a>
                <a href="#" className="hover:text-blue-400">Properties</a>
                <a href="#" className="hover:text-blue-400">Contacts</a>
              </nav>
            </div>

            <div className="lg:flex lg:ml-auto">
              <button onClick={() => setIsLoginOpen(true)} className="bg-blue-600 text-white px-8 cursor-pointer py-3 rounded">Login</button>
            </div>

            <div className="lg:hidden">
              <button title="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 left-6 text-2xl text-gray-800 hover:text-red-500 transition-colors duration-200">✕</button>
                <nav className="flex flex-col space-y-6 text-lg font-medium text-gray-800">
                  {["Home","Properties","Contacts"].map((link, i) => (
                    <a key={i} href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">{link}</a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Large Screen Search Bar */}
          <div className="hidden lg:block p-4 bg-white">
            <div className="flex space-x-2">
              <input type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" className="flex-1 p-2 rounded border border-gray-700 bg-gray-400 text-white" />
              <button onClick={toggleAdvanced} className="bg-blue-600 text-white px-4 py-2 rounded">Advanced</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
            </div>
          </div>

          {/* Large Screen Advanced Form with Slide Animation */}
          {isAdvancedOpen && (
            <div className="hidden lg:flex justify-center mt-4 px-4">
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md animate-slideDown">
                {/* Address */}
                <h2 className="text-lg font-semibold mb-4">Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  {["Country","Region","City","Zip code"].map((placeholder, i) => (
                    <input key={i} type="text" placeholder={placeholder} className="p-2 border rounded" />
                  ))}
                </div>

                {/* Apartment Info */}
                <h2 className="text-lg font-semibold mt-4 mb-2">Apartment info</h2>
                <div className="grid grid-cols-3 gap-4">
                  {["Rooms","Size","Sort"].map((placeholder,i) => (
                    <input key={i} type="text" placeholder={placeholder} className="p-2 border rounded" />
                  ))}
                </div>

                {/* Price */}
                <h2 className="text-lg font-semibold mt-4 mb-2">Price</h2>
                <div className="grid grid-cols-2 gap-4">
                  {["Min price","Max price"].map((placeholder,i) => (
                    <input key={i} type="text" placeholder={placeholder} className="p-2 border rounded" />
                  ))}
                </div>

                <div className="flex justify-end mt-4 space-x-4">
                  <button onClick={toggleAdvanced} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Cancel</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Submit</button>
                </div>
              </div>
            </div>
          )}

          {/* Small Screen Layout */}
          <div className="lg:hidden flex flex-col min-h-0">
            {/* Property Card */}
            <div className="p-4 flex-1 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/30 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <h2 className="text-lg font-semibold text-white drop-shadow-sm">Skyper Pool Partment</h2>
                  <p className="text-sm text-white/90 drop-shadow-sm">112 Glenwood Ave Hyde Park, Boston, MA</p>
                  <div className="flex gap-2 text-sm text-white/80 mt-2 flex-wrap">
                    {["4 Beds","5 Baths","1 Garage","1200 Sq Ft"].map((info,i) => (
                      <div key={i} className="rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white p-2">{info}</div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-white mt-2 drop-shadow-sm">$5,250/mo</p>
                  <button className="w-full max-w-80 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2 mt-4 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg">Read more</button>
                </div>
              </div>
            </div>

            {/* Bottom Search Section */}
            <div className="flex-shrink-0 p-4 bg-gray-900 bg-opacity-80">
              <div className="flex flex-col space-y-2">
                <input type="text" placeholder="Enter an address, city, ZIP code" className="p-2 rounded border border-gray-700 bg-gray-800 text-white" />
                <div className="flex space-x-2">
                  <button onClick={toggleAdvanced} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Advanced</button>
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Search</button>
                </div>
              </div>

              {/* Small Screen Advanced Form */}
              {isAdvancedOpen && (
                <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg border border-white border-opacity-20 shadow-lg animate-slideDown max-h-96 overflow-y-auto">
                  {/* Address */}
                  <h2 className="text-lg font-semibold text-white mb-4">Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {["Country","Region","City","Zip code"].map((placeholder,i) => (
                      <input key={i} type="text" placeholder={placeholder} className="p-2 border rounded bg-gray-800 bg-opacity-50 text-white border-gray-600" />
                    ))}
                  </div>

                  {/* Apartment Info */}
                  <h2 className="text-lg font-semibold text-white mt-4 mb-2">Apartment info</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {["Rooms","Size","Sort"].map((placeholder,i) => (
                      <input key={i} type="text" placeholder={placeholder} className="p-2 border rounded bg-gray-800 bg-opacity-50 text-white border-gray-600" />
                    ))}
                  </div>

                  {/* Price */}
                  <h2 className="text-lg font-semibold text-white mt-4 mb-2">Price</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {["Min price","Max price"].map((placeholder,i) => (
                      <input key={i} type="text" placeholder={placeholder} className="p-2 border rounded bg-gray-800 bg-opacity-50 text-white border-gray-600" />
                    ))}
                  </div>

                  <div className="flex justify-end mt-4 space-x-4">
                    <button onClick={toggleAdvanced} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Cancel</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Submit</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-4">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
              <div className="flex justify-between items-center">
                <button type="button" onClick={() => setIsLoginOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchForm;