import React from "react";
import { FaSmile, FaHome, FaCalculator, FaMapMarkedAlt } from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <FaSmile className="text-4xl text-blue-600" />,
      title: "Trusted By Thousands",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      id: 2,
      icon: <FaHome className="text-4xl text-blue-600" />,
      title: "Wide Range Of Properties",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      id: 3,
      icon: <FaCalculator className="text-4xl text-blue-600" />,
      title: "Financing Made Easy",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      id: 4,
      icon: <FaMapMarkedAlt className="text-4xl text-blue-600" />,
      title: "See Neighborhoods",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon */}
              <div className="p-4 bg-white rounded-full shadow-md">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
