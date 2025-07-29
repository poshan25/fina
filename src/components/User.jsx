// // // // // import { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import supabase from "../supabaseClient";

// // // // // const User = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       const { data, error } = await supabase.from("products").select("*");

// // // // //       if (error) {
// // // // //         console.error("Error fetching products:", error);
// // // // //       } else {
// // // // //         setProducts(data);
// // // // //       }
// // // // //       setLoading(false);
// // // // //     };

// // // // //     fetchProducts();
// // // // //   }, []);

// // // // //   async function addToCart(productId) {
// // // // //     const { error } = await supabase
// // // // //       .from("cart")
// // // // //       .insert([{ product_id: productId }]);

// // // // //     if (error) {
// // // // //       alert("Failed to add to cart");
// // // // //       console.error(error);
// // // // //     } else {
// // // // //       alert("Product added to cart!");
// // // // //     }
// // // // //   }

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]">
// // // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen mt-[-50px] bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 lg:px-38 pb-20">
// // // // //       <div className="max-w-7xl mx-auto">
// // // // //         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800 pt-20 sm:pt-30">
// // // // //           New Products
// // // // //         </h1>

// // // // //         {/* Mobile Layout - 2 columns */}
// // // // //         <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
// // // // //           {products.map((product) => (
// // // // //             <div
// // // // //               key={product.id}
// // // // //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
// // // // //             >
// // // // //               <img
// // // // //                 src={product.image_url}
// // // // //                 alt={product.name}
// // // // //                 className="w-full h-40 object-cover"
// // // // //               />

// // // // //               <div className="p-3">
// // // // //                 <h2 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">
// // // // //                   {product.name}
// // // // //                 </h2>
// // // // //                 <p className="text-xs font-semibold text-green-600 mb-2">
// // // // //                   Rs. {product.price}
// // // // //                 </p>
// // // // //                 <p className="text-xs text-gray-600 mb-3 line-clamp-2">
// // // // //                   {product.description}
// // // // //                 </p>

// // // // //                 <div className="flex flex-col gap-2">
// // // // //                   <button
// // // // //                     onClick={() => navigate(`/order/${product.id}`)}
// // // // //                     className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-1.5 px-2 rounded text-xs"
// // // // //                   >
// // // // //                     Buy Now
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => addToCart(product.id)}
// // // // //                     className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-1.5 px-2 rounded text-xs"
// // // // //                   >
// // // // //                     Add to Cart
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Desktop Layout */}
// // // // //         <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
// // // // //           {products.map((product) => (
// // // // //             <div
// // // // //               key={product.id}
// // // // //               className="bg-[#f9f3ef] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// // // // //             >
// // // // //               <img
// // // // //                 src={product.image_url}
// // // // //                 alt={product.name}
// // // // //                 className="w-full h-48 sm:h-56 md:h-64 object-cover"
// // // // //               />

// // // // //               <div className="p-4 sm:p-6">
// // // // //                 <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
// // // // //                   {product.name}
// // // // //                 </h2>
// // // // //                 <p className="text-base sm:text-lg font-semibold text-green-600 mb-3">
// // // // //                   Rs. {product.price}
// // // // //                 </p>
// // // // //                 <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2">
// // // // //                   {product.description}
// // // // //                 </p>

// // // // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
// // // // //                   <button
// // // // //                     onClick={() => navigate(`/order/${product.id}`)}
// // // // //                     className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
// // // // //                   >
// // // // //                     Buy Now
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={() => addToCart(product.id)}
// // // // //                     className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
// // // // //                   >
// // // // //                     Add to Cart
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default User;

// // // // import { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import supabase from "../supabaseClient";

// // // // const User = () => {
// // // //   const navigate = useNavigate();
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       const { data, error } = await supabase.from("products").select("*");
// // // //       if (error) {
// // // //         console.error("Error fetching products:", error);
// // // //       } else {
// // // //         setProducts(data);
// // // //       }
// // // //       setLoading(false);
// // // //     };
// // // //     fetchProducts();
// // // //   }, []);

// // // //   async function addToCart(productId) {
// // // //     const { error } = await supabase
// // // //       .from("cart")
// // // //       .insert([{ product_id: productId }]);
// // // //     if (error) {
// // // //       alert("Failed to add to cart");
// // // //       console.error(error);
// // // //     } else {
// // // //       alert("Product added to cart!");
// // // //     }
// // // //   }

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]">
// // // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 pt-20">
// // // //           New Products
// // // //         </h1>

// // // //         {/* Mobile Layout */}
// // // //         <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
// // // //           {products.map((product) => (
// // // //             <div
// // // //               key={product.id}
// // // //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
// // // //             >
// // // //               <img
// // // //                 src={product.image_url}
// // // //                 alt={product.name}
// // // //                 className="w-full h-48 object-cover"
// // // //               />
// // // //               <div className="p-2">
// // // //                 <h2 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2">
// // // //                   {product.name}
// // // //                 </h2>
// // // //                 <p className="text-xs font-medium text-green-600 mb-1">
// // // //                   Rs. {product.price}
// // // //                 </p>
// // // //                 <p className="text-[10px] text-gray-600 mb-2 line-clamp-2">
// // // //                   {product.description}
// // // //                 </p>
// // // //                 <div className="flex flex-col gap-1">
// // // //                   <button
// // // //                     onClick={() => navigate(`/order/${product.id}`)}
// // // //                     className="w-full bg-green-500 hover:bg-green-600 text-white text-[10px] font-medium py-1 rounded"
// // // //                   >
// // // //                     Buy Now
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => addToCart(product.id)}
// // // //                     className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-[10px] font-normal py-1 rounded"
// // // //                   >
// // // //                     Add to Cart
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Desktop Layout */}
// // // //         <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
// // // //           {products.map((product) => (
// // // //             <div
// // // //               key={product.id}
// // // //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// // // //             >
// // // //               <img
// // // //                 src={product.image_url}
// // // //                 alt={product.name}
// // // //                 className="w-full h-64 object-cover"
// // // //               />
// // // //               <div className="p-4">
// // // //                 <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
// // // //                   {product.name}
// // // //                 </h2>
// // // //                 <p className="text-sm font-medium text-green-600 mb-2">
// // // //                   Rs. {product.price}
// // // //                 </p>
// // // //                 <p className="text-xs text-gray-600 mb-3 line-clamp-2">
// // // //                   {product.description}
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-2">
// // // //                   <button
// // // //                     onClick={() => navigate(`/order/${product.id}`)}
// // // //                     className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-1 rounded-md"
// // // //                   >
// // // //                     Buy Now
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => addToCart(product.id)}
// // // //                     className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 rounded-md"
// // // //                   >
// // // //                     Add to Cart
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default User;

// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import supabase from "../supabaseClient";
// // // import { FaSearch } from "react-icons/fa";

// // // const User = () => {
// // //   const navigate = useNavigate();
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // // const [searchTerm, setSearchTerm] = useState("");

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       const { data, error } = await supabase.from("products").select("*");
// // //       if (error) {
// // //         console.error("Error fetching products:", error);
// // //       } else {
// // //         setProducts(data);
// // //       }
// // //       setLoading(false);
// // //     };
// // //     fetchProducts();
// // //   }, []);

// // //   const filteredProducts = products.filter((product) =>
// // //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // );

// // //   async function addToCart(productId) {
// // //     const { error } = await supabase
// // //       .from("cart")
// // //       .insert([{ product_id: productId }]);
// // //     if (error) {
// // //       alert("Failed to add to cart");
// // //       console.error(error);
// // //     } else {
// // //       alert("Product added to cart!");
// // //     }
// // //   }

// // //   if (loading) {
// // //     return (
// // //       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]">
// // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="flex flex-col md:flex-row justify-between items-center p-6">
// // //           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
// // //             New Products
// // //           </h1>

// // //           <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
// // //             <input
// // //               type="text"
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               placeholder="Search..."
// // //               className="outline-none px-4 py-2 w-48 sm:w-64"
// // //             />
// // //             <button className=" p-2 cursor-pointer transition">
// // //               <FaSearch className="text-gray-700 text-xl" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //         {/* Mobile Layout */}
// // //         <div className=" sm:hidden grid grid-cols-2 gap-3 mb-6">
// // //           {products.map((product) => (
// // //             <div
// // //               key={product.id}
// // //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
// // //             >
// // //               <img
// // //                 src={product.image_url}
// // //                 alt={product.name}
// // //                 className="w-full h-48 object-cover"
// // //               />
// // //               <div className="p-2">
// // //                 <h2 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2">
// // //                   {product.name}
// // //                 </h2>
// // //                 <p className="text-xs font-medium text-green-600 mb-1">
// // //                   Rs. {product.price}
// // //                 </p>
// // //                 <p className="text-[10px] text-gray-600 mb-2 line-clamp-2">
// // //                   {product.description}
// // //                 </p>
// // //                 <div className="flex flex-col gap-1">
// // //                   <button
// // //                     onClick={() => navigate(`/order/${product.id}`)}
// // //                     className="w-full bg-green-500 hover:bg-green-600 text-white text-[10px] font-medium py-1 rounded"
// // //                   >
// // //                     Buy Now
// // //                   </button>
// // //                   <button
// // //                     onClick={() => addToCart(product.id)}
// // //                     className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-[10px] font-normal py-1 rounded"
// // //                   >
// // //                     Add to Cart
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Desktop & Tablet Layout */}
// // //         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //           {/* {products.map((product) => ( */}
// // //               {filteredProducts.map((product) => (

// // //             <div

// // //               key={product.id}
// // //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// // //             >
// // //               <img
// // //                 onClick={() => navigate(`/order/${product.id}`)}
// // //                 src={product.image_url}
// // //                 alt={product.name}
// // //                 className="w-full h-52 cursor-pointer sm:h-60 md:h-64 lg:h-72 object-cover"
// // //               />
// // //               <div className="p-4">
// // //                 <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
// // //                   {product.name}
// // //                 </h2>
// // //                 <p className="text-sm font-medium text-green-600 mb-2">
// // //                   Rs. {product.price}
// // //                 </p>
// // //                 <p
// // //                   onClick={() => navigate(`/order/${product.id}`)}
// // //                   className="text-xs cursor-pointer text-gray-600 mb-3 line-clamp-2"
// // //                 >
// // //                   {product.description}
// // //                 </p>
// // //                 <div className="flex justify-center flex-col sm:flex-row gap-2">
// // //                   <button
// // //                     onClick={() => navigate(`/order/${product.id}`)}
// // //                     className=" px-4 cursor-pointer bg-green-500 hover:bg-green-600 text-white text-sm  rounded-md"
// // //                   >
// // //                     Buy Now
// // //                   </button>
// // //                   <button
// // //                     onClick={() => addToCart(product.id)}
// // //                     className="px-4 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 rounded-md"
// // //                   >
// // //                     Add to Cart
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default User;







































// // ...................................................................

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient";
// import { FaSearch } from "react-icons/fa";

// const User = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from("products").select("*");
//       if (error) {
//         console.error("Error fetching products:", error);
//       } else {
//         setProducts(data);
//       }
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   async function addToCart(productId) {
//     const { error } = await supabase
//       .from("cart")
//       .insert([{ product_id: productId }]);
//     if (error) {
//       alert("Failed to add to cart");
//       console.error(error);
//     } else {
//       alert("Product added to cart!");
//     }
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] mx-auto to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
//       <div className=" mx-auto">
//         <div className="flex mx-auto flex-col md:flex-row justify-between items-center p-6">
//           {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
//             New Products
//           </h1> */}



//           {/* search items to be implemented in nav */}

//           {/* <div className="flex items-center  bg-white rounded-md shadow-md overflow-hidden">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search..."
//               className="outline-none px-4 py-2 w-48 sm:w-64"
//             />
//             <button className="p-2 cursor-pointer transition">
//               <FaSearch className="text-gray-700 text-xl" />
//             </button>
//           </div>
//         </div> */}

// {/* /////////////////////////////////////<=*/}


// </div>






//         {/* Single unified grid layout */}
//         <div className="flex justify-center">
//           <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-6">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-[#f9f3ef] w-60 rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
//               >
//                 <img
//                   onClick={() => navigate(`/order/${product.id}`)}
//                   src={product.image_url}
//                   alt={product.name}
//                   className="w-full h-52 cursor-pointer sm:h-60 md:h-45 lg:h-50 object-contain"
//                 />

                
//                 <div className="p-4">

// {/* 3. Rating */}
//           <div className="product_block_new_rating text-gray-700  py-1 rounded flex items-center gap-1">
//             <span className="text-xs">0</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="16"
//               viewBox="0 0 17 16"
//               fill="#515151"
//             >
//               <path d="M8.0793 13.4436C8.38573 13.2694 8.76124 13.2694 9.06767 13.4436L12.4196 15.349C13.1834 15.7832 14.0957 15.092 13.8845 14.2392L13.0388 10.8248C12.9458 10.4494 13.0776 10.0541 13.3773 9.80957L16.1451 7.5513C16.8434 6.98157 16.4909 5.85144 15.5925 5.77966L11.8325 5.47921C11.4689 5.45016 11.15 5.22541 11.0003 4.89276L9.4854 1.52645C9.13162 0.740274 8.01535 0.740274 7.66157 1.52645L6.1467 4.89276C5.997 5.22541 5.67805 5.45016 5.31443 5.47921L1.55443 5.77966C0.656085 5.85144 0.303623 6.98157 1.0019 7.5513L3.76971 9.80957C4.06937 10.0541 4.20118 10.4494 4.1082 10.8248L3.26248 14.2392C3.05124 15.092 3.96354 15.7832 4.72733 15.349L8.0793 13.4436Z" />
//             </svg>
//             <strong className="text-xs">/5 (0)</strong>
//           </div>


//                   <div className="sales_tags_prod_block text-sm text-pink-500 py-1 rounded font-bold inline-block mb-2">
//                     20% off
//                   </div>

//                   <h2 className="text-base font-semibold text-[#364153] mb-1 truncate">
//                     {product.name}
//                   </h2>

//                   {/* <p className="text-sm font-medium text-green-600 mb-2">
//                   Rs. {product.price}
//                 </p> */}
//                   <div className="price_product_block flex items-center gap-2 mb-1">
//                     <span className="discounted_price mt-2 font-bold text-gray-600">
//                       Rs. {product.price}
//                     </span>
//                     <span className="main_price text-sm text-gray-500 line-through">
//                       Rs. {(product.price * 1.2).toFixed(2)}
//                     </span>
//                   </div>

//                   {/* more offer inside */}

//                   <div className="offers_validations text-pink-600 flex items-center gap-1 text-xs font-semibold mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="23"
//                       height="22"
//                       viewBox="0 0 23 22"
//                       fill="none"
//                     >
//                       <path
//                         d="M20.6135 8.93064L20.6134 8.93073L20.6213 8.938C20.8833 9.17931 21.1307 9.4368 21.3861 9.70673C21.4175 9.73993 21.4491 9.77337 21.4809 9.807C21.7032 10.0424 21.934 10.2867 22.1762 10.5225C22.3935 10.7405 22.4371 10.8804 22.4397 10.9555C22.442 11.0211 22.4172 11.1521 22.203 11.3662C22.0799 11.4894 21.9578 11.6279 21.8497 11.7507C21.8074 11.7987 21.7672 11.8443 21.73 11.8856C21.5858 12.0454 21.4583 12.1731 21.321 12.2719L21.3194 12.2731C20.7079 12.7171 20.3392 13.2455 20.1757 13.861C20.0166 14.4598 20.0642 15.0952 20.1942 15.7377L20.1945 15.739C20.3123 16.3133 20.3893 16.713 20.4131 17.0094C20.4375 17.3126 20.3949 17.4029 20.3778 17.4284C20.3663 17.4456 20.3155 17.5107 20.0496 17.579C19.7846 17.6472 19.4061 17.6949 18.8474 17.7538C18.0764 17.8325 17.4352 18.0384 16.9005 18.4329C16.3673 18.8262 15.9841 19.3745 15.6721 20.0608C15.4444 20.5565 15.2816 20.8939 15.1357 21.1226C14.9879 21.3543 14.9088 21.3898 14.8866 21.3971C14.8656 21.4039 14.7833 21.4224 14.5318 21.3224C14.2828 21.2234 13.9573 21.0462 13.4873 20.7782C12.8026 20.3847 12.1455 20.1739 11.4649 20.1804C10.7858 20.1869 10.1358 20.4094 9.46417 20.792L9.46363 20.7923C9.00092 21.0567 8.67937 21.2316 8.43339 21.3296C8.18447 21.4287 8.10264 21.411 8.08304 21.4048C8.06509 21.3991 7.99042 21.3688 7.84942 21.1475C7.70952 20.928 7.55405 20.6024 7.33736 20.1213L7.33647 20.1193C7.01896 19.4223 6.63394 18.8563 6.09496 18.4477C5.55293 18.0368 4.8992 17.8183 4.10234 17.7392C3.54491 17.6805 3.1661 17.6318 2.90106 17.5635C2.63393 17.4946 2.58176 17.4293 2.57041 17.4126C2.55523 17.3904 2.51296 17.3064 2.53707 17.0143C2.56071 16.7281 2.63723 16.3422 2.755 15.7864C2.91296 15.0514 2.91402 14.3908 2.70786 13.7701C2.50219 13.1509 2.10683 12.6214 1.55838 12.12L1.55766 12.1193C1.1467 11.7451 0.868747 11.4808 0.691602 11.2668C0.512369 11.0502 0.500127 10.9586 0.5 10.9302C0.499881 10.9035 0.509696 10.8154 0.685131 10.6042C0.859267 10.3945 1.13363 10.1361 1.54115 9.76901L1.54233 9.76794C2.12688 9.23795 2.5561 8.66494 2.76005 8.00483C2.96292 7.34821 2.92667 6.65838 2.67884 5.91923L2.67319 5.88224C2.59901 5.39633 2.54908 5.0617 2.53806 4.81114C2.52678 4.55466 2.5638 4.48836 2.57097 4.47763L2.57109 4.47746C2.57276 4.47494 2.5797 4.46446 2.60922 4.44733C2.64376 4.42728 2.70431 4.40117 2.80857 4.37413C3.0247 4.31808 3.3407 4.27898 3.82107 4.23498L3.82226 4.23487C4.73226 4.14931 5.50853 3.90357 6.13573 3.4305C6.76617 2.95498 7.20114 2.28365 7.48643 1.42779L7.48652 1.42782L7.48933 1.41882C7.50922 1.35516 7.54217 1.28737 7.59539 1.19545C7.60856 1.17269 7.62606 1.14353 7.64578 1.11068C7.68967 1.03756 7.74453 0.946144 7.78709 0.866356L7.78724 0.866438L7.79313 0.854669C7.91514 0.610637 8.0236 0.537891 8.08439 0.516348C8.13814 0.497304 8.26077 0.480684 8.50763 0.609726L8.50762 0.609748L8.51202 0.611995C8.82274 0.770525 9.11927 0.912015 9.40995 1.05071C9.83064 1.25145 10.2391 1.44633 10.6605 1.67857L10.6605 1.6786L10.6657 1.68139C10.9276 1.82168 11.2005 1.90219 11.492 1.89658C11.7807 1.89103 12.047 1.80177 12.2982 1.66737C12.7056 1.45121 13.0995 1.2607 13.5012 1.06641C13.8099 0.917119 14.1232 0.765597 14.4508 0.598487C14.6856 0.481452 14.8055 0.493719 14.8601 0.511476C14.9164 0.529783 15.0164 0.590738 15.1334 0.806933C15.2022 0.939253 15.2829 1.08027 15.3571 1.21003C15.3956 1.27732 15.4324 1.34157 15.4648 1.40002C15.5692 1.58782 15.654 1.75726 15.7123 1.92615L15.7128 1.92784C15.9535 2.61778 16.3154 3.18284 16.8442 3.56927C17.3748 3.95699 18.0237 4.1286 18.7709 4.12095C19.0675 4.12136 19.37 4.19446 19.7335 4.28229C19.8112 4.30107 19.8918 4.32053 19.9756 4.34009L19.9756 4.34012L19.9808 4.34127C20.2679 4.40507 20.3394 4.47589 20.3557 4.49672C20.3657 4.50957 20.4055 4.56613 20.3899 4.7893C20.354 5.06427 20.3242 5.32448 20.2955 5.57429C20.2285 6.15912 20.1681 6.68692 20.0511 7.21356L20.051 7.21355L20.0499 7.21902C19.9774 7.56326 19.9829 7.88334 20.0952 8.18914C20.2046 8.48725 20.3981 8.7235 20.6135 8.93064Z"
//                         stroke="#E8346C"
//                       />
//                       <path
//                         d="M16.0001 12.6052C16.0001 13.3422 15.3742 13.9397 14.6022 13.9397C13.8302 13.9397 13.2043 13.3422 13.2043 12.6052C13.2043 11.8681 13.8302 11.2706 14.6022 11.2706C15.3742 11.2706 16.0001 11.8681 16.0001 12.6052Z"
//                         fill="#E8346C"
//                       />
//                       <path
//                         d="M10.9677 8.33456C10.9677 9.07161 10.3419 9.66911 9.56987 9.66911C8.79785 9.66911 8.17201 9.07161 8.17201 8.33456C8.17201 7.5975 8.79785 7 9.56987 7C10.3419 7 10.9677 7.5975 10.9677 8.33456Z"
//                         fill="#E8346C"
//                       />
//                       <path
//                         d="M14.0255 7.54474C14.3661 7.24498 14.8967 7.26555 15.2107 7.59069C15.5247 7.91583 15.5031 8.42241 15.1626 8.72217L9.40729 13.788C9.06673 14.0877 8.53612 14.0672 8.22214 13.742C7.90817 13.4169 7.92971 12.9103 8.27027 12.6105L14.0255 7.54474Z"
//                         fill="#E8346C"
//                       />
//                     </svg>
//                     <span>More Offer Inside</span>
//                   </div>

//                   <p
//                     onClick={() => navigate(`/order/${product.id}`)}
//                     className="text-xs cursor-pointer text-gray-600 mb-3 truncate"
//                   >
//                     {product.description}
//                   </p>
//                   <div className="flex justify-between items-center flex-col sm:flex-row gap-2">
//                     <button
//                       onClick={() => navigate(`/order/${product.id}`)}
//                       // className="px-4 cursor-pointer bg-green-500 hover:bg-green-600 text-white text-sm rounded-md"

//                       className="addtocart_btn bg-pink-600 hover:bg-gray-500 text-white transition-all duration-300 text-sm font-medium px-4 py-2 rounded"
//                     >
//                       Add To Cart
//                     </button>

//                     <Link             className="wishlist-iconslist p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
//                     <svg

//                       width="24"
//                       height="23"
//                       viewBox="0 0 24 23"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M5.30306 2.67201C3.49591 3.54294 2.17241 5.61571 2.17241 8.08718C2.17241 10.6115 3.15278 12.5579 4.5558 14.2262C5.71373 15.6004 7.11457 16.7402 8.48056 17.8501C8.80517 18.1144 9.1276 18.3775 9.44459 18.6406C10.0176 19.1174 10.5284 19.5345 11.0219 19.839C11.5143 20.1423 11.9108 20.2813 12.2485 20.2813C12.5861 20.2813 12.9826 20.1435 13.475 19.839C13.9685 19.5345 14.4793 19.1174 15.0523 18.6406C15.3682 18.3763 15.6917 18.1144 16.0163 17.8501C17.3823 16.7402 18.7832 15.6004 19.9411 14.2262C21.3452 12.5579 22.3245 10.6115 22.3245 8.08718C22.3245 5.61686 21.001 3.54294 19.1938 2.67201C17.4379 1.82521 15.0785 2.04926 12.8367 4.50694C12.7605 4.59034 12.6691 4.65668 12.568 4.70199C12.467 4.7473 12.3583 4.77065 12.2485 4.77065C12.1386 4.77065 12.0299 4.7473 11.9289 4.70199C11.8278 4.65668 11.7364 4.59034 11.6602 4.50694C9.41844 2.04926 7.05902 1.82521 5.30306 2.67201ZM12.2485 2.71338C9.72999 0.33498 6.90978 0.00177479 4.62334 1.10365C2.21162 2.26987 0.538452 4.97228 0.538452 8.08832C0.538452 11.1504 1.74758 13.4874 3.33469 15.3717C4.60482 16.8804 6.15925 18.1431 7.53286 19.2576C7.8444 19.5104 8.14614 19.7563 8.43262 19.9952C8.99144 20.4594 9.59055 20.9535 10.1973 21.3281C10.804 21.7015 11.4968 22.006 12.2485 22.006C13.0001 22.006 13.6929 21.7015 14.2996 21.3281C14.9074 20.9535 15.5055 20.4594 16.0643 19.9952C16.3626 19.7473 16.6626 19.5014 16.964 19.2576C18.3366 18.1431 19.8921 16.8792 21.1622 15.3717C22.7493 13.4874 23.9585 11.1504 23.9585 8.08832C23.9585 4.97228 22.2864 2.26987 19.8736 1.10595C17.5871 0.00292405 14.7669 0.336129 12.2485 2.71338Z"
//                         fill="#E8346C"
//                       />
//                     </svg>
//                     </Link>

//                     {/* <button
//                     onClick={() => addToCart(product.id)}
//                     className="px-4 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 rounded-md"
//                   >
//                     Add to Cart
//                   </button> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;







// // ...........................................








// for showing both products from user-supabase and api

// fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
//   .then((res) => res.json())
//   .then((data) => console.log(data));


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { FaSearch } from "react-icons/fa";

const User = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((res) => res.json())
  .then((data) => console.log(data));
    // const fetchProducts = async () => {
    //   const { data, error } = await supabase.from("products").select("*");
    //   if (error) {
    //     console.error("Error fetching products:", error);
    //   } else {
    //     setProducts(data);
    //   }
    //   setLoading(false);
    // };
    // fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function addToCart(productId) {
    const { error } = await supabase
      .from("cart")
      .insert([{ product_id: productId }]);
    if (error) {
      alert("Failed to add to cart");
      console.error(error);
    } else {
      alert("Product added to cart!");
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] mx-auto to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
      <div className=" mx-auto">
        <div className="flex mx-auto flex-col md:flex-row justify-between items-center p-6">
          {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            New Products
          </h1> */}



          {/* search items to be implemented in nav */}

          {/* <div className="flex items-center  bg-white rounded-md shadow-md overflow-hidden">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="outline-none px-4 py-2 w-48 sm:w-64"
            />
            <button className="p-2 cursor-pointer transition">
              <FaSearch className="text-gray-700 text-xl" />
            </button>
          </div>
        </div> */}

{/* /////////////////////////////////////<=*/}


</div>






        {/* Single unified grid layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#f9f3ef] w-60 rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <img
                  onClick={() => navigate(`/order/${product.id}`)}
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-52 cursor-pointer sm:h-60 md:h-45 lg:h-50 object-contain"
                />

                
                <div className="p-4">

{/* 3. Rating */}
          <div className="product_block_new_rating text-gray-700  py-1 rounded flex items-center gap-1">
            <span className="text-xs">0</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 17 16"
              fill="#515151"
            >
              <path d="M8.0793 13.4436C8.38573 13.2694 8.76124 13.2694 9.06767 13.4436L12.4196 15.349C13.1834 15.7832 14.0957 15.092 13.8845 14.2392L13.0388 10.8248C12.9458 10.4494 13.0776 10.0541 13.3773 9.80957L16.1451 7.5513C16.8434 6.98157 16.4909 5.85144 15.5925 5.77966L11.8325 5.47921C11.4689 5.45016 11.15 5.22541 11.0003 4.89276L9.4854 1.52645C9.13162 0.740274 8.01535 0.740274 7.66157 1.52645L6.1467 4.89276C5.997 5.22541 5.67805 5.45016 5.31443 5.47921L1.55443 5.77966C0.656085 5.85144 0.303623 6.98157 1.0019 7.5513L3.76971 9.80957C4.06937 10.0541 4.20118 10.4494 4.1082 10.8248L3.26248 14.2392C3.05124 15.092 3.96354 15.7832 4.72733 15.349L8.0793 13.4436Z" />
            </svg>
            <strong className="text-xs">/5 (0)</strong>
          </div>


                  <div className="sales_tags_prod_block text-sm text-pink-500 py-1 rounded font-bold inline-block mb-2">
                    20% off
                  </div>

                  <h2 className="text-base font-semibold text-[#364153] mb-1 truncate">
                    {product.name}
                  </h2>

                  {/* <p className="text-sm font-medium text-green-600 mb-2">
                  Rs. {product.price}
                </p> */}
                  <div className="price_product_block flex items-center gap-2 mb-1">
                    <span className="discounted_price mt-2 font-bold text-gray-600">
                      Rs. {product.price}
                    </span>
                    <span className="main_price text-sm text-gray-500 line-through">
                      Rs. {(product.price * 1.2).toFixed(2)}
                    </span>
                  </div>

                  {/* more offer inside */}

                  <div className="offers_validations text-pink-600 flex items-center gap-1 text-xs font-semibold mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                    >
                      <path
                        d="M20.6135 8.93064L20.6134 8.93073L20.6213 8.938C20.8833 9.17931 21.1307 9.4368 21.3861 9.70673C21.4175 9.73993 21.4491 9.77337 21.4809 9.807C21.7032 10.0424 21.934 10.2867 22.1762 10.5225C22.3935 10.7405 22.4371 10.8804 22.4397 10.9555C22.442 11.0211 22.4172 11.1521 22.203 11.3662C22.0799 11.4894 21.9578 11.6279 21.8497 11.7507C21.8074 11.7987 21.7672 11.8443 21.73 11.8856C21.5858 12.0454 21.4583 12.1731 21.321 12.2719L21.3194 12.2731C20.7079 12.7171 20.3392 13.2455 20.1757 13.861C20.0166 14.4598 20.0642 15.0952 20.1942 15.7377L20.1945 15.739C20.3123 16.3133 20.3893 16.713 20.4131 17.0094C20.4375 17.3126 20.3949 17.4029 20.3778 17.4284C20.3663 17.4456 20.3155 17.5107 20.0496 17.579C19.7846 17.6472 19.4061 17.6949 18.8474 17.7538C18.0764 17.8325 17.4352 18.0384 16.9005 18.4329C16.3673 18.8262 15.9841 19.3745 15.6721 20.0608C15.4444 20.5565 15.2816 20.8939 15.1357 21.1226C14.9879 21.3543 14.9088 21.3898 14.8866 21.3971C14.8656 21.4039 14.7833 21.4224 14.5318 21.3224C14.2828 21.2234 13.9573 21.0462 13.4873 20.7782C12.8026 20.3847 12.1455 20.1739 11.4649 20.1804C10.7858 20.1869 10.1358 20.4094 9.46417 20.792L9.46363 20.7923C9.00092 21.0567 8.67937 21.2316 8.43339 21.3296C8.18447 21.4287 8.10264 21.411 8.08304 21.4048C8.06509 21.3991 7.99042 21.3688 7.84942 21.1475C7.70952 20.928 7.55405 20.6024 7.33736 20.1213L7.33647 20.1193C7.01896 19.4223 6.63394 18.8563 6.09496 18.4477C5.55293 18.0368 4.8992 17.8183 4.10234 17.7392C3.54491 17.6805 3.1661 17.6318 2.90106 17.5635C2.63393 17.4946 2.58176 17.4293 2.57041 17.4126C2.55523 17.3904 2.51296 17.3064 2.53707 17.0143C2.56071 16.7281 2.63723 16.3422 2.755 15.7864C2.91296 15.0514 2.91402 14.3908 2.70786 13.7701C2.50219 13.1509 2.10683 12.6214 1.55838 12.12L1.55766 12.1193C1.1467 11.7451 0.868747 11.4808 0.691602 11.2668C0.512369 11.0502 0.500127 10.9586 0.5 10.9302C0.499881 10.9035 0.509696 10.8154 0.685131 10.6042C0.859267 10.3945 1.13363 10.1361 1.54115 9.76901L1.54233 9.76794C2.12688 9.23795 2.5561 8.66494 2.76005 8.00483C2.96292 7.34821 2.92667 6.65838 2.67884 5.91923L2.67319 5.88224C2.59901 5.39633 2.54908 5.0617 2.53806 4.81114C2.52678 4.55466 2.5638 4.48836 2.57097 4.47763L2.57109 4.47746C2.57276 4.47494 2.5797 4.46446 2.60922 4.44733C2.64376 4.42728 2.70431 4.40117 2.80857 4.37413C3.0247 4.31808 3.3407 4.27898 3.82107 4.23498L3.82226 4.23487C4.73226 4.14931 5.50853 3.90357 6.13573 3.4305C6.76617 2.95498 7.20114 2.28365 7.48643 1.42779L7.48652 1.42782L7.48933 1.41882C7.50922 1.35516 7.54217 1.28737 7.59539 1.19545C7.60856 1.17269 7.62606 1.14353 7.64578 1.11068C7.68967 1.03756 7.74453 0.946144 7.78709 0.866356L7.78724 0.866438L7.79313 0.854669C7.91514 0.610637 8.0236 0.537891 8.08439 0.516348C8.13814 0.497304 8.26077 0.480684 8.50763 0.609726L8.50762 0.609748L8.51202 0.611995C8.82274 0.770525 9.11927 0.912015 9.40995 1.05071C9.83064 1.25145 10.2391 1.44633 10.6605 1.67857L10.6605 1.6786L10.6657 1.68139C10.9276 1.82168 11.2005 1.90219 11.492 1.89658C11.7807 1.89103 12.047 1.80177 12.2982 1.66737C12.7056 1.45121 13.0995 1.2607 13.5012 1.06641C13.8099 0.917119 14.1232 0.765597 14.4508 0.598487C14.6856 0.481452 14.8055 0.493719 14.8601 0.511476C14.9164 0.529783 15.0164 0.590738 15.1334 0.806933C15.2022 0.939253 15.2829 1.08027 15.3571 1.21003C15.3956 1.27732 15.4324 1.34157 15.4648 1.40002C15.5692 1.58782 15.654 1.75726 15.7123 1.92615L15.7128 1.92784C15.9535 2.61778 16.3154 3.18284 16.8442 3.56927C17.3748 3.95699 18.0237 4.1286 18.7709 4.12095C19.0675 4.12136 19.37 4.19446 19.7335 4.28229C19.8112 4.30107 19.8918 4.32053 19.9756 4.34009L19.9756 4.34012L19.9808 4.34127C20.2679 4.40507 20.3394 4.47589 20.3557 4.49672C20.3657 4.50957 20.4055 4.56613 20.3899 4.7893C20.354 5.06427 20.3242 5.32448 20.2955 5.57429C20.2285 6.15912 20.1681 6.68692 20.0511 7.21356L20.051 7.21355L20.0499 7.21902C19.9774 7.56326 19.9829 7.88334 20.0952 8.18914C20.2046 8.48725 20.3981 8.7235 20.6135 8.93064Z"
                        stroke="#E8346C"
                      />
                      <path
                        d="M16.0001 12.6052C16.0001 13.3422 15.3742 13.9397 14.6022 13.9397C13.8302 13.9397 13.2043 13.3422 13.2043 12.6052C13.2043 11.8681 13.8302 11.2706 14.6022 11.2706C15.3742 11.2706 16.0001 11.8681 16.0001 12.6052Z"
                        fill="#E8346C"
                      />
                      <path
                        d="M10.9677 8.33456C10.9677 9.07161 10.3419 9.66911 9.56987 9.66911C8.79785 9.66911 8.17201 9.07161 8.17201 8.33456C8.17201 7.5975 8.79785 7 9.56987 7C10.3419 7 10.9677 7.5975 10.9677 8.33456Z"
                        fill="#E8346C"
                      />
                      <path
                        d="M14.0255 7.54474C14.3661 7.24498 14.8967 7.26555 15.2107 7.59069C15.5247 7.91583 15.5031 8.42241 15.1626 8.72217L9.40729 13.788C9.06673 14.0877 8.53612 14.0672 8.22214 13.742C7.90817 13.4169 7.92971 12.9103 8.27027 12.6105L14.0255 7.54474Z"
                        fill="#E8346C"
                      />
                    </svg>
                    <span>More Offer Inside</span>
                  </div>

                  <p
                    onClick={() => navigate(`/order/${product.id}`)}
                    className="text-xs cursor-pointer text-gray-600 mb-3 truncate"
                  >
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => navigate(`/order/${product.id}`)}
                      // className="px-4 cursor-pointer bg-green-500 hover:bg-green-600 text-white text-sm rounded-md"

                      className="addtocart_btn bg-pink-600 hover:bg-gray-500 text-white transition-all duration-300 text-sm font-medium px-4 py-2 rounded"
                    >
                      Add To Cart
                    </button>

                    <Link             className="wishlist-iconslist p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                    <svg

                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.30306 2.67201C3.49591 3.54294 2.17241 5.61571 2.17241 8.08718C2.17241 10.6115 3.15278 12.5579 4.5558 14.2262C5.71373 15.6004 7.11457 16.7402 8.48056 17.8501C8.80517 18.1144 9.1276 18.3775 9.44459 18.6406C10.0176 19.1174 10.5284 19.5345 11.0219 19.839C11.5143 20.1423 11.9108 20.2813 12.2485 20.2813C12.5861 20.2813 12.9826 20.1435 13.475 19.839C13.9685 19.5345 14.4793 19.1174 15.0523 18.6406C15.3682 18.3763 15.6917 18.1144 16.0163 17.8501C17.3823 16.7402 18.7832 15.6004 19.9411 14.2262C21.3452 12.5579 22.3245 10.6115 22.3245 8.08718C22.3245 5.61686 21.001 3.54294 19.1938 2.67201C17.4379 1.82521 15.0785 2.04926 12.8367 4.50694C12.7605 4.59034 12.6691 4.65668 12.568 4.70199C12.467 4.7473 12.3583 4.77065 12.2485 4.77065C12.1386 4.77065 12.0299 4.7473 11.9289 4.70199C11.8278 4.65668 11.7364 4.59034 11.6602 4.50694C9.41844 2.04926 7.05902 1.82521 5.30306 2.67201ZM12.2485 2.71338C9.72999 0.33498 6.90978 0.00177479 4.62334 1.10365C2.21162 2.26987 0.538452 4.97228 0.538452 8.08832C0.538452 11.1504 1.74758 13.4874 3.33469 15.3717C4.60482 16.8804 6.15925 18.1431 7.53286 19.2576C7.8444 19.5104 8.14614 19.7563 8.43262 19.9952C8.99144 20.4594 9.59055 20.9535 10.1973 21.3281C10.804 21.7015 11.4968 22.006 12.2485 22.006C13.0001 22.006 13.6929 21.7015 14.2996 21.3281C14.9074 20.9535 15.5055 20.4594 16.0643 19.9952C16.3626 19.7473 16.6626 19.5014 16.964 19.2576C18.3366 18.1431 19.8921 16.8792 21.1622 15.3717C22.7493 13.4874 23.9585 11.1504 23.9585 8.08832C23.9585 4.97228 22.2864 2.26987 19.8736 1.10595C17.5871 0.00292405 14.7669 0.336129 12.2485 2.71338Z"
                        fill="#E8346C"
                      />
                    </svg>
                    </Link>

                    {/* <button
                    onClick={() => addToCart(product.id)}
                    className="px-4 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 rounded-md"
                  >
                    Add to Cart
                  </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;























