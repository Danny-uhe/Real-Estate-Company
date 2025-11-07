import React from "react";
import Header from "./Header";

interface Filters {
  propertyType: string;
  priceRange: string;
  bedrooms: string;
}

const HomePage: React.FC = () => {
  const handleSearch = (query: string, filters: Filters) => {
    console.log("Search performed:", { query, filters });
    // Implement your search logic here
    // e.g., API call, state update, navigation, etc.
  };

  return (
    <>
      {/* Option 1: Header with search bar (default) */}
      <Header onSearch={handleSearch} />

      {/* Option 2: Header with custom search placeholder */}
      <Header 
        onSearch={handleSearch}
        searchPlaceholder="Find your dream property..."
      />

      {/* Option 3: Header without search bar (navigation only) */}
      <Header showSearchBar={false} />

      {/* Rest of your page content */}
      <main>
        <div className="container">
          <h1>Welcome to Property Search</h1>
          <p>Use the search bar above to find properties.</p>
        </div>
      </main>
    </>
  );
};

export default HomePage;