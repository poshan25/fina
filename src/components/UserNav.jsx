
// // // // // // // // // // import React from "react";
// // // // // // // // // // import { Link } from "react-router-dom";

// // // // // // // // // // const UserNav = ({cartLength}) => {
// // // // // // // // // //   return (
// // // // // // // // // //     <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
// // // // // // // // // //       <Link to="/user">Home</Link>
// // // // // // // // // //       <br />
// // // // // // // // // //       <Link to="/orderStatus">Order Status</Link>
// // // // // // // // // //       <br />
// // // // // // // // // //       <Link to="/toReceive">To Receive</Link>
// // // // // // // // // //       <br />
// // // // // // // // // //       <Link to="/received">Received</Link>
// // // // // // // // // //      <p className="border p-2 text-black">{cartLength}</p>
// // // // // // // // // //       <br />
// // // // // // // // // //       <Link to="/userCart">Cart</Link>
// // // // // // // // // //        <br />
// // // // // // // // // //       <Link to="/">Switch Role</Link>
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default UserNav;

// // // // // // // // // import React, { useEffect } from "react";
// // // // // // // // // import { Link, useSearchParams } from "react-router-dom";

// // // // // // // // // const UserNav = ({ cartLength }) => {

// // // // // // // // //   return (
// // // // // // // // //     <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
// // // // // // // // //       <Link to="/user">Home</Link>
// // // // // // // // //       <br />
// // // // // // // // //       <Link to="/orderStatus">Order Status</Link>
// // // // // // // // //       <br />
// // // // // // // // //       <Link to="/toReceive">To Receive</Link>
// // // // // // // // //       <br />
// // // // // // // // //       <Link to="/received">Received</Link>
// // // // // // // // //       <br />

// // // // // // // // //       <div className="relative">
// // // // // // // // //         <Link to="/userCart" className="relative inline-block">
// // // // // // // // //           Cart
// // // // // // // // //           {cartLength > 0 && (
// // // // // // // // //             <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // // //               {cartLength}
// // // // // // // // //             </span>
// // // // // // // // //           )}
// // // // // // // // //         </Link>
// // // // // // // // //       </div>

// // // // // // // // //       <br />
// // // // // // // // //       <Link to="/">Switch Role</Link>
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default UserNav;





















// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // import '@fontsource/prata';
// // // // // // // // import '../index.css';
// // // // // // // // import supabase from "../supabaseClient";

// // // // // // // // const UserNav = () => {
// // // // // // // //   const [cartLength, setCartLength] = useState(0);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchCartLength = async () => {
// // // // // // // //       const { data, error } = await supabase.from("cart").select("*");
// // // // // // // //       if (!error && data) {
// // // // // // // //         setCartLength(data.length);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchCartLength();
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     // <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
// // // // // // // //     <div className="">
// // // // // // // //       {/* Navbar */}
// // // // // // // //       <header className="w-full flex items-center justify-between px-6 ">
// // // // // // // //         {/* Logo */}
// // // // // // // //         <div className="flex items-center gap-2">
// // // // // // // //           <div className="flex flex-col items-center">
// // // // // // // //             <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // // // // // // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // // // // // // //               meonara
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           {/* <span className="font-semibold text-sm text-gray-700">ORGANICS</span> */}
// // // // // // // //         </div>

// // // // // // // //         <nav
// // // // // // // //           className="hidden md:flex items-center mt-15 gap-8 text-base text-[#cc7c5d]
// // // // // // // //  font-semibold tracking-widest uppercase"
// // // // // // // //         >
// // // // // // // //           <Link to="/">Home</Link>
// // // // // // // //           <br />
// // // // // // // //           <Link to="/orderStatus">Order Status</Link>
// // // // // // // //           <br />
// // // // // // // //           <Link to="/toReceive">To Receive</Link>
// // // // // // // //           <br />
// // // // // // // //           <Link to="/received">Received</Link>
// // // // // // // //           <br />

// // // // // // // //           <div className="relative">
// // // // // // // //             <Link to="/userCart" className="relative inline-block">
// // // // // // // //               Cart
// // // // // // // //               {cartLength > 0 && (
// // // // // // // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // // //                   {cartLength}
// // // // // // // //                 </span>
// // // // // // // //               )}
// // // // // // // //             </Link>
// // // // // // // //           </div>

// // // // // // // //           <br />
// // // // // // // //           {/* <Link to="/">Switch Role</Link> */}
// // // // // // // //         </nav>
// // // // // // // //         {/* <UserNav/> */}
// // // // // // // //       </header>
// // // // // // // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default UserNav;





// // // // // // // // ............................................






// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import '@fontsource/prata';
// // // // // // // import '../index.css';
// // // // // // // import supabase from "../supabaseClient";
// // // // // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // // // // import { FaSearch } from "react-icons/fa";


// // // // // // // const UserNav = () => {
// // // // // // //   const [cartLength, setCartLength] = useState(0);
// // // // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCartLength = async () => {
// // // // // // //       const { data, error } = await supabase.from("cart").select("*");
// // // // // // //       if (!error && data) {
// // // // // // //         setCartLength(data.length);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchCartLength();
// // // // // // //   }, []);

// // // // // // //   const toggleMenu = () => {
// // // // // // //     setIsMenuOpen(!isMenuOpen);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="">
// // // // // // //       {/* Navbar */}
// // // // // // //       <header className="w-full flex items-center justify-between px-6">
// // // // // // //         {/* Logo */}
// // // // // // //         <div className="flex items-center gap-2">
// // // // // // //           <div  className="flex flex-col items-center">
// // // // // // //             <Link to="/">            <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // // // // // // </Link>
// // // // // // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // // // // // //               meonara
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Desktop Navigation */}
// // // // // // //         <nav
// // // // // // //           className="hidden md:flex items-center mt-15 gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase"
// // // // // // //         >
// // // // // // //           <Link to="/">Home</Link>
// // // // // // //           <Link to="/orderStatus">Order Status</Link>
// // // // // // //           <Link to="/toReceive">To Receive</Link>
// // // // // // //           <Link to="/received">Received</Link>
// // // // // // //           <div className="relative">
// // // // // // //             <Link to="/userCart" className="relative inline-block">
// // // // // // //               Cart
// // // // // // //               {cartLength > 0 && (
// // // // // // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //                   {cartLength}
// // // // // // //                 </span>
// // // // // // //               )}
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </nav>

// // // // // // //         {/* Mobile Hamburger Button */}
// // // // // // //         <button
// // // // // // //           className="md:hidden text-[#cc7c5d] focus:outline-none"
// // // // // // //           onClick={toggleMenu}
// // // // // // //         >
// // // // // // //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // // // // // //         </button>
// // // // // // //       </header>

// // // // // // //       {/* Mobile Menu */}
// // // // // // //       {isMenuOpen && (
// // // // // // //         <div className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg">
// // // // // // //           <nav className="flex flex-col items-center gap-6 py-6 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // // // //             <Link to="/" onClick={toggleMenu}>Home</Link>
// // // // // // //             <Link to="/orderStatus" onClick={toggleMenu}>Order Status</Link>
// // // // // // //             <Link to="/toReceive" onClick={toggleMenu}>To Receive</Link>
// // // // // // //             <Link to="/received" onClick={toggleMenu}>Received</Link>
// // // // // // //             <div className="relative">
// // // // // // //               <Link to="/userCart" className="relative inline-block" onClick={toggleMenu}>
// // // // // // //                 Cart
// // // // // // //                 {cartLength > 0 && (
// // // // // // //                   <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //                     {cartLength}
// // // // // // //                   </span>
// // // // // // //                 )}
// // // // // // //               </Link>
// // // // // // //             </div>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default UserNav;


















































// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import '@fontsource/prata';
// // // // // // // import '../index.css';
// // // // // // // import supabase from "../supabaseClient";
// // // // // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // // // // import { FaSearch } from "react-icons/fa";

// // // // // // // const UserNav = () => {
// // // // // // //   const [cartLength, setCartLength] = useState(0);
// // // // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCartLength = async () => {
// // // // // // //       const { data, error } = await supabase.from("cart").select("*");
// // // // // // //       if (!error && data) {
// // // // // // //         setCartLength(data.length);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchCartLength();
// // // // // // //   }, []);

// // // // // // //   const toggleMenu = () => {
// // // // // // //     setIsMenuOpen(!isMenuOpen);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       {/* Navbar */}
// // // // // // //       <header className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
// // // // // // //         {/* Logo */}
// // // // // // //         <div className="flex items-center gap-2">
// // // // // // //           <div className="flex flex-col items-center">
// // // // // // //             <Link to="/">
// // // // // // //               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // // // // // //             </Link>
// // // // // // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // // // // // //               meonara
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Search Bar */}
// // // // // // //         <div className="w-full md:w-1/3">
// // // // // // //           <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Search..."
// // // // // // //               className="outline-none px-4 py-2 w-full text-sm"
// // // // // // //             />
// // // // // // //             <button className="bg-orange-300 p-2 hover:bg-orange-400 transition">
// // // // // // //               <FaSearch className="text-gray-700 text-lg" />
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Desktop Navigation */}
// // // // // // //         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // // // //           <Link to="/">Home</Link>
// // // // // // //           <Link to="/orderStatus">Order Status</Link>
// // // // // // //           <Link to="/toReceive">To Receive</Link>
// // // // // // //           <Link to="/received">Received</Link>
// // // // // // //           <div className="relative">
// // // // // // //             <Link to="/userCart" className="relative inline-block">
// // // // // // //               Cart
// // // // // // //               {cartLength > 0 && (
// // // // // // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //                   {cartLength}
// // // // // // //                 </span>
// // // // // // //               )}
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </nav>

// // // // // // //         {/* Mobile Hamburger Button */}
// // // // // // //         <button
// // // // // // //           className="md:hidden text-[#cc7c5d] focus:outline-none"
// // // // // // //           onClick={toggleMenu}
// // // // // // //         >
// // // // // // //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // // // // // //         </button>
// // // // // // //       </header>

// // // // // // //       {/* Mobile Menu */}
// // // // // // //       {isMenuOpen && (
// // // // // // //         <div className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg">
// // // // // // //           <nav className="flex flex-col items-center gap-6 py-6 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // // // //             <Link to="/" onClick={toggleMenu}>Home</Link>
// // // // // // //             <Link to="/orderStatus" onClick={toggleMenu}>Order Status</Link>
// // // // // // //             <Link to="/toReceive" onClick={toggleMenu}>To Receive</Link>
// // // // // // //             <Link to="/received" onClick={toggleMenu}>Received</Link>
// // // // // // //             <div className="relative">
// // // // // // //               <Link to="/userCart" className="relative inline-block" onClick={toggleMenu}>
// // // // // // //                 Cart
// // // // // // //                 {cartLength > 0 && (
// // // // // // //                   <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //                     {cartLength}
// // // // // // //                   </span>
// // // // // // //                 )}
// // // // // // //               </Link>
// // // // // // //             </div>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default UserNav;



















































// // // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import '@fontsource/prata';
// // // // // // // import '../index.css';
// // // // // // // import supabase from "../supabaseClient";
// // // // // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // // // // import { FaSearch } from "react-icons/fa";

// // // // // // // const UserNav = () => {
// // // // // // //   const [cartLength, setCartLength] = useState(0);
// // // // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // // // // // //   const [showSearch, setShowSearch] = useState(false);

// // // // // // //   const searchRef = useRef();

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCartLength = async () => {
// // // // // // //       const { data, error } = await supabase.from("cart").select("*");
// // // // // // //       if (!error && data) {
// // // // // // //         setCartLength(data.length);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchCartLength();
// // // // // // //   }, []);

// // // // // // //   // Close search input when clicking outside
// // // // // // //   useEffect(() => {
// // // // // // //     const handleClickOutside = (e) => {
// // // // // // //       if (searchRef.current && !searchRef.current.contains(e.target)) {
// // // // // // //         setShowSearch(false);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // // // //   }, []);

// // // // // // //   const toggleMenu = () => {
// // // // // // //     setIsMenuOpen(!isMenuOpen);
// // // // // // //   };

// // // // // // //   const toggleSearch = () => {
// // // // // // //     setShowSearch(!showSearch);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="relative">
// // // // // // //       {/* Navbar */}
// // // // // // //       <header className="w-full flex items-center justify-between px-6 py-4">
// // // // // // //         {/* Logo */}
// // // // // // //         <div className="flex items-center gap-2">
// // // // // // //           <div className="flex flex-col items-center">
// // // // // // //             <Link to="/">
// // // // // // //               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // // // // // //             </Link>
// // // // // // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // // // // // //               meonara
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Desktop Navigation */}
// // // // // // //         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // // // //           <Link to="/">Home</Link>
// // // // // // //           <Link to="/orderStatus">Order Status</Link>
// // // // // // //           <Link to="/toReceive">To Receive</Link>
// // // // // // //           <Link to="/received">Received</Link>
// // // // // // //           <div className="relative">
// // // // // // //             <Link to="/userCart" className="relative inline-block">
// // // // // // //               Cart
// // // // // // //               {cartLength > 0 && (
// // // // // // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //                   {cartLength}
// // // // // // //                 </span>
// // // // // // //               )}
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //           {/* Search Icon on Desktop */}
// // // // // // //           <button onClick={toggleSearch} className="md:flex hidden p-2 text-[#cc7c5d]">
// // // // // // //             <FaSearch size={18} />
// // // // // // //           </button>
// // // // // // //         </nav>

// // // // // // //         {/* Mobile Hamburger Button */}
// // // // // // //         <button
// // // // // // //           className="md:hidden text-[#cc7c5d] focus:outline-none"
// // // // // // //           onClick={toggleMenu}
// // // // // // //         >
// // // // // // //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // // // // // //         </button>
// // // // // // //       </header>

// // // // // // //       {/* Mobile Menu */}
// // // // // // //       {isMenuOpen && (
// // // // // // //         <div className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg">
// // // // // // //           <nav className="flex flex-col items-center gap-6 py-6 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // // // //             <Link to="/" onClick={toggleMenu}>Home</Link>
// // // // // // //             <Link to="/orderStatus" onClick={toggleMenu}>Order Status</Link>
// // // // // // //             <Link to="/toReceive" onClick={toggleMenu}>To Receive</Link>
// // // // // // //             <Link to="/received" onClick={toggleMenu}>Received</Link>
// // // // // // //             <Link to="/userCart" onClick={toggleMenu}>
// // // // // // //               Cart
// // // // // // //               {cartLength > 0 && (
// // // // // // //                 <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // // //                   {cartLength}
// // // // // // //                 </span>
// // // // // // //               )}
// // // // // // //             </Link>
// // // // // // //             {/* Search icon on Mobile inside menu */}
// // // // // // //             <button onClick={toggleSearch} className="p-2 text-[#cc7c5d]">
// // // // // // //               <FaSearch size={18} />
// // // // // // //             </button>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Search Bar (Shown when icon is clicked) */}
// // // // // // //       {showSearch && (
// // // // // // //         <div ref={searchRef} className="absolute top-full w-full left-0 bg-white shadow-md px-6 py-3 z-40">
// // // // // // //           <div className="max-w-screen-md mx-auto">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Search products..."
// // // // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default UserNav;































// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import '@fontsource/prata';
// // // // // // import '../index.css';
// // // // // // import supabase from "../supabaseClient";
// // // // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // // // import { FaSearch } from "react-icons/fa";

// // // // // // const UserNav = () => {
// // // // // //   const [cartLength, setCartLength] = useState(0);
// // // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // // // // //   const [showSearch, setShowSearch] = useState(false);

// // // // // //   const searchRef = useRef();
// // // // // //   const menuRef = useRef();

// // // // // //   useEffect(() => {
// // // // // //     const fetchCartLength = async () => {
// // // // // //       const { data, error } = await supabase.from("cart").select("*");
// // // // // //       if (!error && data) {
// // // // // //         setCartLength(data.length);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchCartLength();
// // // // // //   }, []);

// // // // // //   // Close search input when clicking outside
// // // // // //   useEffect(() => {
// // // // // //     const handleClickOutside = (e) => {
// // // // // //       if (searchRef.current && !searchRef.current.contains(e.target) && 
// // // // // //           !e.target.closest('.search-icon')) {
// // // // // //         setShowSearch(false);
// // // // // //       }
// // // // // //     };
// // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // // //   }, []);

// // // // // //   const toggleMenu = () => {
// // // // // //     setIsMenuOpen(!isMenuOpen);
// // // // // //   };

// // // // // //   const toggleSearch = (e) => {
// // // // // //     if (e) e.stopPropagation();
// // // // // //     setShowSearch(!showSearch);
// // // // // //   };

// // // // // //   const handleMobileSearchClick = (e) => {
// // // // // //     toggleSearch(e);
// // // // // //     setIsMenuOpen(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="relative">
// // // // // //       {/* Navbar */}
// // // // // //       <header className="w-full flex items-center justify-between px-6 py-4">
// // // // // //         {/* Logo */}
// // // // // //         <div className="flex items-center gap-2">
// // // // // //           <div className="flex flex-col items-center">
// // // // // //             <Link to="/">
// // // // // //               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // // // // //             </Link>
// // // // // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // // // // //               meonara
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Desktop Navigation */}
// // // // // //         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // // //           <Link to="/">Home</Link>
// // // // // //           <Link to="/orderStatus">Order Status</Link>
// // // // // //           <Link to="/toReceive">To Receive</Link>
// // // // // //           <Link to="/received">Received</Link>
// // // // // //           <div className="relative">
// // // // // //             <Link to="/userCart" className="relative inline-block">
// // // // // //               Cart
// // // // // //               {cartLength > 0 && (
// // // // // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // //                   {cartLength}
// // // // // //                 </span>
// // // // // //               )}
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //           {/* Search Icon on Desktop */}
// // // // // //           <button 
// // // // // //             onClick={toggleSearch} 
// // // // // //             className="search-icon md:flex hidden p-2 text-[#cc7c5d]"
// // // // // //           >
// // // // // //             <FaSearch size={18} />
// // // // // //           </button>
// // // // // //         </nav>

// // // // // //         {/* Mobile Hamburger Button */}
// // // // // //         <button
// // // // // //           className="md:hidden text-[#cc7c5d] focus:outline-none"
// // // // // //           onClick={toggleMenu}
// // // // // //         >
// // // // // //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // // // // //         </button>
// // // // // //       </header>

// // // // // //       {/* Mobile Menu */}
// // // // // //       {isMenuOpen && (
// // // // // //         <div 
// // // // // //           ref={menuRef}
// // // // // //           className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg"
// // // // // //         >
// // // // // //           <nav className="flex flex-col items-center gap-6 py-6 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // // //             <Link to="/" onClick={toggleMenu}>Home</Link>
// // // // // //             <Link to="/orderStatus" onClick={toggleMenu}>Order Status</Link>
// // // // // //             <Link to="/toReceive" onClick={toggleMenu}>To Receive</Link>
// // // // // //             <Link to="/received" onClick={toggleMenu}>Received</Link>
// // // // // //             <Link to="/userCart" onClick={toggleMenu}>
// // // // // //               Cart
// // // // // //               {cartLength > 0 && (
// // // // // //                 <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // // //                   {cartLength}
// // // // // //                 </span>
// // // // // //               )}
// // // // // //             </Link>
// // // // // //             {/* Search icon on Mobile inside menu */}
// // // // // //             <button 
// // // // // //               onClick={handleMobileSearchClick} 
// // // // // //               className="search-icon p-2 text-[#cc7c5d]"
// // // // // //             >
// // // // // //               <FaSearch size={18} />
// // // // // //             </button>
// // // // // //           </nav>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Search Bar (Shown when icon is clicked) */}
// // // // // //       {showSearch && (
// // // // // //         <div 
// // // // // //           ref={searchRef} 
// // // // // //           className={`absolute ${isMenuOpen ? 'top-[calc(100%+160px)]' : 'top-full'} w-full left-0 bg-white shadow-md px-6 py-3 z-40`}
// // // // // //         >
// // // // // //           <div className="max-w-screen-md mx-auto">
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder="Search products..."
// // // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default UserNav;















































// // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import '@fontsource/prata';
// // // // // import '../index.css';
// // // // // import supabase from "../supabaseClient";
// // // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // // import { FaSearch } from "react-icons/fa";

// // // // // const UserNav = () => {
// // // // //   const [cartLength, setCartLength] = useState(0);
// // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // // // //   const [showSearch, setShowSearch] = useState(false);
// // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // //   const searchRef = useRef();
// // // // //   const menuRef = useRef();

// // // // //   useEffect(() => {
// // // // //     const fetchCartLength = async () => {
// // // // //       const { data, error } = await supabase.from("cart").select("*");
// // // // //       if (!error && data) {
// // // // //         setCartLength(data.length);
// // // // //       }
// // // // //     };

// // // // //     fetchCartLength();
// // // // //   }, []);

// // // // //   // Close search input when clicking outside
// // // // //   useEffect(() => {
// // // // //     const handleClickOutside = (e) => {
// // // // //       if (searchRef.current && !searchRef.current.contains(e.target) && 
// // // // //           !e.target.closest('.search-icon')) {
// // // // //         setShowSearch(false);
// // // // //       }
// // // // //     };
// // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // //   }, []);

// // // // //   const toggleMenu = () => {
// // // // //     setIsMenuOpen(!isMenuOpen);
// // // // //     if (isMenuOpen) {
// // // // //       setShowSearch(false);
// // // // //     }
// // // // //   };

// // // // //   const toggleSearch = () => {
// // // // //     setShowSearch(!showSearch);
// // // // //     if (!showSearch) {
// // // // //       setTimeout(() => {
// // // // //         const searchInput = document.querySelector('.search-input');
// // // // //         if (searchInput) searchInput.focus();
// // // // //       }, 0);
// // // // //     }
// // // // //   };

// // // // //   const handleSearchSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     // Handle search functionality here
// // // // //     console.log("Searching for:", searchQuery);
// // // // //     // You can redirect to search page or filter results
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative">
// // // // //       {/* Navbar */}
// // // // //       <header className="w-full flex items-center justify-between px-6 py-4">
// // // // //         {/* Logo */}
// // // // //         <div className="flex items-center gap-2">
// // // // //           <div className="flex flex-col items-center">
// // // // //             <Link to="/">
// // // // //               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // // // //             </Link>
// // // // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // // // //               meonara
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Desktop Navigation */}
// // // // //         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // //           <Link to="/">Home</Link>
// // // // //           <Link to="/orderStatus">Order Status</Link>
// // // // //           <Link to="/toReceive">To Receive</Link>
// // // // //           <Link to="/received">Received</Link>
// // // // //           <div className="relative">
// // // // //             <Link to="/userCart" className="relative inline-block">
// // // // //               Cart
// // // // //               {cartLength > 0 && (
// // // // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // //                   {cartLength}
// // // // //                 </span>
// // // // //               )}
// // // // //             </Link>
// // // // //           </div>
          
// // // // //           {/* Search Icon on Desktop - Always visible */}
// // // // //           <button 
// // // // //             onClick={toggleSearch} 
// // // // //             className="search-icon p-2 text-[#cc7c5d] hover:text-[#a37733] transition-colors"
// // // // //           >
// // // // //             <FaSearch size={18} />
// // // // //           </button>
// // // // //         </nav>

// // // // //         {/* Mobile Hamburger Button */}
// // // // //         <div className="md:hidden flex items-center gap-4">
// // // // //           {/* Search Icon on Mobile - Outside menu */}
// // // // //           <button 
// // // // //             onClick={toggleSearch} 
// // // // //             className="search-icon p-2 text-[#cc7c5d]"
// // // // //           >
// // // // //             <FaSearch size={18} />
// // // // //           </button>
// // // // //           <button
// // // // //             className="text-[#cc7c5d] focus:outline-none"
// // // // //             onClick={toggleMenu}
// // // // //           >
// // // // //             {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // // // //           </button>
// // // // //         </div>
// // // // //       </header>

// // // // //       {/* Mobile Menu */}
// // // // //       {isMenuOpen && (
// // // // //         <div 
// // // // //           ref={menuRef}
// // // // //           className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg"
// // // // //         >
// // // // //           <nav className="flex flex-col items-center gap-6 py-6 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // // //             <Link to="/" onClick={toggleMenu}>Home</Link>
// // // // //             <Link to="/orderStatus" onClick={toggleMenu}>Order Status</Link>
// // // // //             <Link to="/toReceive" onClick={toggleMenu}>To Receive</Link>
// // // // //             <Link to="/received" onClick={toggleMenu}>Received</Link>
// // // // //             <Link to="/userCart" onClick={toggleMenu}>
// // // // //               Cart
// // // // //               {cartLength > 0 && (
// // // // //                 <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // // //                   {cartLength}
// // // // //                 </span>
// // // // //               )}
// // // // //             </Link>
// // // // //           </nav>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Search Bar (Shown when icon is clicked) */}
// // // // //       {showSearch && (
// // // // //         <div 
// // // // //           ref={searchRef} 
// // // // //           className={`absolute ${isMenuOpen ? 'top-[calc(100%+160px)]' : 'top-full'} w-full left-0 bg-white shadow-md px-6 py-3 z-40`}
// // // // //         >
// // // // //           <form onSubmit={handleSearchSubmit} className="max-w-screen-md mx-auto flex items-center">
// // // // //             <input
// // // // //               type="text"
// // // // //               value={searchQuery}
// // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // //               placeholder="Search products..."
// // // // //               className="search-input w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-300"
// // // // //             />
// // // // //             <button 
// // // // //               type="submit"
// // // // //               className="bg-[#cc7c5d] text-white px-4 py-2 rounded-r-md hover:bg-[#a37733] transition-colors"
// // // // //             >
// // // // //               <FaSearch size={18} />
// // // // //             </button>
// // // // //           </form>
// // // // //         </div>
// // // // //       )}

// // // // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UserNav;




































// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import '@fontsource/prata';
// // // // import '../index.css';
// // // // import supabase from "../supabaseClient";
// // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // import { FaSearch } from "react-icons/fa";

// // // // const UserNav = () => {
// // // //   const [cartLength, setCartLength] = useState(0);
// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // // //   const [showSearch, setShowSearch] = useState(false);
// // // //   const [searchQuery, setSearchQuery] = useState("");

// // // //   const searchRef = useRef();
// // // //   const menuRef = useRef();

// // // //   useEffect(() => {
// // // //     const fetchCartLength = async () => {
// // // //       const { data, error } = await supabase.from("cart").select("*");
// // // //       if (!error && data) {
// // // //         setCartLength(data.length);
// // // //       }
// // // //     };

// // // //     fetchCartLength();
// // // //   }, []);

// // // //   // Close search input when clicking outside
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (e) => {
// // // //       if (searchRef.current && !searchRef.current.contains(e.target) && 
// // // //           !e.target.closest('.search-icon')) {
// // // //         setShowSearch(false);
// // // //       }
// // // //     };
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, []);

// // // //   const toggleMenu = () => {
// // // //     setIsMenuOpen(!isMenuOpen);
// // // //     if (isMenuOpen) {
// // // //       setShowSearch(false);
// // // //     }
// // // //   };

// // // //   const toggleSearch = (e) => {
// // // //     if (e) e.stopPropagation();
// // // //     setShowSearch(!showSearch);
// // // //     if (!showSearch) {
// // // //       setTimeout(() => {
// // // //         const searchInput = document.querySelector('.search-input');
// // // //         if (searchInput) searchInput.focus();
// // // //       }, 0);
// // // //     }
// // // //   };

// // // //   const handleSearchSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     // Handle search functionality here
// // // //     console.log("Searching for:", searchQuery);
// // // //     // You can redirect to search page or filter results
// // // //   };

// // // //   return (
// // // //     <div className="relative">
// // // //       {/* Navbar */}
// // // //       <header className="w-full flex items-center justify-between px-6 py-4">
// // // //         {/* Logo */}
// // // //         <div className="flex items-center gap-2">
// // // //           <div className="flex flex-col items-center">
// // // //             <Link to="/">
// // // //               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // // //             </Link>
// // // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // // //               meonara
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Desktop Navigation */}
// // // //         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // //           <Link to="/">Home</Link>
// // // //           <Link to="/orderStatus">Order Status</Link>
// // // //           <Link to="/toReceive">To Receive</Link>
// // // //           <Link to="/received">Received</Link>
// // // //           <div className="relative">
// // // //             <Link to="/userCart" className="relative inline-block">
// // // //               Cart
// // // //               {cartLength > 0 && (
// // // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // //                   {cartLength}
// // // //                 </span>
// // // //               )}
// // // //             </Link>
// // // //           </div>
          
// // // //           {/* Search Icon on Desktop */}
// // // //           <button 
// // // //             onClick={toggleSearch} 
// // // //             className="search-icon p-2 text-[#cc7c5d] hover:text-[#a37733] transition-colors"
// // // //           >
// // // //             <FaSearch size={18} />
// // // //           </button>
// // // //         </nav>

// // // //         {/* Mobile Hamburger Button */}
// // // //         <button
// // // //           className="md:hidden text-[#cc7c5d] focus:outline-none"
// // // //           onClick={toggleMenu}
// // // //         >
// // // //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // // //         </button>
// // // //       </header>

// // // //       {/* Mobile Menu */}
// // // //       {isMenuOpen && (
// // // //         <div 
// // // //           ref={menuRef}
// // // //           className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg"
// // // //         >
// // // //           <nav className="flex flex-col items-center gap-6 py-6 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // // //             <Link to="/" onClick={toggleMenu}>Home</Link>
// // // //             <Link to="/orderStatus" onClick={toggleMenu}>Order Status</Link>
// // // //             <Link to="/toReceive" onClick={toggleMenu}>To Receive</Link>
// // // //             <Link to="/received" onClick={toggleMenu}>Received</Link>
// // // //             <Link to="/userCart" onClick={toggleMenu}>
// // // //               Cart
// // // //               {cartLength > 0 && (
// // // //                 <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // // //                   {cartLength}
// // // //                 </span>
// // // //               )}
// // // //             </Link>
// // // //             {/* Search icon inside mobile menu */}
// // // //             <button 
// // // //               onClick={(e) => {
// // // //                 toggleSearch(e);
// // // //                 toggleMenu();
// // // //               }} 
// // // //               className="search-icon p-2 text-[#cc7c5d] flex items-center gap-2"
// // // //             >
// // // //               <FaSearch size={18} />
// // // //               <span>Search</span>
// // // //             </button>
// // // //           </nav>
// // // //         </div>
// // // //       )}

// // // //       {/* Search Bar (Shown when icon is clicked) */}
// // // //       {showSearch && (
// // // //         <div 
// // // //           ref={searchRef} 
// // // //           className="absolute top-full w-full left-0 bg-white shadow-md px-6 py-3 z-40"
// // // //         >
// // // //           <form onSubmit={handleSearchSubmit} className="max-w-screen-md mx-auto flex items-center">
// // // //             <input
// // // //               type="text"
// // // //               value={searchQuery}
// // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // //               placeholder="Search products..."
// // // //               className="search-input w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-300"
// // // //             />
// // // //             <button 
// // // //               type="submit"
// // // //               className="bg-[#cc7c5d] text-white px-4 py-2 rounded-r-md hover:bg-[#a37733] transition-colors"
// // // //             >
// // // //               <FaSearch size={18} />
// // // //             </button>
// // // //           </form>
// // // //         </div>
// // // //       )}

// // // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserNav;



















// // // import React, { useEffect, useRef, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import '@fontsource/prata';
// // // import '../index.css';
// // // import supabase from "../supabaseClient";
// // // import { FiMenu, FiX } from "react-icons/fi";
// // // import { FaSearch } from "react-icons/fa";

// // // const UserNav = () => {
// // //   const [cartLength, setCartLength] = useState(0);
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [searchQuery, setSearchQuery] = useState("");

// // //   const menuRef = useRef();
// // //   const searchInputRef = useRef();

// // //   useEffect(() => {
// // //     const fetchCartLength = async () => {
// // //       const { data, error } = await supabase.from("cart").select("*");
// // //       if (!error && data) {
// // //         setCartLength(data.length);
// // //       }
// // //     };

// // //     fetchCartLength();
// // //   }, []);

// // //   // Focus search input when mobile menu opens
// // //   useEffect(() => {
// // //     if (isMenuOpen && searchInputRef.current) {
// // //       setTimeout(() => {
// // //         searchInputRef.current.focus();
// // //       }, 100);
// // //     }
// // //   }, [isMenuOpen]);

// // //   const toggleMenu = () => {
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   const handleSearchSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Handle search functionality here
// // //     console.log("Searching for:", searchQuery);
// // //     // You can redirect to search page or filter results
// // //   };

// // //   return (
// // //     <div className="relative">
// // //       {/* Navbar */}
// // //       <header className="w-full flex items-center justify-between px-6 py-4">
// // //         {/* Logo */}
// // //         <div className="flex items-center gap-2">
// // //           <div className="flex flex-col items-center">
// // //             <Link to="/">
// // //               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// // //             </Link>
// // //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// // //               meonara
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Desktop Navigation */}
// // //         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // //           <Link to="/">Home</Link>
// // //           <Link to="/orderStatus">Order Status</Link>
// // //           <Link to="/toReceive">To Receive</Link>
// // //           <Link to="/received">Received</Link>
// // //           <div className="relative">
// // //             <Link to="/userCart" className="relative inline-block">
// // //               Cart
// // //               {cartLength > 0 && (
// // //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // //                   {cartLength}
// // //                 </span>
// // //               )}
// // //             </Link>
// // //           </div>
          
// // //           {/* Search on Desktop */}
// // //           <form onSubmit={handleSearchSubmit} className="flex items-center ml-4">
// // //             <input
// // //               type="text"
// // //               value={searchQuery}
// // //               onChange={(e) => setSearchQuery(e.target.value)}
// // //               placeholder="Search..."
// // //               className="px-3 py-1 border border-[#cc7c5d] rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#cc7c5d] text-sm"
// // //             />
// // //             <button 
// // //               type="submit"
// // //               className="bg-[#cc7c5d] text-white px-3 py-1 rounded-r-md hover:bg-[#a37733] transition-colors"
// // //             >
// // //               <FaSearch size={16} />
// // //             </button>
// // //           </form>
// // //         </nav>

// // //         {/* Mobile Hamburger Button */}
// // //         <button
// // //           className="md:hidden text-[#cc7c5d] focus:outline-none"
// // //           onClick={toggleMenu}
// // //         >
// // //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // //         </button>
// // //       </header>

// // //       {/* Mobile Menu with integrated search */}
// // //       {isMenuOpen && (
// // //         <div 
// // //           ref={menuRef}
// // //           className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg"
// // //         >
// // //           {/* Search Box at the top of mobile menu */}
// // //           <form 
// // //             onSubmit={handleSearchSubmit} 
// // //             className="px-4 py-3 border-b border-gray-200"
// // //           >
// // //             <div className="relative">
// // //               <input
// // //                 ref={searchInputRef}
// // //                 type="text"
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 placeholder="Search products..."
// // //                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
// // //               />
// // //               <FaSearch 
// // //                 className="absolute left-3 top-3 text-gray-400"
// // //                 size={16}
// // //               />
// // //             </div>
// // //           </form>

// // //           {/* Menu Items */}
// // //           <nav className="flex flex-col py-3 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// // //             <Link to="/" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Home</Link>
// // //             <Link to="/orderStatus" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Order Status</Link>
// // //             <Link to="/toReceive" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">To Receive</Link>
// // //             <Link to="/received" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Received</Link>
// // //             <Link to="/userCart" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100 flex items-center">
// // //               Cart
// // //               {cartLength > 0 && (
// // //                 <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// // //                   {cartLength}
// // //                 </span>
// // //               )}
// // //             </Link>
// // //           </nav>
// // //         </div>
// // //       )}

// // //       <hr className="border-b mt-3 border-[#a8a297]" />
// // //     </div>
// // //   );
// // // };

// // // export default UserNav;








// // import  { React, useEffect, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import '@fontsource/prata';
// // import '../index.css';
// // import supabase from "../supabaseClient";
// // import { FiMenu, FiX } from "react-icons/fi";
// // import { FaSearch } from "react-icons/fa";

// // const UserNav = () => {
// //   const [cartLength, setCartLength] = useState(0);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [showSearch, setShowSearch] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState("");

// //   const menuRef = useRef();
// //   const searchInputRef = useRef();
// //   const searchBoxRef = useRef();

// //   useEffect(() => {
// //     const fetchCartLength = async () => {
// //       const { data, error } = await supabase.from("cart").select("*");
// //       if (!error && data) {
// //         setCartLength(data.length);
// //       }
// //     };

// //     fetchCartLength();
// //   }, []);

// //   // Focus search input when mobile menu opens or desktop search appears
// //   useEffect(() => {
// //     if (searchInputRef.current) {
// //       if (isMenuOpen || showSearch) {
// //         setTimeout(() => {
// //           searchInputRef.current.focus();
// //         }, 100);
// //       }
// //     }
// //   }, [isMenuOpen, showSearch]);

// //   // Close search when clicking outside (desktop)
// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (searchBoxRef.current && !searchBoxRef.current.contains(e.target) {
// //         if (!e.target.closest('.search-icon') && !e.target.closest('.mobile-menu-search')) {
// //           setShowSearch(false);
// //         }
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //     // Close desktop search when mobile menu opens
// //     if (!isMenuOpen) {
// //       setShowSearch(false);
// //     }
// //   };

// //   const toggleSearch = () => {
// //     setShowSearch(!showSearch);
// //   };

// //   const handleSearchSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle search functionality here
// //     console.log("Searching for:", searchQuery);
// //     // You can redirect to search page or filter results
// //   };

// //   return (
// //     <div className="relative">
// //       {/* Navbar */}
// //       <header className="w-full flex items-center justify-between px-6 py-4">
// //         {/* Logo */}
// //         <div className="flex items-center gap-2">
// //           <div className="flex flex-col items-center">
// //             <Link to="/">
// //               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
// //             </Link>
// //             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
// //               meonara
// //             </p>
// //           </div>
// //         </div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// //           <Link to="/">Home</Link>
// //           <Link to="/orderStatus">Order Status</Link>
// //           <Link to="/toReceive">To Receive</Link>
// //           <Link to="/received">Received</Link>
// //           <div className="relative">
// //             <Link to="/userCart" className="relative inline-block">
// //               Cart
// //               {cartLength > 0 && (
// //                 <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// //                   {cartLength}
// //                 </span>
// //               )}
// //             </Link>
// //           </div>
          
// //           {/* Search Icon on Desktop */}
// //           <button 
// //             onClick={toggleSearch} 
// //             className="search-icon p-2 text-[#cc7c5d] hover:text-[#a37733] transition-colors"
// //           >
// //             <FaSearch size={18} />
// //           </button>
// //         </nav>

// //         {/* Mobile Hamburger Button */}
// //         <button
// //           className="md:hidden text-[#cc7c5d] focus:outline-none"
// //           onClick={toggleMenu}
// //         >
// //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// //         </button>
// //       </header>

// //       {/* Desktop Search Box (Shows when search icon clicked) */}
// //       {showSearch && (
// //         <div 
// //           ref={searchBoxRef}
// //           className="hidden md:block absolute top-full w-full left-0 bg-white shadow-md px-6 py-3 z-40"
// //         >
// //           <form onSubmit={handleSearchSubmit} className="max-w-screen-md mx-auto flex items-center">
// //             <input
// //               ref={searchInputRef}
// //               type="text"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               placeholder="Search products..."
// //               className="search-input w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
// //             />
// //             <button 
// //               type="submit"
// //               className="bg-[#cc7c5d] text-white px-4 py-2 rounded-r-md hover:bg-[#a37733] transition-colors"
// //             >
// //               <FaSearch size={18} />
// //             </button>
// //           </form>
// //         </div>
// //       )}

// //       {/* Mobile Menu with integrated search */}
// //       {isMenuOpen && (
// //         <div 
// //           ref={menuRef}
// //           className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg"
// //         >
// //           {/* Search Box at the top of mobile menu */}
// //           <form 
// //             onSubmit={handleSearchSubmit} 
// //             className="mobile-menu-search px-4 py-3 border-b border-gray-200"
// //           >
// //             <div className="relative">
// //               <input
// //                 ref={searchInputRef}
// //                 type="text"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 placeholder="Search products..."
// //                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
// //               />
// //               <FaSearch 
// //                 className="absolute left-3 top-3 text-gray-400"
// //                 size={16}
// //               />
// //             </div>
// //           </form>

// //           {/* Menu Items */}
// //           <nav className="flex flex-col py-3 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
// //             <Link to="/" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Home</Link>
// //             <Link to="/orderStatus" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Order Status</Link>
// //             <Link to="/toReceive" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">To Receive</Link>
// //             <Link to="/received" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Received</Link>
// //             <Link to="/userCart" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100 flex items-center">
// //               Cart
// //               {cartLength > 0 && (
// //                 <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
// //                   {cartLength}
// //                 </span>
// //               )}
// //             </Link>
// //           </nav>
// //         </div>
// //       )}

// //       <hr className="border-b mt-3 border-[#a8a297]" />
// //     </div>
// //   );
// // };

// // export default UserNav;




















// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import '@fontsource/prata';
// import '../index.css';
// import supabase from "../supabaseClient";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaSearch } from "react-icons/fa";

// const UserNav = () => {
//   const [cartLength, setCartLength] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const menuRef = useRef();
//   const searchInputRef = useRef();
//   const searchBoxRef = useRef();

//   useEffect(() => {
//     const fetchCartLength = async () => {
//       const { data, error } = await supabase.from("cart").select("*");
//       if (!error && data) {
//         setCartLength(data.length);
//       }
//     };

//     fetchCartLength();
//   }, []);

//   // Focus search input when mobile menu opens or desktop search appears
//   useEffect(() => {
//     if (searchInputRef.current) {
//       if (isMenuOpen || showSearch) {
//         setTimeout(() => {
//           searchInputRef.current.focus();
//         }, 100);
//       }
//     }
//   }, [isMenuOpen, showSearch]);

//   // Close search when clicking outside (desktop)
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
//         if (!e.target.closest('.search-icon') && !e.target.closest('.mobile-menu-search')) {
//           setShowSearch(false);
//         }
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     // Close desktop search when mobile menu opens
//     if (!isMenuOpen) {
//       setShowSearch(false);
//     }
//   };

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Handle search functionality here
//     console.log("Searching for:", searchQuery);
//     // You can redirect to search page or filter results
//   };

//   return (
//     <div className="relative">
//       {/* Navbar */}
//       <header className="w-full flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="flex flex-col items-center">
//             <Link to="/">
//               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
//             </Link>
//             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
//               meonara
//             </p>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
//           <Link to="/">Home</Link>
//           <Link to="/orderStatus">Order Status</Link>
//           <Link to="/toReceive">To Receive</Link>
//           <Link to="/received">Received</Link>
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
          
//           {/* Search Icon on Desktop */}
//           <button 
//             onClick={toggleSearch} 
//             className="search-icon p-2 text-[#cc7c5d] hover:text-[#a37733] transition-colors"
//           >
//             <FaSearch size={18} />
//           </button>
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <button
//           className="md:hidden text-[#cc7c5d] focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </header>

//       {/* Desktop Search Box (Shows when search icon clicked) */}
//       {showSearch && (
//         <div 
//           ref={searchBoxRef}
//           className="hidden md:block absolute top-full w-full left-0 bg-white shadow-md px-6 py-3 z-40"
//         >
//           <form onSubmit={handleSearchSubmit} className="max-w-screen-md mx-auto flex items-center">
//             <input
//               ref={searchInputRef}
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search products..."
//               className="search-input w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
//             />
//             <button 
//               type="submit"
//               className="bg-[#cc7c5d] text-white px-4 py-2 rounded-r-md hover:bg-[#a37733] transition-colors"
//             >
//               <FaSearch size={18} />
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Mobile Menu with integrated search */}
//       {isMenuOpen && (
//         <div 
//           ref={menuRef}
//           className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg"
//         >
//           {/* Search Box at the top of mobile menu */}
//           <form 
//             onSubmit={handleSearchSubmit} 
//             className="mobile-menu-search px-4 py-3 border-b border-gray-200"
//           >
//             <div className="relative">
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search products..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
//               />
//               <FaSearch 
//                 className="absolute left-3 top-3 text-gray-400"
//                 size={16}
//               />
//             </div>
//           </form>

//           {/* Menu Items */}
//           <nav className="flex flex-col py-3 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
//             <Link to="/" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Home</Link>
//             <Link to="/orderStatus" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Order Status</Link>
//             <Link to="/toReceive" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">To Receive</Link>
//             <Link to="/received" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Received</Link>
//             <Link to="/userCart" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100 flex items-center">
//               Cart
//               {cartLength > 0 && (
//                 <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                   {cartLength}
//                 </span>
//               )}
//             </Link>
//           </nav>
//         </div>
//       )}

//       <hr className="border-b mt-3 border-[#a8a297]" />
//     </div>
//   );
// };

// export default UserNav;












import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '@fontsource/prata';
import '../index.css';
import supabase from "../supabaseClient";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const UserNav = () => {
  const [cartLength, setCartLength] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuRef = useRef();
  const searchInputRef = useRef();
  const searchBoxRef = useRef();

  useEffect(() => {
    const fetchCartLength = async () => {
      const { data, error } = await supabase.from("cart").select("*");
      if (!error && data) {
        setCartLength(data.length);
      }
    };

    fetchCartLength();
  }, []);

  // Focus search input when mobile menu opens or desktop search appears
  useEffect(() => {
    if (searchInputRef.current) {
      if (isMenuOpen || showSearch) {
        setTimeout(() => {
          searchInputRef.current.focus();
        }, 100);
      }
    }
  }, [isMenuOpen, showSearch]);

  // Close search when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        if (!e.target.closest('.search-icon') && !e.target.closest('.mobile-menu-search')) {
          setShowSearch(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close desktop search when mobile menu opens
    if (!isMenuOpen) {
      setShowSearch(false);
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
    // You can redirect to search page or filter results
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <Link to="/">
              <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
            </Link>
            <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
              Meonara
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest mt-14 uppercase">
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
          
          {/* Search Icon on Desktop */}
          <button 
            onClick={toggleSearch} 
            className="search-icon p-2 text-[#cc7c5d] hover:text-[#a37733] transition-colors"
          >
            <FaSearch size={18} />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#cc7c5d] focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Desktop Search Box (Shows when search icon clicked) */}
      {showSearch && (
        <div 
          ref={searchBoxRef}
          className="hidden md:block absolute top-full w-full left-0 bg-white shadow-md px-6 py-3 z-40"
        >
          <form onSubmit={handleSearchSubmit} className="max-w-screen-md mx-auto flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="search-input w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
            />
            <button 
              type="submit"
              className="bg-[#cc7c5d] text-white px-4 py-3 rounded-r-md hover:bg-[#a37733] transition-colors"
            >
              <FaSearch size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu with integrated search */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="md:hidden bg-white w-full absolute left-0 z-50 shadow-lg"
        >
          {/* Search Box at the top of mobile menu */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="mobile-menu-search px-4 py-3 border-b border-gray-200"
          >
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery & searchTerm}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
                />
              </div>
              <button 
                type="submit"
                className="bg-[#cc7c5d] text-white px-4 py-2 rounded-r-md hover:bg-[#a37733] transition-colors"
              >
                <FaSearch size={18} />
              </button>
            </div>
          </form>

          {/* Menu Items */}
          <nav className="flex flex-col py-3 text-base text-[#cc7c5d] font-semibold tracking-widest uppercase">
            <Link to="/" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Home</Link>
            <Link to="/orderStatus" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Order Status</Link>
            <Link to="/toReceive" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">To Receive</Link>
            <Link to="/received" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100">Received</Link>
            <Link to="/userCart" onClick={toggleMenu} className="px-4 py-3 hover:bg-gray-100 flex items-center">
              Cart
              {cartLength > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartLength}
                </span>
              )}
            </Link>
          </nav>
        </div>
      )}

      <hr className="border-b mt-3 border-[#a8a297]" />
    </div>
  );
};

export default UserNav;