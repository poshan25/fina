// // import React from "react";
// // import AdminNav from "./AdminNav";
// // import Footer from "./Footer";

// // // import AdminNav from "./AdminNav";
// // // import Footer from "./Footer";

// // const AdminLayout = () => {
// //   return (
// //     <>
// //       <AdminNav />
// //        <div className=' bg-fuchsia-500 p-5 text-gray-100 flex flex-col items-center  '>
// //              <h3 className='text-3xl font-bold'>Welcome Admin</h3>
// //              <br />
// //              <h1 className='text-xl'>Hope You Are Doing Great</h1>
// //         </div>
// //       {/* <main>{children}</main> */}
// //       <Footer />
// //     </>
// //   );
// // };

// // export default AdminLayout;







// import React from "react";
// import AdminNav from "./AdminNav";
// import Footer from "./Footer";

// const AdminLayout = () => {
//   return (
//     <>
//       <AdminNav />
//       <div className="bg-gradient-to-br from-fuchsia-500 to-pink-600 min-h-screen text-white p-6 flex flex-col items-center justify-center text-center">
//         <div className="max-w-4xl w-full">
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 transition duration-300 hover:shadow-2xl">
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
//               Welcome, Admin 👋
//             </h1>
//             <p className="text-lg md:text-xl font-medium text-white/90">
//               Hope you're having a productive day! Manage your dashboard below.
//             </p>

//             {/* Dashboard Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//               <div className="bg-white/20 rounded-xl p-6 shadow hover:shadow-xl transition">
//                 <h2 className="text-2xl font-semibold mb-2">🛒 Orders</h2>
//                 <p className="text-sm text-white/80">View & manage all orders.</p>
//               </div>
//               <div className="bg-white/20 rounded-xl p-6 shadow hover:shadow-xl transition">
//                 <h2 className="text-2xl font-semibold mb-2">📦 Products</h2>
//                 <p className="text-sm text-white/80">Add or update products.</p>
//               </div>
//               <div className="bg-white/20 rounded-xl p-6 shadow hover:shadow-xl transition">
//                 <h2 className="text-2xl font-semibold mb-2">👥 Users</h2>
//                 <p className="text-sm text-white/80">See all registered users.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AdminLayout;













import React from "react";
import AdminNav from "./AdminNav";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <>
      <AdminNav />
      <div className="bg-[#fff4f4] min-h-screen text-gray-800 p-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl w-full">
          <div className="bg-white rounded-2xl shadow-lg p-10 transition duration-300 hover:shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Welcome, Admin 👋
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-600">
              Hope you're having a productive day! Manage your dashboard below.
            </p>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <div className="bg-[#ffeaea] rounded-xl p-6 shadow hover:shadow-md transition border border-pink-200">
                <h2 className="text-2xl font-semibold mb-2">🛒 Orders</h2>
                <p className="text-sm text-gray-700">View & manage all orders.</p>
              </div>
              <div className="bg-[#ffeaea] rounded-xl p-6 shadow hover:shadow-md transition border border-pink-200">
                <h2 className="text-2xl font-semibold mb-2">📦 Products</h2>
                <p className="text-sm text-gray-700">Add or update products.</p>
              </div>
              <div className="bg-[#ffeaea] rounded-xl p-6 shadow hover:shadow-md transition border border-pink-200">
                <h2 className="text-2xl font-semibold mb-2">👥 Users</h2>
                <p className="text-sm text-gray-700">See all registered users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
