import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./Components/SearchForm";
import Swiper from "./Components/Swiper";
import WhyChooseUs from "./Components/WhyChooseUs";
import Category from "./Components/Category";
import Hero from "./Components/Hero";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyCarousel from "./Components/PropertyCarousel"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <SearchForm />
              <Swiper />
              <WhyChooseUs />
              <Category />
              <Hero />
              <PropertyCarousel />
            </>
          }
        />

        {/* Property Details Page */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;













// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";

// import Home from "./pages/Home";
// import Buy from "./pages/Buy";
// import Rent from "./pages/Rent";
// import Sell from "./pages/Sell";
// import Agents from "./pages/Agents";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <main className="mt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/buy" element={<Buy />} />
//           <Route path="/rent" element={<Rent />} />
//           <Route path="/sell" element={<Sell />} />
//           <Route path="/agents" element={<Agents />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// };

// export default App;
