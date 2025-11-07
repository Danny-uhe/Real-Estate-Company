import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Property {
  id: number;
  video: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  garage: number;
  sqft: number;
  price: string;
  profilePic: string;
}

interface PropertyCardProps {
  property: Property;
  index: number;
  onPlayHover: (index: number) => void;
  onPauseHover: (index: number) => void;
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  index,
  onPlayHover,
  onPauseHover,
  videoRefs,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-3 sm:p-4 relative ${className}`}
      style={{ width: '380px', height: '429px' }}
    >
      <div
        className="relative"
        onMouseEnter={() => onPlayHover(index)}
        onMouseLeave={() => onPauseHover(index)}
      >
        <video
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          src={property.video}
          className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
          onClick={handleImageClick}
          muted
        />
      </div>
      <span className="absolute top-6 left-6 bg-blue-900 text-white text-xs px-2 py-1 rounded">
        FEATURED
      </span>
      <span className="absolute top-6 right-6 bg-gray-800 text-white text-xs px-2 py-1 rounded">
        FOR SALE
      </span>
      <h3 className="text-blue-900 font-semibold mt-2 text-base">{property.title}</h3>
      <p className="text-gray-600 text-sm">{property.address}</p>
      <div className="flex flex-wrap space-x-2 text-gray-600 text-sm mt-2">
        <span>
          <i className="fas fa-bed"></i> {property.beds} Beds
        </span>
        <span>
          <i className="fas fa-bath"></i> {property.baths} Baths
        </span>
        <span>
          <i className="fas fa-car"></i> {property.garage} Garage
        </span>
        <span>
          <i className="fas fa-ruler-combined"></i> {property.sqft} Sq Ft
        </span>
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
  );
};

export default PropertyCard;