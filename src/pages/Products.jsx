// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient";
// import UserNav from "../components/UserNav";
// import Footer from "./Footer";

// const Products = () => {
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
//       <div className="flex justify-center items-center h-screen bg-[#fff8f7]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#fff8f7]">
//       <div className="px-4 sm:px-6 lg:px-38 pb-20">
//         <UserNav />

//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-3xl pt-8 sm:pt-30 sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
//             New Products
//           </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-[#f9f3ef] rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
//               >
//                 <img
//                   src={product.image_url}
//                   alt={product.name}
//                   className="w-full h-56 sm:h-64 object-cover"
//                 />

//                 <div className="p-6">
//                   <h2 className="text-xl font-bold text-gray-800 mb-2">
//                     {product.name}
//                   </h2>
//                   <p className="text-lg font-semibold text-green-600 mb-3">
//                     Rs. {product.price}
//                   </p>
//                   <p className="text-gray-600 mb-6">{product.description}</p>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <button
//                       onClick={() => navigate(`/order/${product.id}`)}
//                       className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-4 rounded-lg transition-all"
//                     >
//                       Buy Now
//                     </button>
//                     <button
//                       onClick={() => addToCart(product.id)}
//                       className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Products;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import UserNav from "../components/UserNav";
import Footer from "./Footer";

const Products = () => {
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
      <div className="flex justify-center items-center h-screen bg-[#fff8f7]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
      </div>
    );
  }

  // Function to chunk products into pairs for mobile layout
  const chunkProducts = (arr, size) => {
    return arr.reduce((chunks, item, index) => {
      if (index % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  const productPairs = chunkProducts(products, 2);

  return (
    <div className="min-h-screen bg-[#fff8f7]">
      <div className="px-4 sm:px-6 lg:px-38 pb-20">
        <UserNav />

        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl pt-8 sm:pt-30 sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
            New Products
          </h1>

          {/* Mobile Layout - 2 products side by side */}
          <div className="md:hidden space-y-4">
            {productPairs.map((pair, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                {pair.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#f9f3ef] rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <img
                    
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <h2 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">
                        {product.name}
                      </h2>
                      <p className="text-sm font-semibold text-green-600 mb-2">
                        Rs. {product.price}
                      </p>
                      <div className="space-y-2">
                        <button
                          onClick={() => navigate(`/order/${product.id}`)}
                          className="w-full text-xs bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-1.5 px-2 rounded transition-all"
                        >
                          Buy Now
                        </button>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="w-full text-xs border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-1.5 px-2 rounded transition-all"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#f9f3ef] rounded-l shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-lg font-semibold text-green-600 mb-3">
                    Rs. {product.price}
                  </p>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => navigate(`/order/${product.id}`)}
                      className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-4 rounded-lg transition-all"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
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
      <Footer />
    </div>
  );
};

export default Products;
