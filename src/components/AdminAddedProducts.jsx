
// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import supabase from "../supabaseClient";
// // import UserNav from "../components/UserNav";
// // import Footer from "./Footer";
// // import AdminNav from './AdminNav';

// // const AdminAddedProducts = () => {

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

// //     if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen bg-[#fff8f7]">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
// //       </div>
// //     );
// //   }

  
// //   // Function to chunk products into pairs for mobile layout
// //   const chunkProducts = (arr, size) => {
// //     return arr.reduce((chunks, item, index) => {
// //       if (index % size === 0) {
// //         chunks.push([item]);
// //       } else {
// //         chunks[chunks.length - 1].push(item);
// //       }
// //       return chunks;
// //     }, []);
// //   };

// //   const productPairs = chunkProducts(products, 2);

// //   return (
// //     <div className="min-h-screen bg-[#fff8f7]">
// //       <div className=" pb-20">
// //         <AdminNav />

// //         <div className="max-w-7xl mx-auto">
// //           <h1 className="text-3xl pt-8 sm:pt-30 sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
// //             New Products
// //           </h1>

// //           {/* Mobile Layout - 2 products side by side */}
// //           <div className="md:hidden space-y-4">
// //             {productPairs.map((pair, index) => (
// //               <div key={index} className="grid grid-cols-2 gap-4">
// //                 {pair.map((product) => (
// //                   <div
// //                     key={product.id}
// //                     className="bg-[#f9f3ef] rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// //                   >
// //                     <img
// //                                         onClick={() => navigate(`/order/${product.id}`)}

// //                       src={product.image_url}
// //                       alt={product.name}
// //                       className="w-full h-40 object-cover"
// //                     />
// //                     <div className="p-3">
// //                       <h2 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">
// //                         {product.name}
// //                       </h2>
// //                       <p className="text-sm font-semibold text-green-600 mb-2">
// //                         Rs. {product.price}
// //                       </p>
// //                       <div className="space-y-2">
// //                         <button
// //                           onClick={() => navigate(`/order/${product.id}`)}
// //                           className="w-full text-xs bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-1.5 px-2 rounded transition-all"
// //                         >
// //                           Buy Now
// //                         </button>
// //                         <button
// //                           onClick={() => addToCart(product.id)}
// //                           className="w-full text-xs border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-1.5 px-2 rounded transition-all"
// //                         >
// //                           Add to Cart
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>

// //           {/* Desktop Layout */}
// //           <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
// //             {products.map((product) => (
// //               <div
// //                 key={product.id}
// //                 className="bg-[#f9f3ef] rounded-l shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// //               >
// //                 <img
// //                   src={product.image_url}
// //                   alt={product.name}
// //                   className="w-full h-56 sm:h-64 object-cover"
// //                 />
// //                 <div className="p-6">
// //                   <h2 className="text-xl font-bold text-gray-800 mb-2">
// //                     {product.name}
// //                   </h2>
// //                   <p className="text-lg font-semibold text-green-600 mb-3">
// //                     Rs. {product.price}
// //                   </p>
// //                   <p className="text-gray-600 mb-6 line-clamp-3">
// //                     {product.description}
// //                   </p>
// //                   <div className="flex flex-col sm:flex-row gap-3">
// //                     <button
// //                       onClick={() => navigate(`/order/${product.id}`)}
// //                       className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-4 rounded-lg transition-all"
// //                     >
// //                       Buy Now
// //                     </button>
// //                     <button
// //                       onClick={() => addToCart(product.id)}
// //                       className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
// //                     >
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default AdminAddedProducts;


// /////////////////////////////////////////////////////////////////////






// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient";
// import EditProductModal from './EditProductModal'; 
// import AdminNav from "./AdminNav";
// import Footer from "./Footer";
// import { FaSearch } from "react-icons/fa";

// const AdminAddedProducts = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
// const [loading, setLoading] = useState(true);
// const [searchTerm, setSearchTerm] = useState("");
// const [editingProduct, setEditingProduct] = useState(null); // <-- ADD THIS LINE

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

//   const addToCart = (productId) => {
//     console.log("Added to cart:", productId);
//   };

//   const handleEditClick = (productToEdit) => {
//   setEditingProduct(productToEdit); // Store the entire product object that was clicked
// };

// const handleCloseEditModal = () => {
//   setEditingProduct(null); // Clear the editingProduct state, which will hide the modal
//   // Re-fetch products to display any changes made in the modal
//   fetchProducts(); // We need to make fetchProducts accessible from here, see note below
// };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-[#fff8f7]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
//       <AdminNav />

//       <div className="max-w-7xl mx-auto">
//         {/* Header with Search */}
//         <div className="flex flex-col md:flex-row justify-between items-center p-6">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
//             Added Products
//           </h1>

//           <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
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
//         </div>

//         {/* Mobile layout - 2 columns */}
//         <div className="sm:hidden grid grid-cols-2 gap-3 mb-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
//             >
//               <img
//                 onClick={() => navigate(`/order/${product.id}`)}
//                 src={product.image_url}
//                 alt={product.name}
//                 className="w-full h-40 object-cover cursor-pointer"
//               />
//               <div className="p-2">
//                 <h2 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-xs font-medium text-green-600 mb-1">
//                   Rs. {product.price}
//                 </p>
//                 <div className="flex flex-col gap-1">
                 
//                   <button
//                     className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-[10px] py-1 rounded"
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Tablet and Desktop layout - 2 to 4 columns */}
//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
//             >
//               <img
//                 onClick={() => navigate(`/order/${product.id}`)}
//                 src={product.image_url}
//                 alt={product.name}
//                 className="w-full h-52 cursor-pointer sm:h-60 md:h-64 lg:h-72 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-sm font-medium text-green-600 mb-2">
//                   Rs. {product.price}
//                 </p>
//                 <p
//                   onClick={() => navigate(`/order/${product.id}`)}
//                   className="text-xs cursor-pointer text-gray-600 mb-3 line-clamp-2"
//                 >
//                   {product.description}
//                 </p>
//                 <div className="flex justify-center flex-col sm:flex-row gap-2">
                  
//                   <button
//                     className="px-4 bg-blue-500  border border-gray-300 hover:bg-blue-400 text-white-100 text-sm py-1 text-gray-100 rounded-md"
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default AdminAddedProducts;




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import AdminNav from "./AdminNav";
import Footer from "./Footer";
import { FaSearch } from "react-icons/fa";
import EditProductModal from "./EditProductModal";

const AdminAddedProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products from Supabase
  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    console.log("Added to cart:", productId);
  };

  const handleEditClick = (product) => {
    if (product) setEditingProduct(product);
  };

  const handleCloseEditModal = () => {
    setEditingProduct(null);
  };

  const handleProductUpdated = () => {
    fetchProducts();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#fff8f7]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 pb-20">
      <AdminNav />

      <div className="max-w-7xl mx-auto">
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row justify-between items-center p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            Added Products
          </h1>

          <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
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
        </div>

        {/* Mobile layout - 2 columns */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mb-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <img
                onClick={() => navigate(`/order/${product.id}`)}
                src={product.image_url}
                alt={product.name}
                className="w-full h-40 object-cover cursor-pointer"
              />
              <div className="p-2">
                <h2 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-xs font-medium text-green-600 mb-1">
                  Rs. {product.price}
                </p>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-[10px] py-1 rounded"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout - 2 to 4 columns */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <img
                onClick={() => navigate(`/order/${product.id}`)}
                src={product.image_url}
                alt={product.name}
                className="w-full h-52 cursor-pointer sm:h-60 md:h-64 lg:h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-sm font-medium text-green-600 mb-2">
                  Rs. {product.price}
                </p>
                <p
                  onClick={() => navigate(`/order/${product.id}`)}
                  className="text-xs cursor-pointer text-gray-600 mb-3 line-clamp-2"
                >
                  {product.description}
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="px-4 bg-blue-500 hover:bg-blue-400 text-white text-sm py-1 rounded-md"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={handleCloseEditModal}
          onProductUpdated={handleProductUpdated}
        />
      )}

      <Footer />
    </div>
  );
};

export default AdminAddedProducts;
