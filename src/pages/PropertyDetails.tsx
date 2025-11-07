import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PropertyDetails: React.FC = () => {
  const { id } = useParams(); // get property ID from route
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="m-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back
      </button>

      <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Property #{id} Details</h1>
        <p className="mb-6 text-gray-700">
          Here you can display the property description, images, gallery, pricing, etc.
        </p>

        {/* Example: property images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="https://via.placeholder.com/600x400" alt="Property" className="w-full h-auto rounded" />
          <img src="https://via.placeholder.com/600x400" alt="Property" className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
