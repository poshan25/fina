// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import supabase from "../supabaseClient";

// // // const User = () => {
// // //   const navigate = useNavigate();
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);

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
// // //     <div className="min-h-screen mt-[-50px] bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 lg:px-38 pb-20">
// // //       <div className="max-w-7xl mx-auto">
// // //         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800 pt-20 sm:pt-30">
// // //           New Products
// // //         </h1>

// // //         {/* Mobile Layout - 2 columns */}
// // //         <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
// // //           {products.map((product) => (
// // //             <div
// // //               key={product.id}
// // //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
// // //             >
// // //               <img
// // //                 src={product.image_url}
// // //                 alt={product.name}
// // //                 className="w-full h-40 object-cover"
// // //               />

// // //               <div className="p-3">
// // //                 <h2 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">
// // //                   {product.name}
// // //                 </h2>
// // //                 <p className="text-xs font-semibold text-green-600 mb-2">
// // //                   Rs. {product.price}
// // //                 </p>
// // //                 <p className="text-xs text-gray-600 mb-3 line-clamp-2">
// // //                   {product.description}
// // //                 </p>

// // //                 <div className="flex flex-col gap-2">
// // //                   <button
// // //                     onClick={() => navigate(`/order/${product.id}`)}
// // //                     className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-1.5 px-2 rounded text-xs"
// // //                   >
// // //                     Buy Now
// // //                   </button>
// // //                   <button
// // //                     onClick={() => addToCart(product.id)}
// // //                     className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-1.5 px-2 rounded text-xs"
// // //                   >
// // //                     Add to Cart
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Desktop Layout */}
// // //         <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
// // //           {products.map((product) => (
// // //             <div
// // //               key={product.id}
// // //               className="bg-[#f9f3ef] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// // //             >
// // //               <img
// // //                 src={product.image_url}
// // //                 alt={product.name}
// // //                 className="w-full h-48 sm:h-56 md:h-64 object-cover"
// // //               />

// // //               <div className="p-4 sm:p-6">
// // //                 <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
// // //                   {product.name}
// // //                 </h2>
// // //                 <p className="text-base sm:text-lg font-semibold text-green-600 mb-3">
// // //                   Rs. {product.price}
// // //                 </p>
// // //                 <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2">
// // //                   {product.description}
// // //                 </p>

// // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
// // //                   <button
// // //                     onClick={() => navigate(`/order/${product.id}`)}
// // //                     className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
// // //                   >
// // //                     Buy Now
// // //                   </button>
// // //                   <button
// // //                     onClick={() => addToCart(product.id)}
// // //                     className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
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

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import supabase from "../supabaseClient";

// // const User = () => {
// //   const navigate = useNavigate();
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       const { data, error } = await supabase.from("products").select("*");
// //       if (error) {
// //         console.error("Error fetching products:", error);
// //       } else {
// //         setProducts(data);
// //       }
// //       setLoading(false);
// //     };
// //     fetchProducts();
// //   }, []);

// //   async function addToCart(productId) {
// //     const { error } = await supabase
// //       .from("cart")
// //       .insert([{ product_id: productId }]);
// //     if (error) {
// //       alert("Failed to add to cart");
// //       console.error(error);
// //     } else {
// //       alert("Product added to cart!");
// //     }
// //   }

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 pt-20">
// //           New Products
// //         </h1>

// //         {/* Mobile Layout */}
// //         <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
// //           {products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
// //             >
// //               <img
// //                 src={product.image_url}
// //                 alt={product.name}
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-2">
// //                 <h2 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2">
// //                   {product.name}
// //                 </h2>
// //                 <p className="text-xs font-medium text-green-600 mb-1">
// //                   Rs. {product.price}
// //                 </p>
// //                 <p className="text-[10px] text-gray-600 mb-2 line-clamp-2">
// //                   {product.description}
// //                 </p>
// //                 <div className="flex flex-col gap-1">
// //                   <button
// //                     onClick={() => navigate(`/order/${product.id}`)}
// //                     className="w-full bg-green-500 hover:bg-green-600 text-white text-[10px] font-medium py-1 rounded"
// //                   >
// //                     Buy Now
// //                   </button>
// //                   <button
// //                     onClick={() => addToCart(product.id)}
// //                     className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-[10px] font-normal py-1 rounded"
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Desktop Layout */}
// //         <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
// //           {products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// //             >
// //               <img
// //                 src={product.image_url}
// //                 alt={product.name}
// //                 className="w-full h-64 object-cover"
// //               />
// //               <div className="p-4">
// //                 <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
// //                   {product.name}
// //                 </h2>
// //                 <p className="text-sm font-medium text-green-600 mb-2">
// //                   Rs. {product.price}
// //                 </p>
// //                 <p className="text-xs text-gray-600 mb-3 line-clamp-2">
// //                   {product.description}
// //                 </p>
// //                 <div className="flex flex-col sm:flex-row gap-2">
// //                   <button
// //                     onClick={() => navigate(`/order/${product.id}`)}
// //                     className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-1 rounded-md"
// //                   >
// //                     Buy Now
// //                   </button>
// //                   <button
// //                     onClick={() => addToCart(product.id)}
// //                     className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 rounded-md"
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default User;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { FaSearch } from "react-icons/fa";

const User = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center p-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
    New Products
  </h1>

  <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
    <input
      type="text"
      placeholder="Search..."
      className="outline-none px-4 py-2 w-48 sm:w-64"
    />
    <button className=" p-2 cursor-pointer transition">
      <FaSearch className="text-gray-700 text-xl" />
    </button>
  </div>
</div>
        {/* Mobile Layout */}
        <div className=" sm:hidden grid grid-cols-2 gap-3 mb-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <h2 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-xs font-medium text-green-600 mb-1">
                  Rs. {product.price}
                </p>
                <p className="text-[10px] text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => navigate(`/order/${product.id}`)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-[10px] font-medium py-1 rounded"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-[10px] font-normal py-1 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop & Tablet Layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-52 sm:h-60 md:h-64 lg:h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-sm font-medium text-green-600 mb-2">
                  Rs. {product.price}
                </p>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => navigate(`/order/${product.id}`)}
                    className=" px-4  bg-green-500 hover:bg-green-600 text-white text-sm  rounded-md"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="px-4 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient";

// const User = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

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
//     <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 pt-20">
//           New Products
//         </h1>

//         {/* Mobile Layout */}
//         <div className="sm:hidden grid grid-cols-2 gap-3 mb-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
//             >
//               <div className="w-full h-48 flex items-center justify-center bg-white">
//                 <img
//                   src={product.image_url}
//                   alt={product.name}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//               <div className="p-2">
//                 <h2 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-xs font-medium text-green-600 mb-1">
//                   Rs. {product.price}
//                 </p>
//                 <p className="text-[10px] text-gray-600 mb-2 line-clamp-2">
//                   {product.description}
//                 </p>
//                 <div className="flex flex-col gap-1">
//                   <button
//                     onClick={() => navigate(`/order/${product.id}`)}
//                     className="w-full bg-green-500 hover:bg-green-600 text-white text-[10px] font-medium py-1 rounded"
//                   >
//                     Buy Now
//                   </button>
//                   <button
//                     onClick={() => addToCart(product.id)}
//                     className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-[10px] font-normal py-1 rounded"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Desktop & Tablet Layout */}
//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
//             >
//               <div className="w-full h-52 sm:h-60 md:h-64 lg:h-72 flex items-center justify-center bg-white">
//                 <img
//                   src={product.image_url}
//                   alt={product.name}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-sm font-medium text-green-600 mb-2">
//                   Rs. {product.price}
//                 </p>
//                 <p className="text-xs text-gray-600 mb-3 line-clamp-2">
//                   {product.description}
//                 </p>
//                 <div className="flex justify-center flex-col sm:flex-row gap-2">
//                   <button
//                     onClick={() => navigate(`/order/${product.id}`)}
//                     className="px-4 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md"
//                   >
//                     Buy Now
//                   </button>
//                   <button
//                     onClick={() => addToCart(product.id)}
//                     className="px-4 border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 rounded-md"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;
