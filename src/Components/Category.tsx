import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHome, FaBuilding, FaCity, FaWarehouse } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import hux1 from "../assets/hux1.jpg";
import hux2 from "../assets/hux2.jpg";
import hux3 from "../assets/hux3.jpg";
import hux4 from "../assets/hux4.jpg";

const Category: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      name: "House",
      icon: <FaHome className="text-5xl text-white" />,
      image: hux1, // Fixed: Use the imported variable directly
    },
    {
      id: 2,
      name: "Apartment",
      icon: <FaBuilding className="text-5xl text-white" />,
      image: hux2, // Fixed: Use the imported variable directly
    },
    {
      id: 3,
      name: "Office",
      icon: <FaCity className="text-5xl text-white" />,
      image: hux3, // Fixed: Use the imported variable directly
    },
    {
      id: 4,
      name: "Villa",
      icon: <FaWarehouse className="text-5xl text-white" />,
      image: hux4, // Fixed: Use the imported variable directly
    },
  ];

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Keyboard navigation (ESC, ←, →)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % categories.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + categories.length) % categories.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, categories.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Category
        </h2>
        <p className="mt-2 text-gray-600">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>

        {/* Swiper */}
        <div className="mt-12 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            className="pb-12 custom-swiper"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={cat.id}>
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  onClick={() => setSelectedIndex(index)}
                  className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  {/* Background Image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlaybg-gradient-to-t from-black/60 via-black/40 to-transparent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/100 to-transparent flex flex-col items-center justify-center text-amber-300 space-y-4">
                    {cat.icon}
                    <h3 className="text-lg font-semibold">{cat.name}</h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 z-10">
            <FaChevronLeft className="text-gray-700 text-xl" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 z-10">
            <FaChevronRight className="text-gray-700 text-xl" />
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)} // Close on background click
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Cancel button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full shadow-lg hover:bg-gray-200"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Left nav */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (prev) => (prev! - 1 + categories.length) % categories.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200"
              aria-label="Previous image"
              title="Previous image"
            >
              <FaChevronLeft />
            </button>

            {/* Right nav */}
            <button
              onClick={() =>
                setSelectedIndex((prev) => (prev! + 1) % categories.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200"
              aria-label="Next image"
              title="Next image"
            >
              <FaChevronRight />
            </button>

            <img
              src={categories[selectedIndex].image}
              alt={categories[selectedIndex].name}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Category;
