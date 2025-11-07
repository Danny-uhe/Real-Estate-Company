import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import house1 from "../assets/videos/house1.mp4";
import house2 from "../assets/videos/house2.mp4";
import house3 from "../assets/videos/house3.mp4";
import house4 from "../assets/videos/house4.mp4";
import house5 from "../assets/videos/house5.mp4";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile5.jpg";

interface Property {
  id: number;
  video: string; // Video path
  title: string;
  address: string;
  beds: number;
  baths: number;
  garage: number;
  sqft: number;
  price: string;
  profilePic: string;
}

const Properties: Property[] = [
  {
    id: 1,
    video: house1,
    title: "New Apartment Nice Wiew",
    address: "Quincy St, Brooklyn, NY, USA",
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: "$2,800/mo",
    profilePic: profile1,
  },
  {
    id: 2,
    video: house2,
    title: "New Apartment Nice Wiew",
    address: "Quincy St, Brooklyn, NY, USA",
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: "$7,500/mo",
    profilePic: profile2,
  },
  {
    id: 3,
    video: house3,
    title: "New Apartment Nice Wiew",
    address: "Quincy St, Brooklyn, NY, USA",
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: "$7,500/mo",
    profilePic: profile3,
  },
  {
    id: 4,
    video: house4,
    title: "New Apartment Nice Wiew",
    address: "Quincy St, Brooklyn, NY, USA",
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: "$6,200/mo",
    profilePic: profile4,
  },
  {
    id: 5,
    video: house5,
    title: "New Apartment Nice Wiew",
    address: "Quincy St, Brooklyn, NY, USA",
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: "$8,000/mo",
    profilePic: profile5,
  },
];

const PropertyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const navigate = useNavigate();

  const cardsPerView = 4;
  const maxIndex = Math.max(0, Properties.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleImageClick = (property: Property) => {
    navigate(`/property/${property.id}`);
  };

  const handlePlayHover = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  };

  const handlePauseHover = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
    }
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-900">Recommended</h2>
        <p className="text-gray-500 text-sm">
          Nulla quis curabitur velit voluptat auctor bibendum consectetur sit.
        </p>
      </div>
      <div className="relative w-full mt-6">
        <div className="grid grid-cols-1 sm:flex sm:justify-center">
          {/* Mobile: Grid layout with all cards */}
          <div className="grid grid-cols-1 sm:hidden gap-4">
            {Properties.map((property, index) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md p-3 sm:p-4 relative"
              >
                <div
                  className="relative"
                  onMouseEnter={() => handlePlayHover(index)}
                  onMouseLeave={() => handlePauseHover(index)}
                >
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    src={property.video}
                    className="w-full h-40 object-cover rounded-t-lg"
                    onClick={() => handleImageClick(property)}
                    muted
                  />
                </div>
                <span className="absolute top-6 left-6 bg-blue-900 text-white text-xs px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="absolute top-6 right-6 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  FOR SALE
                </span>
                <h3 className="text-blue-900 font-semibold mt-2">{property.title}</h3>
                <p className="text-gray-600 text-sm">{property.address}</p>
                <div className="flex space-x-2 text-gray-600 text-sm mt-2">
                  <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                  <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                  <span><i className="fas fa-car"></i> {property.garage} Garage</span>
                  <span><i className="fas fa-ruler-combined"></i> {property.sqft} Sq Ft</span>
                </div>
                <p className="text-blue-900 font-bold mt-2">{property.price}</p>
                <div className="flex justify-between mt-3">
                  <button className="text-gray-500 hover:text-blue-900">↑</button>
                  <button className="text-gray-500 hover:text-red-500">♥</button>
                </div>
                <img
                  src={property.profilePic}
                  alt="Agent"
                  className="w-10 h-10 rounded-full absolute bottom-2 left-2"
                />
              </div>
            ))}
          </div>
          
          {/* Larger screens: Swiper layout with 4 cards */}
          <div className="relative hidden sm:flex sm:justify-center w-full">
            <button
              className={`absolute left-2 z-10 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={prevSlide}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={currentIndex === 0}
            >
              ←
            </button>
            
            <div className="overflow-hidden w-full max-w-6xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentIndex * 100) / Properties.length}%)`,
                  width: `${(Properties.length / cardsPerView) * 100}%`
                }}
              >
                {Properties.map((property, index) => (
                  <div
                    key={property.id}
                    className="flex-shrink-0 relative p-2"
                    style={{ width: `${100 / Properties.length}%` }}
                  >
                    <div className="bg-white rounded-lg shadow-md p-4 h-full">
                    <div
                      className="relative"
                      onMouseEnter={() => handlePlayHover(index)}
                      onMouseLeave={() => handlePauseHover(index)}
                    >
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={property.video}
                        className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                        onClick={() => handleImageClick(property)}
                        muted
                      />
                    </div>
                    <span className="absolute top-6 left-6 bg-blue-900 text-white text-xs px-2 py-1 rounded">
                      FEATURED
                    </span>
                    <span className="absolute top-6 right-6 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      FOR SALE
                    </span>
                    <h3 className="text-blue-900 font-semibold mt-2">{property.title}</h3>
                    <p className="text-gray-600 text-sm">{property.address}</p>
                    <div className="flex space-x-2 text-gray-600 text-sm mt-2">
                      <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                      <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                      <span><i className="fas fa-car"></i> {property.garage} Garage</span>
                      <span><i className="fas fa-ruler-combined"></i> {property.sqft} Sq Ft</span>
                    </div>
                    <p className="text-blue-900 font-bold mt-2">{property.price}</p>
                    <div className="flex justify-between mt-2">
                      <button className="text-gray-500 hover:text-blue-900">↑</button>
                      <button className="text-gray-500 hover:text-red-500">♥</button>
                    </div>
                    <img
                      src={property.profilePic}
                      alt="Agent"
                      className="w-10 h-10 rounded-full absolute bottom-2 left-2"
                    />
                  </div>
                </div>
                ))}
              </div>
            </div>
            
            <button
              className={`absolute right-2 z-10 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 ${
                currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={nextSlide}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={currentIndex >= maxIndex}
            >
              →
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? "bg-blue-900" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

          </div>
  );
};

export default PropertyCarousel;
