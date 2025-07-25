// import React, { useState } from "react";
// import supabase from "../supabaseClient";
// import AdminNav from "../components/AdminNav";

// const AdminAddProduct = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [uploading, setUploading] = useState(false);

//   // Upload image to Supabase Storage
//   const uploadImage = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     // Create a unique filename using current timestamp + original name
//     const fileName = `${Date.now()}_${file.name}`;

//     // Upload file to 'products' bucket (create bucket in Supabase dashboard if not exists)
//     const { data, error } = await supabase.storage
//       .from("product-images")
//       .upload(fileName, file);

//     if (error) {
//       alert("Error uploading image: " + error.message);
//       setUploading(false);
//       return;
//     }

//     // Get public URL of uploaded image
//     // const { publicUrl, error: urlError } = supabase.storage
//     //   .from("product-images")
//     //   .getPublicUrl(fileName);
// const { data: { publicUrl }, error: urlError } = supabase.storage
//   .from("product-images")
//   .getPublicUrl(fileName);

//     if (urlError) {
//       alert("Error getting public URL: " + urlError.message);
//       setUploading(false);
//       return;
//     }

//     setImageUrl(publicUrl);
//     setUploading(false);
//   };

// //   const handleSubmit = async (e) => {''
// //         e.preventDefault();

// //     if (!imageUrl) {
// //   alert("Please upload image first!");
// //   return;
// // }
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!imageUrl) {
//     alert("Please upload image first!");
//     return;
//   }

//   const sellerId = localStorage.getItem("seller_id"); // 👈 fetch seller_id

//   if (!sellerId) {
//     alert("Seller ID not found. Please login again.");
//     return;
//   }

//   const productData = {
//     name,
//     price: Number(price),
//     description,
//     image_url: imageUrl,
//     seller_id: sellerId, // 👈 attach seller_id to product
//   };

//   const { error } = await supabase.from("products").insert([productData]);

//   if (error) {
//     alert("Error: " + error.message);
//   } else {
//     alert("Product added!");
//     setName("");
//     setPrice("");
//     setDescription("");
//     setImageUrl("");
//   }
// };



//     // if (!name || !price || !description || !imageUrl) {
//     //   alert("Please fill all the inputs!");
//     //   return;
//     // }

//     const productData = {
//       name,
//       price: Number(price),
//       description,
//       image_url: imageUrl,
//     };

//     const { error } =  supabase.from("products").insert([productData]);

//     if (error) {
//       alert("Error:" + error.message);
//     } else {
//       alert("Product added!");
//       setName("");
//       setPrice("");
//       setDescription("");
//       setImageUrl("");
//     }
//   };

//   return (
//     <>
//     <AdminNav/>
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-extrabold text-gray-900">Add New Product</h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Fill in the details below to add a new product
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Product Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter product name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//               Price
//             </label>
//             <input
//               id="price"
//               type="number"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Description
//             </label>
//             <input
//               id="description"
//               type="text"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter product description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           <div>
//             <label 
//               htmlFor="imageUpload"
//               className="block border w-fit p-2 rounded-xl bg-blue-600 text-white text-sm font-medium "
//             >
//               Add Image
//             </label>
//             <input
//               id="imageUpload"
//               type="file"
//               accept="image/*"
//               onChange={uploadImage}
//               className="mt-1 block w-full"
//             />
//             {uploading && <p>Uploading image...</p>}
//             {imageUrl && (
//               <img
//                 src={imageUrl}
//                 alt="Preview"
//                 className="mt-2 max-h-48 object-contain"
//               />
//             )}
//           </div>

//           <div>
//             <button
//   type="submit"
//   disabled={uploading}  // disable if uploading image
//   className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
//     uploading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
//   }`}
// >
//   {uploading ? "Uploading..." : "Add Product"}
// </button>
//           </div>
//         </form>
//       </div>
//     </div>
//         </>

//   );
// };

// export default AdminAddProduct;






















import React, { useState } from "react";
import supabase from "../supabaseClient";
import AdminNav from "../components/AdminNav";

const AdminAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  // Upload image to Supabase Storage
  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    const fileName = `${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);

    if (error) {
      alert("Error uploading image: " + error.message);
      setUploading(false);
      return;
    }

    const { data: urlData, error: urlError } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    if (urlError) {
      alert("Error getting public URL: " + urlError.message);
      setUploading(false);
      return;
    }

    setImageUrl(urlData.publicUrl);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please upload image first!");
      return;
    }

    const sellerId = localStorage.getItem("seller_id");

    if (!sellerId) {
      alert("Seller ID not found. Please login again.");
      return;
    }

    const productData = {
      name,
      price: Number(price),
      description,
      image_url: imageUrl,
      seller_id: sellerId, // ✅ Attach seller ID
    };

    const { error } = await supabase.from("products").insert([productData]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Product added!");
      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
    }
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Add New Product</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the details below to add a new product
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                id="price"
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                id="description"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="imageUpload"
                className="block border w-fit p-2 rounded-xl bg-blue-600 text-white text-sm font-medium"
              >
                Add Image
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="mt-1 block w-full"
              />
              {uploading && <p>Uploading image...</p>}
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="mt-2 max-h-48 object-contain"
                />
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={uploading}
                className={`w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white ${
                  uploading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {uploading ? "Uploading..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminAddProduct;
