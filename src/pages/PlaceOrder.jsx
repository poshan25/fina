


import React, { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import { useParams, useNavigate } from "react-router-dom";
import UserNav from "../components/UserNav";
import Footer from "./Footer";
import axios from "axios"; // used to shorten URL

const PlaceOrder = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [userId, setUserId] = useState(null);
  const [product, setProduct] = useState(null);
  const [popupMsg, setPopupMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) {
        console.error(error);
      } else {
        setProduct(data);
      }
      setIsLoading(false);
    }
    fetchProduct();
  }, [productId]);

  const handleBuyAndRedirect = async () => {
    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          user_id: userId,
          product_id: product.id,
          quantity: quantity,
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.error("Order error:", error);
      alert("Failed to place order. Please try again.");
      return;
    }

    setPopupMsg("Order In Process");

    const phoneNumber = "9779824143454";

    try {
      // Shorten the image URL
      const res = await axios.get(
        `https://tinyurl.com/api-create.php?url=${product.image_url}`
      );
      const shortUrl = res.data;

      const message = `Hi, I want to buy this product:

🛍️ Name: ${product.name}
📝 Description: ${product.description}
🖼️ Image: ${shortUrl}`;

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      setTimeout(() => {
        window.open(whatsappURL, "_blank");
      }, 1000);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("URL shortening error:", err);
      alert("Failed to shorten image URL.");
    }
  };

  if (!productId)
    return (
      <div className="min-h-screen bg-[#acc8b1] p-8 text-center">
        No product selected
      </div>
    );

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#acc8b1] flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-600">
          Loading product details...
        </div>
      </div>
    );

  return (
    <div>
      <div className="min-h-screen md:px-38  flex flex-col">
        {popupMsg && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              zIndex: 1000,
            }}
          >
            {popupMsg}
          </div>
        )}
        <UserNav />

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-12">
            <div className="bg-[#fbf5f1] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="md:w-1/2 lg:w-2/5 bg-gray-100 flex items-center justify-center p-8">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 lg:w-3/5 p-8 md:p-12">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-4">
                    Premium QUALITY Product
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl font-semibold text-green-600 mb-6">
                    Rs. {product.price}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Order Form */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
                    <div className="w-full sm:w-auto">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Quantity
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            setQuantity((prev) => Math.max(1, prev - 1))
                          }
                          className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          id="quantity"
                          min="1"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(Math.max(1, Number(e.target.value)))
                          }
                          className="w-16 text-center border-0 focus:ring-0"
                        />
                        <button
                          onClick={() => setQuantity((prev) => prev + 1)}
                          className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="w-full sm:w-auto">
                      <p className="text-sm text-gray-500 mb-2">Total Price</p>
                      <p className="text-2xl font-bold text-gray-800">
                        Rs. {(product.price * quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleBuyAndRedirect}
                    className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Place order easily via WhatsApp
                  </button>

                  <button
                    onClick={() => navigate(-1)}
                    className="w-full mt-4 border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition"
                  >
                    Back to Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;









// import React, { useState, useEffect } from "react";
// import supabase from "../supabaseClient";
// import { useParams, useNavigate } from "react-router-dom";
// import UserNav from "../components/UserNav";
// import Footer from "./Footer";
// import axios from "axios";

// const PlaceOrder = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const [quantity, setQuantity] = useState(1);
//   const [userId, setUserId] = useState(null);
//   const [product, setProduct] = useState(null);
//   const [popupMsg, setPopupMsg] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProduct() {
//       setIsLoading(true);
//       const { data, error } = await supabase
//         .from("products")
//         .select("*")
//         .eq("id", productId)
//         .single();

//       if (error) {
//         console.error(error);
//       } else {
//         setProduct(data);
//       }
//       setIsLoading(false);
//     }
//     fetchProduct();
//   }, [productId]);

//   const handleBuyAndRedirect = async () => {
//     const { data, error } = await supabase
//       .from("orders")
//       .insert([
//         {
//           user_id: userId,
//           product_id: product.id,
//           quantity: quantity,
//           status: "pending",
//         },
//       ])
//       .select();

//     if (error) {
//       console.error("Order error:", error);
//       alert("Failed to place order. Please try again.");
//       return;
//     }

//     setPopupMsg("Order confirmed!");

//     const phoneNumber = "9779824143454";

//     try {
//       // Shorten the image URL
//       const res = await axios.get(
//         `https://tinyurl.com/api-create.php?url=${product.image_url}`
//       );
//       const shortUrl = res.data;

//       const message = `Hi, I want to buy this product:

// 🛍️ Name: ${product.name}
// 📝 Description: ${product.description}
// 🖼️ Image: ${shortUrl}`;

//       const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//         message
//       )}`;

//       setTimeout(() => {
//         window.open(whatsappURL, "_blank");
//       }, 1000);

//       setTimeout(() => {
//         navigate("/");
//       }, 1500);
//     } catch (err) {
//       console.error("URL shortening error:", err);
//       alert("Failed to shorten image URL.");
//     }
//   };

//   if (!productId)
//     return (
//       <div className="min-h-screen bg-[#acc8b1] p-4 md:p-8 text-center">
//         No product selected
//       </div>
//     );

//   if (isLoading)
//     return (
//       <div className="min-h-screen bg-[#acc8b1] flex items-center justify-center">
//         <div className="animate-pulse text-lg md:text-xl text-gray-600">
//           Loading product details...
//         </div>
//       </div>
//     );

//   return (
//     <div className="flex flex-col min-h-screen">
//       {popupMsg && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md z-50 shadow-lg">
//           {popupMsg}
//         </div>
//       )}
//       <UserNav />

//       <main className="flex-grow bg-[#fff4f4]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
//           <div className="bg-[#fbf5f1] rounded-xl md:rounded-2xl shadow-md md:shadow-xl overflow-hidden flex flex-col md:flex-row">
//             {/* Product Image */}
//             <div className="md:w-1/2 lg:w-2/5 bg-gray-100 flex items-center justify-center p-4 md:p-8">
//               <img
//                 src={product.image_url}
//                 alt={product.name}
//                 className="w-full h-auto max-h-64 md:max-h-96 object-contain rounded-lg"
//               />
//             </div>

//             {/* Product Details */}
//             <div className="md:w-1/2 lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-12">
//               <div className="mb-4 md:mb-6">
//                 <span className="inline-block px-2 py-1 text-xs md:text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-2 md:mb-4">
//                   Premium QUALITY Product
//                 </span>
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
//                   {product.name}
//                 </h1>
//                 <p className="text-lg md:text-xl font-semibold text-green-600 mb-4 md:mb-6">
//                   Rs. {product.price}
//                 </p>
//                 <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>

//               {/* Order Form */}
//               <div className="border-t border-gray-200 pt-4 md:pt-6">
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 md:mb-8">
//                   <div className="w-full sm:w-auto">
//                     <label
//                       htmlFor="quantity"
//                       className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
//                     >
//                       Quantity
//                     </label>
//                     <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                       <button
//                         onClick={() =>
//                           setQuantity((prev) => Math.max(1, prev - 1))
//                         }
//                         className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         id="quantity"
//                         min="1"
//                         value={quantity}
//                         onChange={(e) =>
//                           setQuantity(Math.max(1, Number(e.target.value)))
//                         }
//                         className="w-12 md:w-16 text-center border-0 focus:ring-0 text-sm md:text-base"
//                       />
//                       <button
//                         onClick={() => setQuantity((prev) => prev + 1)}
//                         className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   <div className="w-full sm:w-auto">
//                     <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
//                       Total Price
//                     </p>
//                     <p className="text-xl md:text-2xl font-bold text-gray-800">
//                       Rs. {(product.price * quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleBuyAndRedirect}
//                   className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
//                 >
//                   Place order easily via WhatsApp
//                 </button>

//                 <button
//                   onClick={() => navigate(-1)}
//                   className="w-full mt-3 md:mt-4 border border-gray-300 text-gray-700 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-50 transition text-sm md:text-base"
//                 >
//                   Back to Products
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default PlaceOrder;