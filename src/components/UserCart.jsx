// // // // import React, { useEffect } from "react";
// // // // import UserNav from "./UserNav";
// // // // import supabase from "../supabaseClient";

// // // // const UserCart = () => {
// // // //     const [cartProducts, setCartProducts] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchCart = async () => {
// // // //       const { data: cartItems, error: cartError } = await supabase
// // // //         .from("cart")
// // // //         .select("product_id");

// // // //       if (cartError) {
// // // //         console.error("Failed to fetch cart items:", cartError);
// // // //         return;
// // // //       }

// // // //       const productIds = cartItems.map((item) => item.product_id);

// // // //       if (productIds.length === 0) return;

// // // //       const { data: products, error: productError } = await supabase
// // // //         .from("products")
// // // //         .select("*")
// // // //         .in("id", productIds);

// // // //       if (productError) {
// // // //         console.error("Failed to fetch products:", productError);
// // // //       } else {
// // // //         setCartProducts(products);
// // // //       }
// // // //     };

// // // //     fetchCart();
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <UserNav />
// // // //       <div>UserCart</div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default UserCart;


// // // import { useEffect, useState } from "react";
// // // import supabase from "../supabaseClient";
// // // import Nav from "../pages/Nav";

// // // const UserCart = () => {
// // //   const [cartProducts, setCartProducts] = useState([]);

// // //   useEffect(() => {
// // //     const fetchCart = async () => {
// // //       const { data: cartItems, error: cartError } = await supabase
// // //         .from("cart")
// // //         .select("product_id");

// // //       if (cartError) {
// // //         console.error("Failed to fetch cart items:", cartError);
// // //         return;
// // //       }

// // //       const productIds = cartItems.map((item) => item.product_id);

// // //       if (productIds.length === 0) return;

// // //       const { data: products, error: productError } = await supabase
// // //         .from("products")
// // //         .select("*")
// // //         .in("id", productIds);

// // //       if (productError) {
// // //         console.error("Failed to fetch products:", productError);
// // //       } else {
// // //         setCartProducts(products);
// // //       }
// // //     };

// // //     fetchCart();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <Nav />
// // //       <div className="border w-fit p-2 m-2">
// // //         {cartProducts.map((product) => (
// // //           <div key={product.id}>
// // //             <p>
// // //               {product.name} - Rs. {product.price}
// // //             </p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserCart;







// // import { useEffect, useState } from "react";
// // import supabase from "../supabaseClient";

// // const UserCart = () => {
// //   const [cartProducts, setCartProducts] = useState([]);

// //   async function removeFromCart(cartItemId) {
// //     const {error} = await supabase
// //     .from('cart')
// //     .delete()
// //     .eq('id', cartItemId);
    
// //   if (error) {
// //     console.error("Failed to remove from cart:", error);
// //     alert("Failed to remove item from cart.");
// //   } else {
// //     alert("Item removed from cart.");
// //     // Optionally refresh cart product removel ko pachi ko lagi
// //     fetchCart();
// //   }
// // }

// //   useEffect(() => {
// //     const fetchCart = async () => {
// //       const { data: cartItems, error: cartError } = await supabase
// //         .from("cart")
// //         .select("product_id");

// //       if (cartError) {
// //         console.error("Failed to fetch cart items:", cartError);
// //         return;
// //       }

// //       const productIds = cartItems.map(item => item.product_id);

// //       if (productIds.length === 0) return;

// //       const { data: products, error: productError } = await supabase
// //         .from("products")
// //         .select("*")
// //         .in("id", productIds);

// //       if (productError) {
// //         console.error("Failed to fetch products:", productError);
// //       } else {
// //         setCartProducts(products);
// //       }
// //     };

// //     fetchCart();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {cartProducts.map((product) => (
// //           <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
// //             <img
// //               src={product.image_url}
// //               alt={product.name}
// //               className="w-full h-48 object-cover rounded mb-4"
// //             />
// //             <h2 className="text-lg font-semibold">{product.name}</h2>
// //             <p className="text-gray-600 mb-1">Rs. {product.price}</p>
// //             <p className="text-sm 
// //              text-gray-500">{product.description}</p>
// //               <button  onClick={() => removeFromCart(item.id)} className="remove-btn border p-2 m-2 rounded-lg cursor-pointer bg-red-400 text-white font-bold">
// //       Remove from Cart
// //     </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserCart;







// import { useEffect, useState } from "react";
// import supabase from "../supabaseClient";

// const UserCart = () => {
//   const [cartProducts, setCartProducts] = useState([]);

//   async function removeFromCart(cartItemId) {
//     const { error } = await supabase
//       .from("cart")
//       .delete()
//       .eq("id", cartItemId);

//     if (error) {
//       console.error("Failed to remove from cart:", error);
//       alert("Failed to remove item from cart.");
//     } else {
//       alert("Item removed from cart.");
//       fetchCart();  // Refresh cart after removal
//     }
//   }

//   async function fetchCart() {
//     const { data: cartItems, error: cartError } = await supabase
//       .from("cart")
//       .select(`
//         id,
//         product:product_id (id, name, price, description, image_url)
//       `);

//     if (cartError) {
//       console.error("Failed to fetch cart items:", cartError);
//       return;
//     }

//     setCartProducts(cartItems);
//   }

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cartProducts.length === 0 && <p>Your cart is empty.</p>}

//         {cartProducts.map((item) => (
//           <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
//             <img
//               src={item.product.image_url}
//               alt={item.product.name}
//               className="w-full h-48 object-cover rounded mb-4"
//             />
//             <h2 className="text-lg font-semibold">{item.product.name}</h2>
//             <p className="text-gray-600 mb-1">Rs. {item.product.price}</p>
//             <p className="text-sm text-gray-500">{item.product.description}</p>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="remove-btn border p-2 m-2 rounded-lg cursor-pointer bg-red-400 text-white font-bold"
//             >
//               Remove from Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserCart;






















// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient";
// import Nav from "../pages/Nav";
// import UserNav from "./UserNav";

// const UserCart = () => {
//   const navigate = useNavigate();
//   const [cartProducts, setCartProducts] = useState([]);

//   useEffect(() => {
//     const fetchCartAndProducts = async () => {
//       // Step 1: Fetch all cart items
//       const { data: cartItems, error: cartError } = await supabase
//         .from("cart")
//         .select("*"); // get all columns including product_id and id (cart item id)

//       if (cartError) {
//         console.error("Failed to fetch cart items:", cartError);
//         return;
//       }

//       console.log(cartProducts.length)
//       // Step 2: Get all product IDs from cart items
//       const productIds = cartItems.map(item => item.product_id);


//       // Step 3: Fetch products by IDs
//       const { data: products, error: productError } = await supabase
//         .from("products")
//         .select("*")
//         .in("id", productIds);

//       if (productError) {
//         console.error("Failed to fetch products:", productError);
//         return;
//       }

//       // Step 4: Combine cart items with product details
//       const combined = cartItems.map(cartItem => {
//         return {
//           ...cartItem, // includes cart id, product_id, etc.
//           product: products.find(prod => prod.id === cartItem.product_id),
//         };
//       });

//       setCartProducts(combined);
//     };

//     fetchCartAndProducts();
//   }, []);

//   async function removeFromCart(cartItemId) {
//     const { error } = await supabase
//       .from("cart")
//       .delete()
//       .eq("id", cartItemId);

//     if (error) {
//       console.error("Failed to remove from cart:", error);
//       alert("Failed to remove item from cart.");
//     } else {
//       alert("Item removed from cart.");
//       // Refresh cart after removing
//       // You might want to call fetchCartAndProducts here or use a better state management
//       //AILA KO LAGI WORST WAY HO CHITAI IMPROVE GARCHU
//       //AILE KAM VAI RAKHYA CHA , JUST FOR NOW
//       // window.location.reload();
//       setCartProducts(prev => prev.filter((item => item.id !== cartItemId)))
//     }
//   }

//   return (
//     <div className="min-h-screen px-38 bg-gradient-to-b from-[#fff8f7] to-[#95b59a] ">
//         <UserNav cartLength={cartProducts.length}/>
//       <h1 className="text-2xl font-bold text-center mt-10 mb-6">My Cart</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* {cartProducts.length === 0 && <p>Your cart is empty.</p>} */}

//         {cartProducts.map(({ id, product }) => (
//           product && (
//             <div
//               key={id}
//               className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
//             >
//               <img
//                 src={product.image_url}
//                 alt={product.name}
//                 className="w-full h-48 object-cover rounded mb-4"
//               />
//               <h2 className="text-lg font-semibold">{product.name}</h2>
//               <p className="text-gray-600 mb-1">Rs. {product.price}</p>
//               <p className="text-sm text-gray-500">{product.description}</p>
//               <button className="bg-green-500 mt-2 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all" onClick={() => navigate(`/order/${product.id}`)}>Buy</button>
//               <button
//                 onClick={() => removeFromCart(id)}
//                 className="remove-btn border p-2 m-2 rounded-lg cursor-pointer bg-red-400 text-white font-bold"
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserCart;











import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import UserNav from "./UserNav";

const UserCart = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCartAndProducts = async () => {
      setIsLoading(true);
      try {
        // Step 1: Fetch all cart items
        const { data: cartItems, error: cartError } = await supabase
          .from("cart")
          .select("*");

        if (cartError) throw cartError;

        // Step 2: Get all product IDs from cart items
        const productIds = cartItems.map(item => item.product_id);

        // Step 3: Fetch products by IDs
        const { data: products, error: productError } = await supabase
          .from("products")
          .select("*")
          .in("id", productIds);

        if (productError) throw productError;

        // Step 4: Combine cart items with product details
        const combined = cartItems.map(cartItem => ({
          ...cartItem,
          product: products.find(prod => prod.id === cartItem.product_id),
        }));

        setCartProducts(combined);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartAndProducts();
  }, []);

  async function removeFromCart(cartItemId) {
    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("id", cartItemId);

    if (error) {
      console.error("Failed to remove from cart:", error);
      alert("Failed to remove item from cart.");
    } else {
      setCartProducts(prev => prev.filter(item => item.id !== cartItemId));
    }
  }

  return (
    <div className="min-h-screen  bg-[#fff8f7] px-4 sm:px-6 lg:px-8 xl:px-38">
      <UserNav cartLength={cartProducts.length} />
      
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
          My Cart
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
          </div>
        ) : cartProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-md mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.8 5.5M21 21H7M7 13l-2.3 5.1A1 1 0 007 20h12a1 1 0 00.97-.757L21 13M16 16a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mt-4">Your cart is empty</h3>
            <p className="text-gray-500 mt-2">Add some products to get started</p>
            <button 
              onClick={() => navigate('/products')}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cartProducts.map(({ id, product }) => (
              product && (
                <div
                  key={id}
                  className="bg-[#f9f3ef] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-contain rounded mb-3 sm:mb-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{product.name}</h2>
                    <p className="text-green-600 font-semibold mb-2 sm:mb-3">Rs. {product.price}</p>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3 sm:mb-4">{product.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <button 
                      onClick={() => navigate(`/order/${product.id}`)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => removeFromCart(id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCart;