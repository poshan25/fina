// // import React, { useEffect, useState } from "react";
// // import UserNav from "./UserNav";
// // import supabase from "../supabaseClient";

// // const OrderStatus = () => {
// //   const [orders, setOrders] = useState([]);
// //   // const [popupMsg, setPopupMsg] = useState("");

// //   useEffect(() => {
// //     async function fetchOrders() {
// //       let { data, error } = await supabase
// //         .from("orders")
// //         .select(
// //           `
// //       *,
// //       products(id, name, price, image_url)
// //     `
// //         )
// //         .neq("status", "received");

// //       if (error) {
// //         console.error("err fetching orders:", error);
// //       } else {
// //         setOrders(data);
// //       }
// //     }
// //     fetchOrders();
// //   }, []);


// //   return (
// //     <>
// //       <UserNav />
// //       <div>Order Status</div>
// //        {orders.length === 0 && <p>No orders found.</p>}
// //       {orders.map((order) => (
// //         <div
// //           key={order.id}
// //           style={{ border: "1px solid gray", margin: 10, padding: 10 }}
// //         >
// //           <h3>{order.products?.name}</h3>
// //           <img
// //             src={order.products?.image_url}
// //             alt={order.products?.name}
// //             width="100"
// //           />
// //           <p>Price: Rs. {order.products?.price}</p>
// //           <p>Quantity: {order.quantity}</p>
// //           <p>Status: {order.status}</p>
// //           <br />
// //           {/* <button
// //             className="border rounded-xl cursor-pointer p-2 bg-green-300 m-2"
// //             onClick={() => confirmOrder(order.id)}
// //           >
// //             Confirm Order
// //           </button> */}
// //         </div>
// //       ))}
// //     </>
// //   );
// // };

// // export default OrderStatus;








// // import React, { useEffect, useState } from "react";
// // import UserNav from "./UserNav";
// // import supabase from "../supabaseClient";

// // const OrderStatus = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     async function fetchOrders() {
// //       setIsLoading(true);
// //       let { data, error } = await supabase
// //         .from("orders")
// //         .select(
// //           `*,
// //           products(id, name, price, image_url)`
// //         )
// //         .neq("status", "received")
// //         .order('created_at', { ascending: false });

// //       if (error) {
// //         console.error("Error fetching orders:", error);
// //       } else {
// //         setOrders(data);
// //       }
// //       setIsLoading(false);
// //     }
// //     fetchOrders();
// //   }, []);

// //   const getStatusColor = (status) => {
// //     switch(status.toLowerCase()) {
// //       case 'pending': return 'bg-yellow-100 text-yellow-800';
// //       case 'processing': return 'bg-blue-100 text-blue-800';
// //       case 'shipped': return 'bg-purple-100 text-purple-800';
// //       case 'delivered': return 'bg-green-100 text-green-800';
// //       default: return 'bg-gray-100 text-gray-800';
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen px-38 bg-[#fff8f7]">
// //       <UserNav />
      
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
// //            Order Status
// //         </h1>

// //         {isLoading ? (
// //           <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
// //           </div>
// //         ) : orders.length === 0 ? (
// //           <div className="bg-white rounded-xl shadow-md p-8 text-center">
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.8 5.5M21 21H7M7 13l-2.3 5.1A1 1 0 007 20h12a1 1 0 00.97-.757L21 13M16 16a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
// //             </svg>
// //             <h3 className="text-xl font-medium text-gray-700 mt-4">No orders found</h3>
// //             <p className="text-gray-500 mt-2">Recent orders will appear here</p>
// //           </div>
// //         ) : (
// //           <div className="space-y-6">
// //             {orders.map((order) => (
// //               <div key={order.id} className="bg-[#f9f3ef] rounded-xl shadow-lg overflow-hidden">
// //                 <div className="p-6 md:flex">
// //                   {/* Product Image */}
// //                   <div className="md:w-1/4 lg:w-1/5 flex-shrink-0">
// //                     <img
// //                       src={order.products?.image_url}
// //                       alt={order.products?.name}
// //                       className="w-full h-40 object-contain rounded-lg"
// //                     />
// //                   </div>
                  
// //                   {/* Order Details */}
// //                   <div className="mt-4  md:mt-0 md:ml-6 flex-grow">
// //                     <div className="flex justify-between items-start">
// //                       <h3 className="text-xl font-bold text-gray-800">
// //                         {order.products?.name}
// //                       </h3>
// //                       <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
// //                         {order.status}
// //                       </span>
// //                     </div>
                    
// //                     <div className="mt-4 grid grid-cols-1  md:grid-cols-2 gap-4">
// //                       <div>
// //                         <p className="text-sm text-gray-500">Price</p>
// //                         <p className="text-lg font-semibold text-green-600">
// //                           Rs. {order.products?.price}
// //                         </p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-500">Quantity</p>
// //                         <p className="text-lg font-medium text-gray-700">
// //                           {order.quantity}
// //                         </p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-500">Order Date</p>
// //                         <p className="text-gray-700">
// //                           {new Date(order.created_at).toLocaleDateString()}
// //                         </p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-500">Total</p>
// //                         <p className="text-lg font-bold text-gray-800">
// //                           Rs. {(order.products?.price * order.quantity).toFixed(2)}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
                
// //                 {/* Order Actions */}
// //                 <div className="bg-[#e7fdcc] px-6 py-4 border-t border-gray-200">
// //                   <div className="flex justify-end space-x-4">
// //                     <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
// //                       View Details
// //                     </button>
// //                     <button className="px-4 py-2 bg-gradient-to-r from-[#7fd39f] to-[#8cd5ff]  text-white rounded-lg hover:from-[#a37878] hover:to-[#c1a9a9] transition">
// //                       Track Order
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderStatus;














// // import React, { useEffect, useState } from "react";
// // import UserNav from "./UserNav";
// // import supabase from "../supabaseClient";

// // const OrderStatus = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [session, setSession] = useState(null);


// //   useEffect(() => {
// //      supabase.auth.getSession().then(({ data: { session } }) => {
// //       setSession(session);
// //     });
// //      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
// //       setSession(session);
// //     });
// //     async function fetchOrders() {
// //       setIsLoading(true);
// //       let { data, error } = await supabase
// //         .from("orders")
// //         .select(
// //           `*,
// //           products(id, name, price, image_url)`
// //         )
// //         .neq("status", "received")
// //         .order('created_at', { ascending: false });

// //       if (error) {
// //         console.error("Error fetching orders:", error);
// //       } else {
// //         setOrders(data);
// //       }
// //       setIsLoading(false);
// //     }
// //     fetchOrders();
// //         return () => subscription.unsubscribe();

// //   }, []);

// //   const signIn = async () => {
// //     await supabase.auth.signInWithOAuth({ provider: "google" });
// //   };

// //    if (!session) {
// //     // If not logged in, show login button
// //     return (
// //       <div>
// //         <h2>Please login to track your orders</h2>
// //         <button onClick={signIn}>Login with Google</button>
// //       </div>
// //     );
// //   }

// //   const getStatusColor = (status) => {
// //     switch(status.toLowerCase()) {
// //       case 'pending': return 'bg-yellow-100 text-yellow-800';
// //       case 'processing': return 'bg-blue-100 text-blue-800';
// //       case 'shipped': return 'bg-purple-100 text-purple-800';
// //       case 'delivered': return 'bg-green-100 text-green-800';
// //       default: return 'bg-gray-100 text-gray-800';
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#fff8f7] px-4 sm:px-6 lg:px-38">
// //       <UserNav />
      
// //       <div className="max-w-7xl mx-auto py-8 sm:py-12">
// //         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
// //           Order Status
// //         </h1>

// //         {isLoading ? (
// //           <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
// //           </div>
// //         ) : orders.length === 0 ? (
// //           <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-6 sm:p-8 text-center">
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-14 sm:h-16 w-14 sm:w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.8 5.5M21 21H7M7 13l-2.3 5.1A1 1 0 007 20h12a1 1 0 00.97-.757L21 13M16 16a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
// //             </svg>
// //             <h3 className="text-lg sm:text-xl font-medium text-gray-700 mt-4">No orders found</h3>
// //             <p className="text-sm sm:text-base text-gray-500 mt-2">Recent orders will appear here</p>
// //           </div>
// //         ) : (
// //           <div className="space-y-4 sm:space-y-6">
// //             {orders.map((order) => (
// //               <div key={order.id} className="bg-[#f9f3ef] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden">
// //                 <div className="p-4 sm:p-6 flex flex-col sm:flex-row">
// //                   {/* Product Image */}
// //                   <div className="sm:w-1/4 lg:w-1/5 flex-shrink-0 mb-4 sm:mb-0">
// //                     <img
// //                       src={order.products?.image_url}
// //                       alt={order.products?.name}
// //                       className="w-full h-32 sm:h-40 object-contain rounded-lg"
// //                     />
// //                   </div>
                  
// //                   {/* Order Details */}
// //                   <div className="sm:ml-6 flex-grow">
// //                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
// //                       <h3 className="text-lg sm:text-xl font-bold text-gray-800">
// //                         {order.products?.name}
// //                       </h3>
// //                       <span className={`mt-2 sm:mt-0 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getStatusColor(order.status)}`}>
// //                         {order.status}
// //                       </span>
// //                     </div>
                    
// //                     <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
// //                       <div>
// //                         <p className="text-xs sm:text-sm text-gray-500">Price</p>
// //                         <p className="text-base sm:text-lg font-semibold text-green-600">
// //                           Rs. {order.products?.price}
// //                         </p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-xs sm:text-sm text-gray-500">Quantity</p>
// //                         <p className="text-base sm:text-lg font-medium text-gray-700">
// //                           {order.quantity}
// //                         </p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-xs sm:text-sm text-gray-500">Order Date</p>
// //                         <p className="text-sm sm:text-base text-gray-700">
// //                           {new Date(order.created_at).toLocaleDateString()}
// //                         </p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-xs sm:text-sm text-gray-500">Total</p>
// //                         <p className="text-base sm:text-lg font-bold text-gray-800">
// //                           Rs. {(order.products?.price * order.quantity).toFixed(2)}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
                
// //                 {/* Order Actions */}
// //                 {/* <div className="bg-[#e7fdcc] px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200">
// //                   <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
// //                     <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition">
// //                       View Details
// //                     </button>
// //                     <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#7fd39f] to-[#8cd5ff] text-white rounded-lg hover:from-[#6dc38f] hover:to-[#7bc5ef] transition text-sm sm:text-base">
// //                       Track Order
// //                     </button>
// //                   </div>
// //                 </div> */}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // export default OrderStatus;



















// import React, { useEffect, useState } from "react";
// import UserNav from "./UserNav";
// import supabase from "../supabaseClient";

// const OrderStatus = () => {
//   const [orders, setOrders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     // Get initial session
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     // Listen to auth state changes
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });

//     // Clean up listener
//     return () => subscription.unsubscribe();
//   }, []);

//   useEffect(() => {
//     // Fetch orders only if user is logged in
//     if (session) {
//       fetchOrders();
//     } else {
//       // If no user, clear orders and loading
//       setOrders([]);
//       setIsLoading(false);
//     }
//   }, [session]);

//   async function fetchOrders() {
//     setIsLoading(true);
//     let { data, error } = await supabase
//       .from("orders")
//       .select(
//         `*,
//         products(id, name, price, image_url)`
//       )
//       .eq("user_id", session.user.id) // Only fetch orders for logged-in user
//       .neq("status", "received")
//       .order('created_at', { ascending: false });

//     if (error) {
//       console.error("Error fetching orders:", error);
//       setOrders([]);
//     } else {
//       setOrders(data);
//     }
//     setIsLoading(false);
//   }

//   const signIn = async () => {
//     await supabase.auth.signInWithOAuth({ provider: "google" });
//   };

//   if (!session) {
//     // Not logged in → show login button
//     return (
//       <div>
//         <h2>Please login to track your orders</h2>
//         <button onClick={signIn}>Login with Google</button>
//       </div>
//     );
//   }

//   // If logged in → show orders list or loading UI
//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case "pending":
//         return "bg-yellow-100 text-yellow-800";
//       case "processing":
//         return "bg-blue-100 text-blue-800";
//       case "shipped":
//         return "bg-purple-100 text-purple-800";
//       case "delivered":
//         return "bg-green-100 text-green-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fff8f7] px-4 sm:px-6 lg:px-38">
//       <UserNav />

//       <div className="max-w-7xl mx-auto py-8 sm:py-12">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
//           Order Status
//         </h1>

//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
//           </div>
//         ) : orders.length === 0 ? (
//           <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-6 sm:p-8 text-center">
//             <h3 className="text-lg sm:text-xl font-medium text-gray-700 mt-4">
//               No orders found
//             </h3>
//             <p className="text-sm sm:text-base text-gray-500 mt-2">
//               Recent orders will appear here
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-4 sm:space-y-6">
//             {orders.map((order) => (
//               <div
//                 key={order.id}
//                 className="bg-[#f9f3ef] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden"
//               >
//                 <div className="p-4 sm:p-6 flex flex-col sm:flex-row">
//                   <div className="sm:w-1/4 lg:w-1/5 flex-shrink-0 mb-4 sm:mb-0">
//                     <img
//                       src={order.products?.image_url}
//                       alt={order.products?.name}
//                       className="w-full h-32 sm:h-40 object-contain rounded-lg"
//                     />
//                   </div>

//                   <div className="sm:ml-6 flex-grow">
//                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
//                       <h3 className="text-lg sm:text-xl font-bold text-gray-800">
//                         {order.products?.name}
//                       </h3>
//                       <span
//                         className={`mt-2 sm:mt-0 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getStatusColor(
//                           order.status
//                         )}`}
//                       >
//                         {order.status}
//                       </span>
//                     </div>

//                     <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
//                       <div>
//                         <p className="text-xs sm:text-sm text-gray-500">Price</p>
//                         <p className="text-base sm:text-lg font-semibold text-green-600">
//                           Rs. {order.products?.price}
//                         </p>
//                       </div>

//                       <div>
//                         <p className="text-xs sm:text-sm text-gray-500">Quantity</p>
//                         <p className="text-base sm:text-lg font-medium text-gray-700">
//                           {order.quantity}
//                         </p>
//                       </div>

//                       <div>
//                         <p className="text-xs sm:text-sm text-gray-500">Order Date</p>
//                         <p className="text-sm sm:text-base text-gray-700">
//                           {new Date(order.created_at).toLocaleDateString()}
//                         </p>
//                       </div>

//                       <div>
//                         <p className="text-xs sm:text-sm text-gray-500">Total</p>
//                         <p className="text-base sm:text-lg font-bold text-gray-800">
//                           Rs. {(order.products?.price * order.quantity).toFixed(2)}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderStatus;
import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import supabase from "../supabaseClient";

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up listener
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    // Fetch orders only if user is logged in
    if (session) {
      fetchOrders();
    } else {
      // If no user, clear orders and loading
      setOrders([]);
      setIsLoading(false);
    }
  }, [session]);

  async function fetchOrders() {
    setIsLoading(true);
    let { data, error } = await supabase
      .from("orders")
      .select(
        `*,
        products(id, name, price, image_url)`
      )
      .eq("user_id", session.user.id) // Only fetch orders for logged-in user
      .neq("status", "received")
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    } else {
      setOrders(data);
    }
    setIsLoading(false);
  }
  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null); // Clear session locally after sign out
  };

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-blue-300 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f7] px-4 sm:px-6 lg:px-38">
      <UserNav />

      {!session ? (
        <div className="max-w-7xl mx-auto py-8 sm:py-12 text-center">
          <h2 className="text-xl mb-4">Please login to track your orders</h2>
          <button
            onClick={signIn}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login with Google
          </button>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            Order Status
          </h1>
           <button
              onClick={signOut}
              className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-medium text-gray-700 mt-4">
                No orders found
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                Recent orders will appear here
              </p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#f9f3ef] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden"
                >
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 lg:w-1/5 flex-shrink-0 mb-4 sm:mb-0">
                      <img
                        src={order.products?.image_url}
                        alt={order.products?.name}
                        className="w-full h-32 sm:h-40 object-contain rounded-lg"
                      />
                    </div>

                    <div className="sm:ml-6 flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                          {order.products?.name}
                        </h3>
                        <span
                          className={`mt-2 sm:mt-0 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500">Price</p>
                          <p className="text-base sm:text-lg font-semibold text-green-600">
                            Rs. {order.products?.price}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs sm:text-sm text-gray-500">Quantity</p>
                          <p className="text-base sm:text-lg font-medium text-gray-700">
                            {order.quantity}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs sm:text-sm text-gray-500">Order Date</p>
                          <p className="text-sm sm:text-base text-gray-700">
                            {new Date(order.created_at).toLocaleDateString()}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs sm:text-sm text-gray-500">Total</p>
                          <p className="text-base sm:text-lg font-bold text-gray-800">
                            Rs. {(order.products?.price * order.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
