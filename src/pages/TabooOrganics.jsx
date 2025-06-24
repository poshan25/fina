

// import React from "react";
// import { Link } from "react-router-dom";
// import NewNav from "../components/NewNav";
// import UserNav from "../components/UserNav";



// const TabooOrganicsPage = () => {
//   return (
//     <div className="relative w-full h-screen font-sans overflow-hidden">
//       {/* Background Image */}
//       <div className="relative">
//           <img
//         src="/images/001bgjpg.jpg"
//         alt="Taboo Products"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />
      
//       {/* Right-aligned image (50% width) */}
//       <img
//         className="absolute right-0 top-0 w-1/2 h-full object-cover z-0"
//         src="/images/888.png"
//         alt="main img"
//       />
//       </div>
    

//       {/* Overlay Content */}
//       <div className="relative text-[#1d2142] z-10 w-full h-full">
//         <UserNav />
//         {/* Hero Section */}
//         <section className="px-6 py-30 md:py-16 md:mt-[-90px] flex flex-col md:flex-row items-center justify-between h-full">
//           {/* Text Section - Limited to 50% width to avoid overlapping */}
//           <div className="md:max-w-md text-left space-y-4">
//             <p className="text-lg tracking-widest font-semibold text-gray-600 sm:text-lg">
//               PREMIUM QUALITY PRODUCTS
//             </p>
//             <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-10 mt-[-10px] text-[#4a5565]">
//               menonara Organics
//             </h1>
//             <p className="text-sm sm:text-[17px] font-semibold text-[#4a5565] md:text-gray-600">
//               We Provide Premium Quality Products <br /> At Affordable Prices Compared <br />
//               To Others Ecommerce Sites, <br /> Deliver All Over Nepal, With In A day
//               delivery inside KTM Valley.
//             </p>
          
//             <div className="mt-4 w-fit font-semibold cursor-pointer px-4 sm:px-6 py-2 sm:py-3.5 bg-gradient-to-r from-[#b79494] to-[#926362] text-white rounded-full text-xs sm:text-sm hover:from-[#a37878] hover:to-[#c1a9a9]">
//               <Link to="/products">Shop now</Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default TabooOrganicsPage;

import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../components/UserNav";

const TabooOrganicsPage = () => {
  return (
    <div className="md:px-38 relative w-full h-screen font-sans overflow-hidden">
      {/* Background Image (full screen) */}
      <img
        src="/images/001bgjpg.jpg"
        alt="Taboo Products"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Right-aligned overlay image (on top of background) */}
      <div className="absolute inset-0 z-[1]">
        <img
          className="absolute md:right-0 top-10 md:w-1/2 h-full object-cover"
          src="/images/333.png"
          alt="main img"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative text-[#1d2142] z-10 w-full h-full">
        <UserNav />
        
        {/* Hero Section */}
        <section className="px-6 py-30 md:py-16 md:mt-[-90px] flex flex-col md:flex-row items-center justify-between h-full">
          {/* Text Section */}
          <div className="md:max-w-md text-left space-y-4">
            <p className="text-lg tracking-widest font-semibold text-gray-600 sm:text-lg">
              PREMIUM QUALITY PRODUCTS
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-10 mt-[-10px] text-[#4a5565]">
              menonara Organics
            </h1>
            <p className="text-sm sm:text-[17px] font-semibold text-[#4a5565] md:text-gray-600">
              We Provide Premium Quality Products <br /> At Affordable Prices Compared <br />
              To Others Ecommerce Sites, <br /> Deliver All Over Nepal, With In A day
              delivery inside KTM Valley.
            </p>
          
            <div className="mt-4 w-fit font-semibold cursor-pointer px-4 sm:px-6 py-2 sm:py-3.5 bg-gradient-to-r from-[#b79494] to-[#926362] text-white rounded-full text-xs sm:text-sm hover:from-[#a37878] hover:to-[#c1a9a9]">
              <Link to="/products">Shop now</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TabooOrganicsPage;