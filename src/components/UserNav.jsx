// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // const UserNav = ({cartLength}) => {
// // //   return (
// // //     <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
// // //       <Link to="/user">Home</Link>
// // //       <br />
// // //       <Link to="/orderStatus">Order Status</Link>
// // //       <br />
// // //       <Link to="/toReceive">To Receive</Link>
// // //       <br />
// // //       <Link to="/received">Received</Link>
// // //      <p className="border p-2 text-black">{cartLength}</p>
// // //       <br />
// // //       <Link to="/userCart">Cart</Link>
// // //        <br />
// // //       <Link to="/">Switch Role</Link>
// // //     </nav>
// // //   );
// // // };

// // // export default UserNav;

// // import React, { useEffect } from "react";
// // import { Link, useSearchParams } from "react-router-dom";

// // const UserNav = ({ cartLength }) => {

// //   return (
// //     <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
// //       <Link to="/user">Home</Link>
// //       <br />
// //       <Link to="/orderStatus">Order Status</Link>
// //       <br />
// //       <Link to="/toReceive">To Receive</Link>
// //       <br />
// //       <Link to="/received">Received</Link>
// //       <br />

// //       <div className="relative">
// //         <Link to="/userCart" className="relative inline-block">
// //           Cart
// //           {cartLength > 0 && (
// //             <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// //               {cartLength}
// //             </span>
// //           )}
// //         </Link>
// //       </div>

// //       <br />
// //       <Link to="/">Switch Role</Link>
// //     </nav>
// //   );
// // };

// // export default UserNav;





















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import '@fontsource/prata';
// import '../index.css';
// import supabase from "../supabaseClient";

// const UserNav = () => {
//   const [cartLength, setCartLength] = useState(0);

//   useEffect(() => {
//     const fetchCartLength = async () => {
//       const { data, error } = await supabase.from("cart").select("*");
//       if (!error && data) {
//         setCartLength(data.length);
//       }
//     };

//     fetchCartLength();
//   }, []);

//   return (
//     // <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
//     <div className="">
//       {/* Navbar */}
//       <header className="w-full flex items-center justify-between px-6 ">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="flex flex-col items-center">
//             <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
//             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
//               melonara
//             </p>
//           </div>

//           {/* <span className="font-semibold text-sm text-gray-700">ORGANICS</span> */}
//         </div>

//         <nav
//           className="hidden md:flex items-center mt-15 gap-8 text-base text-[#cc7c5d]
//  font-semibold tracking-widest uppercase"
//         >
//           <Link to="/">Home</Link>
//           <br />
//           <Link to="/orderStatus">Order Status</Link>
//           <br />
//           <Link to="/toReceive">To Receive</Link>
//           <br />
//           <Link to="/received">Received</Link>
//           <br />

//           <div className="relative">
//             <Link to="/userCart" className="relative inline-block">
//               Cart
//               {cartLength > 0 && (
//                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                   {cartLength}
//                 </span>
//               )}
//             </Link>
//           </div>

//           <br />
//           {/* <Link to="/">Switch Role</Link> */}
//         </nav>
//         {/* <UserNav/> */}
//       </header>
//       <hr className="border-b mt-3 border-[#a8a297]" />
//     </div>
//   );
// };

// export default UserNav;





// ............................................


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '@fontsource/prata';
import '../index.css';
import supabase from "../supabaseClient";
import { FiMenu, FiX } from "react-icons/fi";

const UserNav = () => {
  const [cartLength, setCartLength] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCartLength = async () => {
      const { data, error } = await supabase.from("cart").select("*");
      if (!error && data) {
        setCartLength(data.length);
      }
    };

    fetchCartLength();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div  className="flex flex-col items-center">
            <Link to="/">            <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
</Link>
            <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
              Melonara
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center mt-15 gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase"
        >
          <Link to="/">Home</Link>
          <Link to="/orderStatus">Order Status</Link>
          <Link to="/toReceive">To Receive</Link>
          <Link to="/received">Received</Link>
          <div className="relative">
            <Link to="/userCart" className="relative inline-block">
              Cart
              {cartLength > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartLength}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#cc7c5d] focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg">
          <nav className="flex flex-col items-center gap-6 py-6 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/orderStatus" onClick={toggleMenu}>Order Status</Link>
            <Link to="/toReceive" onClick={toggleMenu}>To Receive</Link>
            <Link to="/received" onClick={toggleMenu}>Received</Link>
            <div className="relative">
              <Link to="/userCart" className="relative inline-block" onClick={toggleMenu}>
                Cart
                {cartLength > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartLength}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      )}

      <hr className="border-b mt-3 border-[#a8a297]" />
    </div>
  );
};

export default UserNav;
