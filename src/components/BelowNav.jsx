import React from 'react';

const BelowNavbar = () => {
  const categories = [
    "Brands",
    "Korean Beauty",
    "Others",
    "Makeup",
    "Skincare",
    "Haircare",
    "Body",
    "Essentials",
    "Hands & Feet",
    "Wellness",
    "Appliances",
    "Mom & Baby",
  ];

  
  return (
    <div className="first-line flex primaryLine">
      <div className="nav-list flex items-center justify-between w-full bg-white shadow-md p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            tabIndex={0} // Added tabindex for keyboard navigation
            className="nav cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200"
          >
            {category}
          </div>
        ))}
      </div>
     
    </div>
  );
};


export default BelowNavbar;
