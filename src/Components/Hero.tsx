import { useNavigate } from "react-router-dom";
import house from "../assets/videos/house6.mp4";
const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Video & Overlay */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={house} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto">
          Vermont Farmhouse With Antique Jail Is the Week&apos;s Most Popular Home
        </h1>
        <button
          onClick={() => navigate("/property/1")} // Example: property ID = 1
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md font-medium"
        >
          Read more
        </button>
      </div>
    </section>
  );
};
export default Hero