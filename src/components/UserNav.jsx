






// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import '@fontsource/prata';
// import '../index.css';
// import supabase from "../supabaseClient";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaSearch } from "react-icons/fa";

// const UserNav = () => {
//   const [cartLength, setCartLength] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");

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
//       <header className="w-full flex items-center justify-between px-6 ">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="flex flex-col items-center">
//             <Link to="/">
//               <img src="/images/mainLogo.png" alt="Taboo Logo" className="w-17" />
//             </Link>
//             <p className="text-xl font-semibold bg-[#a37733] text-transparent bg-clip-text">
//               Meonara
//             </p>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8 text-base text-[#cc7c5d] font-semibold tracking-widest mt-14 uppercase">
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
//               className="bg-[#cc7c5d] text-white px-4 py-3 rounded-r-md hover:bg-[#a37733] transition-colors"
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
//             <div className="flex">
//               <div className="relative flex-grow">
//                 <input
//                   ref={searchInputRef}
//                   type="text"
//                   value={searchQuery & searchTerm}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cc7c5d]"
//                 />
//               </div>
//               <button 
//                 type="submit"
//                 className="bg-[#cc7c5d] text-white px-4 py-2 rounded-r-md hover:bg-[#a37733] transition-colors"
//               >
//                 <FaSearch size={18} />
//               </button>
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
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch, FaHeart, FaUserCircle } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import BelowNavbar from "./BelowNav";

const UserNav = () => {
  const [cartLength, setCartLength] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null); // You can provide user logic here
  const navigate = useNavigate();

  const menuRef = useRef();
  const searchInputRef = useRef();
  const accountRef = useRef();

  // Fetch cart length
  useEffect(() => {
    const fetchCartLength = async () => {
      const { data, error } = await supabase.from("cart").select("*");
      if (!error && data) setCartLength(data.length);
    };
    fetchCartLength();
  }, []);

  // Close account dropdown on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setShowAccount(false);
      }
    };
    if (showAccount) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showAccount]);

  // Close search bar on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.parentElement.contains(e.target)
      ) {
        setShowSearch(false);
      }
    };
    if (showSearch) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showSearch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full shadow z-30 relative bg-white">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-[180px]">
          <span className="inline-block">
            <svg width="45" height="44" viewBox="0 0 45 44" fill="none">
              <rect x="0.218" y="0.286" width="44" height="43.48" rx="21.74" fill="#DD346C" />
              <path d="M11.7262 15.3031H19.1765L22.2034 11.0781H7.25598V32.9737H11.7262V24.3868H20.028L17.1898 20.3417H11.7262V15.3031Z" fill="white" />
              <path d="M27.1816 20.5852C23.9043 16.5412 22.3926 12.5258 21.9991 11.0781L18.9189 15.3166C20.4187 19.0189 23.5247 23.1721 24.8903 24.7859L25.0291 32.9737H29.4035V24.7859C33.6806 19.7166 36.37 13.6078 37.1801 11.1871H32.3891C30.3339 16.5981 28.0611 19.7071 27.1816 20.5852Z" fill="white" />
            </svg>
          </span>
          <span className="text-xl font-prata font-bold text-[#DD346C] tracking-wide">
            Forever<span className="font-extrabold text-[#383838]">yng</span>
          </span>
        </Link>

        {/* Search bar (desktop) */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 mx-8 max-w-lg"
        >
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products and brands"
            className="w-full px-5 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DD346C] text-base"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#DD346C] text-white rounded-r-full hover:bg-[#C02C5C]"
            aria-label="Submit search"
          >
            <FaSearch size={18} />
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Account Dropdown */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setShowAccount((v) => !v)}
              className="flex flex-col items-start px-2 group"
              aria-haspopup="true"
              aria-expanded={showAccount}
              aria-label="Account menu"
            >
              <span className="text-xs text-gray-500">Hello,</span>
              <span className="flex items-center gap-1 font-semibold text-[#383838] group-hover:text-[#DD346C]">
                <FaUserCircle size={19} className="inline-block" />
                {user ? user.name : "Sign in"}
              </span>
            </button>
            {/* Dropdown */}
            {showAccount && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-50 animate-fade-in">
                {!user ? (
                  <div className="p-4 flex flex-col gap-2">
                    <Link to="/auth" className="font-semibold text-[#DD346C] hover:underline">Sign In</Link>
                    <span className="text-xs text-gray-500">
                      New to Foreveryng?{" "}
                      <Link to="/auth/register" className="text-[#DD346C] hover:underline">Register Here</Link>
                    </span>
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="font-bold mb-2 text-[#383838]">Your Account</div>
                    <Link to="/profile" className="block py-1 hover:text-[#DD346C]">Your Profile</Link>
                    <Link to="/orders" className="block py-1 hover:text-[#DD346C]">Orders</Link>
                    <Link to="/profile/wishlist" className="block py-1 hover:text-[#DD346C]">Wishlists</Link>
                    <Link to="/reviews" className="block py-1 hover:text-[#DD346C]">Reviews</Link>
                    <button className="block py-1 text-left w-full text-[#DD346C] hover:underline">Log Out</button>
                    <div className="mt-3 border-t pt-2 text-xs text-gray-500">
                      <div className="font-bold">Your Lists</div>
                      <Link to="/profile/subscriptions" className="block hover:text-[#DD346C]">Subscriptions</Link>
                      <Link to="/profile/private-coupons" className="block hover:text-[#DD346C]">Your Coupons</Link>
                      <Link to="/profile/verify-number" className="block hover:text-[#DD346C]">Verify Number</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <Link
            to="/profile/wishlist"
            className="relative p-2 hover:text-[#DD346C]"
            aria-label="Wishlist"
          >
            <FaHeart size={21} />
          </Link>

          {/* Cart */}
          <Link
            to="/userCart"
            className="relative p-2 hover:text-[#DD346C]"
            aria-label="Cart"
          >
            <BsBag size={22} />
            {cartLength > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#DD346C] text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartLength}
              </span>
            )}
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden ml-1 text-[#383838]"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearch && (
        <form
          onSubmit={handleSearchSubmit}
          className="md:hidden flex px-4 pb-2 bg-white"
        >
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products and brands"
            className="w-full px-5 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DD346C] text-base"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#DD346C] text-white rounded-r-full hover:bg-[#C02C5C]"
            aria-label="Submit search"
          >
            <FaSearch size={18} />
          </button>
        </form>
      )}

      {/* Mobile slide-in menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-30"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            className="absolute right-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col gap-0 pt-4"
            onClick={e => e.stopPropagation()}
          >
            <form onSubmit={handleSearchSubmit} className="px-4 mb-2">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products and brands"
                className="w-full px-4 py-2 border border-gray-300 rounded-full mb-2"
                aria-label="Search products"
              />
            </form>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100 font-semibold text-[#DD346C]">Home</Link>
            <Link to="/orderStatus" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">Order Status</Link>
            <Link to="/toReceive" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">To Receive</Link>
            <Link to="/received" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">Received</Link>
            <Link to="/userCart" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100 flex items-center">
              <BsBag size={19} className="mr-2" />
              Cart
              {cartLength > 0 && (
                <span className="ml-2 bg-[#DD346C] text-white text-xs px-2 py-0.5 rounded-full">
                  {cartLength}
                </span>
              )}
            </Link>
            <Link to="/profile/wishlist" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100 flex items-center">
              <FaHeart size={17} className="mr-2" />
              Wishlist
            </Link>
            <div className="border-t my-2" />
            {/* Account links */}
            {!user ? (
              <>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">Sign In</Link>
                <Link to="/auth/register" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">Register</Link>
              </>
            ) : (
              <>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">Your Profile</Link>
                <Link to="/orders" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">Orders</Link>
                <Link to="/reviews" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 hover:bg-gray-100">Reviews</Link>
                <button className="px-6 py-3 text-left hover:bg-gray-100 w-full">Log Out</button>
              </>
            )}
          </nav>
         
        </div>
      )} <BelowNavbar/>

      <hr className="border-b mt-3 border-[#a8a297]" />
    </header>
  );
};

export default UserNav;



















