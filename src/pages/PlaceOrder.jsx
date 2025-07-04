// // import React, { useState, useEffect } from "react";
// // import supabase from "../supabaseClient";
// // import { useParams, useNavigate } from "react-router-dom";
// // import UserNav from "../components/UserNav";
// // import Footer from "./Footer";
// // import axios from "axios";

// // const PlaceOrder = () => {
// //   const { productId } = useParams();
// //   const navigate = useNavigate();
// //   const [quantity, setQuantity] = useState(1);
// //   const [userId, setUserId] = useState(null);
// //   const [product, setProduct] = useState(null);
// //   const [popupMsg, setPopupMsg] = useState("");
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchProduct() {
// //       setIsLoading(true);
// //       const { data, error } = await supabase
// //         .from("products")
// //         .select("*")
// //         .eq("id", productId)
// //         .single();

// //       if (error) {
// //         console.error(error);
// //       } else {
// //         setProduct(data);
// //       }
// //       setIsLoading(false);
// //     }
// //     fetchProduct();
// //   }, [productId]);

// //   const handleBuyAndRedirect = async () => {
// //     const { data, error } = await supabase
// //       .from("orders")
// //       .insert([
// //         {
// //           user_id: userId,
// //           product_id: product.id,
// //           quantity: quantity,
// //           status: "pending",
// //         },
// //       ])
// //       .select();

// //     if (error) {
// //       console.error("Order error:", error);
// //       alert("Failed to place order. Please try again.");
// //       return;
// //     }

// //     setPopupMsg("Order confirmed!");

// //     const phoneNumber = "9779824143454";

// //     try {
// //       // Shorten the image URL
// //       const res = await axios.get(
// //         `https://tinyurl.com/api-create.php?url=${product.image_url}`
// //       );
// //       const shortUrl = res.data;

// //       const message = `Hi, I want to buy this product:

// // 🛍️ Name: ${product.name}
// // 📝 Description: ${product.description}
// // 🖼️ Image: ${shortUrl}`;

// //       const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
// //         message
// //       )}`;

// //       setTimeout(() => {
// //         window.open(whatsappURL, "_blank");
// //       }, 1000);

// //       setTimeout(() => {
// //         navigate("/");
// //       }, 1500);
// //     } catch (err) {
// //       console.error("URL shortening error:", err);
// //       alert("Failed to shorten image URL.");
// //     }
// //   };

// //   if (!productId)
// //     return (
// //       <div className="min-h-screen bg-[#acc8b1] p-4 md:p-8 text-center">
// //         No product selected
// //       </div>
// //     );

// //   if (isLoading)
// //     return (
// //       <div className="min-h-screen bg-[#acc8b1] flex items-center justify-center">
// //         <div className="animate-pulse text-lg md:text-xl text-gray-600">
// //           Loading product details...
// //         </div>
// //       </div>
// //     );

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       {popupMsg && (
// //         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md z-50 shadow-lg">
// //           {popupMsg}
// //         </div>
// //       )}
// //       <UserNav />

// //       <main className="flex-grow bg-[#fff4f4]">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
// //           <div className="bg-[#fbf5f1] rounded-xl md:rounded-2xl shadow-md md:shadow-xl overflow-hidden flex flex-col md:flex-row">
// //             {/* Product Image */}
// //             <div className="md:w-1/2 lg:w-2/5 bg-gray-100 flex items-center justify-center p-4 md:p-8">
// //               <img
// //                 src={product.image_url}
// //                 alt={product.name}
// //                 className="w-full h-auto max-h-64 md:max-h-96 object-contain rounded-lg"
// //               />
// //             </div>

// //             {/* Product Details */}
// //             <div className="md:w-1/2 lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-12">
// //               <div className="mb-4 md:mb-6">
// //                 <span className="inline-block px-2 py-1 text-xs md:text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-2 md:mb-4">
// //                   Premium QUALITY Product
// //                 </span>
// //                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
// //                   {product.name}
// //                 </h1>
// //                 <p className="text-lg md:text-xl font-semibold text-green-600 mb-4 md:mb-6">
// //                   Rs. {product.price}
// //                 </p>
// //                 <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
// //                   {product.description}
// //                 </p>
// //               </div>

// //               {/* Order Form */}
// //               <div className="border-t border-gray-200 pt-4 md:pt-6">
// //                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 md:mb-8">
// //                   <div className="w-full sm:w-auto">
// //                     <label
// //                       htmlFor="quantity"
// //                       className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
// //                     >
// //                       Quantity
// //                     </label>
// //                     <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
// //                       <button
// //                         onClick={() =>
// //                           setQuantity((prev) => Math.max(1, prev - 1))
// //                         }
// //                         className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
// //                       >
// //                         -
// //                       </button>
// //                       <input
// //                         type="number"
// //                         id="quantity"
// //                         min="1"
// //                         value={quantity}
// //                         onChange={(e) =>
// //                           setQuantity(Math.max(1, Number(e.target.value)))
// //                         }
// //                         className="w-12 md:w-16 text-center border-0 focus:ring-0 text-sm md:text-base"
// //                       />
// //                       <button
// //                         onClick={() => setQuantity((prev) => prev + 1)}
// //                         className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
// //                       >
// //                         +
// //                       </button>
// //                     </div>
// //                   </div>

// //                   <div className="w-full sm:w-auto">
// //                     <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
// //                       Total Price
// //                     </p>
// //                     <p className="text-xl md:text-2xl font-bold text-gray-800">
// //                       Rs. {(product.price * quantity).toFixed(2)}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <button
// //                   onClick={handleBuyAndRedirect}
// //                   className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
// //                 >
// //                   Place order easily via WhatsApp
// //                 </button>

// //                 <button
// //                   onClick={() => navigate(-1)}
// //                   className="w-full mt-3 md:mt-4 border border-gray-300 text-gray-700 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-50 transition text-sm md:text-base"
// //                 >
// //                   Back to Products
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default PlaceOrder;

// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////

// // import React, { useState, useEffect } from "react";
// // import supabase from "../supabaseClient";
// // import { useParams, useNavigate } from "react-router-dom";
// // import UserNav from "../components/UserNav";
// // import Footer from "./Footer";
// // import axios from "axios"; // used to shorten URL

// // const PlaceOrder = () => {
// //   const { productId } = useParams();
// //   const navigate = useNavigate();
// //   const [quantity, setQuantity] = useState(1);
// //   const [userId, setUserId] = useState(null);
// //   const [product, setProduct] = useState(null);
// //   const [popupMsg, setPopupMsg] = useState("");
// //   const [isLoading, setIsLoading] = useState(true);

// // const session = supabase.auth.getSession();
// // const user = session.user;

// // const placeOrder = async (productId, quantity) => {

// //   const { data: { session }, error } = await supabase.auth.getSession();

// //   if (error) {
// //     console.log("Session fetch error:", error);
// //     return;
// //   }

// //   if (!session) {
// //     console.log("User not logged in");
// //     return;
// //   }

// //   const user = session.user;

// //   const { error: insertError } = await supabase.from('orders').insert([
// //     {
// //       user_id: user.id,        // ✅ Save user ID
// //       email: user.email,        // ✅ Save user email
// //       product_id: productId,    // Your product ID
// //       quantity: quantity,       // Order quantity
// //       status: 'pending',        // Example status
// //     }
// //   ]);

// //   if (insertError) {
// //     console.log("Error saving order:", insertError);
// //   } else {
// //     console.log("Order saved with user info!");
// //   }
// // };

// //   useEffect(() => {
// //     async function fetchProduct() {
// //       setIsLoading(true);
// //       const { data, error } = await supabase
// //         .from("products")
// //         .select("*")
// //         .eq("id", productId)
// //         .single();

// //       if (error) {
// //         console.error(error);
// //       } else {
// //         setProduct(data);
// //         console.log(data);
// //       }
// //       setIsLoading(false);
// //     }
// //     fetchProduct();
// //   }, [productId]);

// // const handleBuyAndRedirect = async () => {
// //   const { data, error } = await supabase
// //     .from("orders")
// //     .insert([
// //       {
// //         user_id: userId,
// //         product_id: product.id,
// //         quantity: quantity,
// //         status: "pending",
// //       },
// //     ])
// //     .select();

// //   if (error) {
// //     console.error("Order error:", error);
// //     alert("Failed to place order. Please try again.");
// //     return;
// //   }

// //   setPopupMsg("Order In Process");

// //   const phoneNumber = "9779824143454";

// //   try {
// //     // Shorten the image URL
// //     const res = await axios.get(
// //       `https://tinyurl.com/api-create.php?url=${product.image_url}`
// //     );
// //     const shortUrl = res.data;

// //     const totalPrice = product.price * quantity;

// //     const message = `
// //  Price: ${product.price}
// //  Quantity: ${quantity}
// //  Total Price: ${totalPrice}
// //  Image: ${shortUrl}
// //  Name: ${product.name}

// // Hi, I want to buy this product.

// // `;

// //     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
// //       message
// //     )}`;

// //     setTimeout(() => {
// //       window.open(whatsappURL, "_blank");
// //     }, 500);

// //     setTimeout(() => {
// //       navigate("/");
// //     }, 1500);
// //   } catch (err) {
// //     console.error("URL shortening error:", err);
// //     alert("Failed to shorten image URL.");
// //   }
// // };

// // //   const handleBuyAndRedirect = async () => {
// // //     const { data, error } = await supabase
// // //       .from("orders")
// // //       .insert([
// // //         {
// // //           user_id: userId,
// // //           product_id: product.id,
// // //           quantity: quantity,
// // //           status: "pending",
// // //         },
// // //       ])
// // //       .select();

// // //     if (error) {
// // //       console.error("Order error:", error);
// // //       alert("Failed to place order. Please try again.");
// // //       return;
// // //     }

// // //     setPopupMsg("Order In Process");

// // //     const phoneNumber = "9779824143454";

// // //     try {
// // //       // Shorten the image URL
// // //       const res = await axios.get(
// // //         `https://tinyurl.com/api-create.php?url=${product.image_url}`
// // //       );
// // //       const shortUrl = res.data;

// // //       const message = `
// // //  Price: ${product.price}
// // //  Image: ${shortUrl}
// // //  Name: ${product.name}

// // // Hi, I want to buy this product.

// // // `;

// // //       const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
// // //         message
// // //       )}`;

// // //       setTimeout(() => {
// // //         window.open(whatsappURL, "_blank");
// // //       }, 500);

// // //       setTimeout(() => {
// // //         navigate("/");
// // //       }, 1500);
// // //     } catch (err) {
// // //       console.error("URL shortening error:", err);
// // //       alert("Failed to shorten image URL.");
// // //     }
// // //   };

// //   if (!productId)
// //     return (
// //       <div className="min-h-screen bg-[#acc8b1] p-8 text-center">
// //         No product selected
// //       </div>
// //     );

// //   if (isLoading)
// //     return (
// //       <div className="min-h-screen bg-[#acc8b1] flex items-center justify-center">
// //         <div className="animate-pulse text-xl text-gray-600">
// //           Loading product details...
// //         </div>
// //       </div>
// //     );

// //   return (
// //     <div>
// //       <div className="min-h-screen md:px-38  flex flex-col">
// //         {popupMsg && (
// //           <div
// //             style={{
// //               position: "fixed",
// //               top: "20px",
// //               right: "20px",
// //               backgroundColor: "#4caf50",
// //               color: "white",
// //               padding: "10px 20px",
// //               borderRadius: "5px",
// //               zIndex: 1000,
// //             }}
// //           >
// //             {popupMsg}
// //           </div>
// //         )}
// //         <UserNav />

// //         <main className="flex-grow">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-12">
// //             <div className="bg-[#fbf5f1] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
// //               {/* Product Image */}
// //               <div className="md:w-1/2 lg:w-2/5 bg-gray-100 flex items-center justify-center p-8">
// //                 <img
// //                   src={product.image_url}
// //                   alt={product.name}
// //                   className="w-full h-auto max-h-96 object-contain rounded-lg"
// //                 />
// //               </div>

// //               {/* Product Details */}
// //               <div className="md:w-1/2 lg:w-3/5 p-8 md:p-12">
// //                 <div className="mb-6">
// //                   <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-4">
// //                     Premium QUALITY Product
// //                   </span>
// //                   <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
// //                     {product.name}
// //                   </h1>
// //                   <p className="text-xl font-semibold text-green-600 mb-6">
// //                     Rs. {product.price}
// //                   </p>
// //                   <p className="text-gray-600 mb-8 leading-relaxed">
// //                     {product.description}
// //                   </p>
// //                 </div>

// //                 {/* Order Form */}
// //                 <div className="border-t border-gray-200 pt-6">
// //                   <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
// //                     <div className="w-full sm:w-auto">
// //                       <label
// //                         htmlFor="quantity"
// //                         className="block text-sm font-medium text-gray-700 mb-2"
// //                       >
// //                         Quantity
// //                       </label>
// //                       <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
// //                         <button
// //                           onClick={() =>
// //                             setQuantity((prev) => Math.max(1, prev - 1))
// //                           }
// //                           className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
// //                         >
// //                           -
// //                         </button>
// //                         <input
// //                           type="number"
// //                           id="quantity"
// //                           min="1"
// //                           value={quantity}
// //                           onChange={(e) =>
// //                             setQuantity(Math.max(1, Number(e.target.value)))
// //                           }
// //                           className="w-16 text-center border-0 focus:ring-0"
// //                         />
// //                         <button
// //                           onClick={() => setQuantity((prev) => prev + 1)}
// //                           className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
// //                         >
// //                           +
// //                         </button>
// //                       </div>
// //                     </div>

// //                     <div className="w-full sm:w-auto">
// //                       <p className="text-sm text-gray-500 mb-2">Total Price</p>
// //                       <p className="text-2xl font-bold text-gray-800">
// //                         Rs. {(product.price * quantity).toFixed(2)}
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <button
// //                     onClick={handleBuyAndRedirect}
// //                     className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
// //                   >
// //                     Place order easily via WhatsApp
// //                   </button>

// //                   <button
// //                     onClick={() => navigate(-1)}
// //                     className="w-full mt-4 border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition"
// //                   >
// //                     Back to Products
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default PlaceOrder;

// ///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////






// -
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


// const handleBuyAndRedirect = async () => {
//   const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

//   if (sessionError) {
//     console.error("Session error:", sessionError);
//     alert("Failed to get user session!");
//     return;
//   }

//   const session = sessionData.session;
//   let userId = null;
//   let userEmail = null;

//   if (session && session.user) {
//     userId = session.user.id;
//     // userEmail = session.user.email;
//   }

//   const { error: orderError } = await supabase.from("orders").insert([
//     {
//       user_id: userId,      // Will be null for guests
//       // email: userEmail,      // Optional: Save email if user is logged in
//       product_id: product.id,
//       quantity: quantity,
//       status: "pending",
//     },
//   ]);

//   if (orderError) {
//     console.error("Order save error:", orderError);
//     alert("Failed to place order: " + orderError.message);
//     return;
//   }

//   console.log("Order placed!");

//   setPopupMsg("Order In Process");

//   const phoneNumber = "9779824143454";

//   try {
//     const res = await axios.get(
//       `https://tinyurl.com/api-create.php?url=${product.image_url}`
//     );
//     const shortUrl = res.data;

//     const totalPrice = product.price * quantity;

//     const message = `
// Price: ${product.price}
// Quantity: ${quantity}
// Total Price: ${totalPrice}
// Image: ${shortUrl}
// Name: ${product.name}

// Hi, I want to buy this product.
// `;

//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     setTimeout(() => {
//       window.open(whatsappURL, "_blank");
//     }, 500);

//     setTimeout(() => {
//       navigate("/");
//     }, 1500);
//   } catch (err) {
//     console.error("URL shorten error:", err);
//     alert("Failed to shorten image URL.");
//   }
// };

//   if (!productId)
//     return (
//       <div className="min-h-screen bg-[#acc8b1] p-8 text-center">
//         No product selected
//       </div>
//     );

//   if (isLoading)
//     return (
//       <div className="min-h-screen bg-[#acc8b1] flex items-center justify-center">
//         <div className="animate-pulse text-xl text-gray-600">
//           Loading product details...
//         </div>
//       </div>
//     );


//     const askDetailCheckLogin = () => {

//     }

//   return (
//     <div>
//       <div className="min-h-screen md:px-38 flex flex-col">
//         {popupMsg && (
//           <div
//             style={{
//               position: "fixed",
//               top: "20px",
//               right: "20px",
//               backgroundColor: "#4caf50",
//               color: "white",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               zIndex: 1000,
//             }}
//           >
//             {popupMsg}
//           </div>
//         )}
//         <UserNav />

//         <main className="flex-grow">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="bg-[#fbf5f1] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
//               <div className="md:w-1/2 lg:w-2/5 bg-gray-100 flex items-center justify-center p-8">
//                 <img
//                   src={product.image_url}
//                   alt={product.name}
//                   className="w-full h-auto max-h-96 object-contain rounded-lg"
//                 />
//               </div>

//               <div className="md:w-1/2 lg:w-3/5 p-8 md:p-12">
//                 <div className="mb-6">
//                   <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-4">
//                     Premium QUALITY Product
//                   </span>
//                   <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                     {product.name}
//                   </h1>
//                   <p className="text-xl font-semibold text-green-600 mb-6">
//                     Rs. {product.price}
//                   </p>
//                   <p className="text-gray-600 mb-8 leading-relaxed">
//                     {product.description}
//                   </p>
//                 </div>

//                 <div className="border-t border-gray-200 pt-6">
//                   <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
//                     <div className="w-full sm:w-auto">
//                       <label
//                         htmlFor="quantity"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         Quantity
//                       </label>
//                       <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                         <button
//                           onClick={() =>
//                             setQuantity((prev) => Math.max(1, prev - 1))
//                           }
//                           className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
//                         >
//                           -
//                         </button>
//                         <input
//                           type="number"
//                           id="quantity"
//                           min="1"
//                           value={quantity}
//                           onChange={(e) =>
//                             setQuantity(Math.max(1, Number(e.target.value)))
//                           }
//                           className="w-16 text-center border-0 focus:ring-0"
//                         />
//                         <button
//                           onClick={() => setQuantity((prev) => prev + 1)}
//                           className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     <div className="w-full sm:w-auto">
//                       <p className="text-sm text-gray-500 mb-2">Total Price</p>
//                       <p className="text-2xl font-bold text-gray-800">
//                         Rs. {(product.price * quantity).toFixed(2)}
//                       </p>
//                     </div>
//                   </div>

//                   <button
//                     onClick={handleBuyAndRedirect}
//                     className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//                   >
//                     Place order easily via WhatsApp
//                   </button>
//                   <button
//                     onClick={askDetailCheckLogin}
//                     className="w-full mt-3 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//                   >
//                     Buy Now
//                   </button>

//                   <button
//                     onClick={() => navigate(-1)}
//                     className="w-full mt-4 border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition"
//                   >
//                     Back to Products
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default PlaceOrder;






import React, { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import { useParams, useNavigate } from "react-router-dom";
import UserNav from "../components/UserNav";
import Footer from "./Footer";
import axios from "axios";

const PlaceOrder = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [popupMsg, setPopupMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    deliveryAddress: "",
    city: "",
    province: "",
    paymentMethod: "cashOnDelivery"
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppOrder = async () => {
    try {
      const phoneNumber = "9779824143454";
      const totalPrice = product.price * quantity;

      // Try to shorten URL, but fallback to original if it fails
      let imageUrl = product.image_url;
      try {
        const res = await axios.get(
          `https://tinyurl.com/api-create.php?url=${product.image_url}`
        );
        imageUrl = res.data;
      } catch (err) {
        console.warn("URL shortening failed, using original URL");
      }

      const message = `
*Product Details:*
Name: ${product.name}
Price: Rs. ${product.price}
Quantity: ${quantity}
Total Price: Rs. ${totalPrice}
Image: ${imageUrl}

*Customer Message:*
Hi, I want to buy this product.
`;

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");

      // Save order to database
      await saveOrderToDatabase(null);
      
      setPopupMsg("Order initiated via WhatsApp");
      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      console.error("WhatsApp order error:", err);
      alert("Failed to initiate WhatsApp order");
    }
  };

  const saveOrderToDatabase = async (userId) => {
    const orderData = {
      user_id: userId,
      product_id: product.id,
      quantity: quantity,
      status: "pending",
      ...(showForm && {
        customer_name: formData.fullName,
        phone_number: formData.phoneNumber,
        email: formData.email,
        delivery_address: formData.deliveryAddress,
        city: formData.city,
        province: formData.province,
        payment_method: formData.paymentMethod
      })
    };

    const { error } = await supabase.from("orders").insert([orderData]);
    if (error) throw error;
  };

  const handleBuyNow = async () => {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      if (!sessionData.session) {
        if (confirm("You need to login to proceed with the order. Do you want to login now?")) {
          navigate("/login");
        }
        return;
      }
      
      setShowForm(true);
    } catch (error) {
      console.error("Login check error:", error);
      alert("Failed to check login status");
    }
  };

  const submitOrderForm = async () => {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user?.id || null;
      
      await saveOrderToDatabase(userId);
      
      setPopupMsg("Order placed successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Order submission error:", error);
      alert("Failed to place order: " + error.message);
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
      <div className="min-h-screen md:px-38 flex flex-col">
        {popupMsg && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-2 rounded-md z-50">
            {popupMsg}
          </div>
        )}
        <UserNav />

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-[#fbf5f1] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 lg:w-2/5 bg-gray-100 flex items-center justify-center p-8">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
              </div>

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

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
                    <div className="w-full sm:w-auto">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                          className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                          className="w-16 text-center border-0 focus:ring-0"
                        />
                        <button
                          onClick={() => setQuantity(prev => prev + 1)}
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
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Place order via WhatsApp
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="w-full mt-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Buy Now
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

            {/* Delivery Details Form */}
            {showForm && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Province
                    </label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Method
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="cashOnDelivery">Cash on Delivery</option>
                      <option value="esewa">eSewa</option>
                      <option value="khalti">Khalti</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <button
                    type="button"
                    onClick={submitOrderForm}
                    className="flex-1 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition"
                  >
                    Confirm Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;