import React, { useState, useEffect } from "react";
import login from "../assets/login.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
interface Filters {
  propertyType: string;
  priceRange: string;
  bedrooms: string;
}

interface HeaderProps {
  onSearch?: (query: string, filters: Filters) => void;
  searchPlaceholder?: string;
  showSearchBar?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  searchPlaceholder = "Enter address or zip code...",
  showSearchBar = true,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    propertyType: "",
    priceRange: "",
    bedrooms: "",
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    onSearch?.(searchQuery, filters);
  };

  const handleFilterChange = (key: keyof Filters, value: string): void => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <header className={`w-full sticky top-0 z-50 ${isScrolled ? "shadow-md bg-white" : "bg-white"}`}>
      {/* ✅ Top Navigation Bar */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            </div>

          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
  <li>
    <Link to="/" className="hover:text-blue-600">
      Home
    </Link>
  </li>
  <li>
    <Link to="/buy" className="hover:text-blue-600">
      Buy
    </Link>
  </li>
  <li>
    <Link to="/rent" className="hover:text-blue-600">
      Rent
    </Link>
  </li>
  <li>
    <Link to="/sell" className="hover:text-blue-600">
      Sell
    </Link>
  </li>
  <li>
    <Link to="/agents" className="hover:text-blue-600">
      Agents
    </Link>
  </li>
</ul>


      
        </div>
      </nav>

      {/* ✅ Search Bar Section */}
      {showSearchBar && (
        <div className="w-full bg-gray-50 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 px-4">
            {/* Search Input */}
            <div className="flex items-center w-full md:flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-6-6"
                />
              </svg>
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full outline-none text-sm text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {["status", "prices", "advanced"].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    showFilters === type
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() =>
                    setShowFilters(showFilters === type ? null : type)
                  }
                >
                  {type === "status" && "Status"}
                  {type === "prices" && "Prices"}
                  {type === "advanced" && "Advanced"}
                </button>
              ))}
            </div>

            {/* Search Button */}
            <button
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 shadow"
              onClick={handleSearch}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
          </div>

          {/* Dropdowns */}
          <div className="max-w-6xl mx-auto px-4 mt-4">
            {showFilters === "status" && (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <select
                  aria-label="Property Type"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                >
                  <option value="">Any Status</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>
            )}

            {showFilters === "prices" && (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <select
                  aria-label="Price Range"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                >
                  <option value="">Price Range</option>
                  <option value="0-300000">Under $300K</option>
                  <option value="300000-600000">$300K - $600K</option>
                  <option value="600000+">$600K+</option>
                </select>
              </div>
            )}

            {showFilters === "advanced" && (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <select
                  aria-label="Bedrooms"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                >
                  <option value="">Bedrooms</option>
                  <option value="1">1+ Bed</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

