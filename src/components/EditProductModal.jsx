// // import { useState } from "react";
// // import supabase from "../supabaseClient";

// // const EditProductModal = ({ product, onClose, onProductUpdated }) => {
// //   if (!product) return null;

// //   const [name, setName] = useState(product.name || "");
// //   const [price, setPrice] = useState(product.price || "");
// //   const [description, setDescription] = useState(product.description || "");
// //   const [image_url, setImageUrl] = useState(product.image_url || "");
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const { error } = await supabase
// //       .from("products")
// //       .update({
// //         name,
// //         price,
// //         description,
// //         image_url,
// //       })
// //       .eq("id", product.id);

// //     setLoading(false);

// //     if (error) {
// //       alert("Failed to update product");
// //       console.error(error);
// //     } else {
// //       alert("Product updated successfully");
// //       onProductUpdated();
// //       onClose();
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
// //       <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
// //         <h2 className="text-xl font-bold mb-4">Edit Product</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Product Name"
// //             className="w-full border p-2 rounded"
// //             required
// //           />
// //           <input
// //             type="number"
// //             value={price}
// //             onChange={(e) => setPrice(e.target.value)}
// //             placeholder="Price"
// //             className="w-full border p-2 rounded"
// //             required
// //           />
// //           <textarea
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             placeholder="Description"
// //             className="w-full border p-2 rounded"
// //           />
// //           <input
// //             type="text"
// //             value={image_url}
// //             onChange={(e) => setImageUrl(e.target.value)}
// //             placeholder="Image URL"
// //             className="w-full border p-2 rounded"
// //           />
// //           <div className="flex justify-end gap-2">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="px-4 py-2 bg-gray-300 rounded"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="px-4 py-2 bg-blue-500 text-white rounded"
// //             >
// //               {loading ? "Updating..." : "Update"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditProductModal;




// import { useState } from "react";
// import supabase from "../supabaseClient";

// const EditProductModal = ({ product, onClose, onProductUpdated }) => {
//   if (!product) return null;

//   const [name, setName] = useState(product.name || "");
//   const [price, setPrice] = useState(product.price || "");
// const previewImage = newImageFile ? URL.createObjectURL(newImageFile) : image_url;

//   const [description, setDescription] = useState(product.description || "");
//   const [image_url, setImageUrl] = useState(product.image_url || "");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     let finalImageUrl = image_url;

//     // If user selected a new image file
//     if (file) {
//       const fileExt = file.name.split(".").pop();
//       const filePath = `public/${Date.now()}.${fileExt}`;

//       const { error: uploadError } = await supabase.storage
//         .from("product-images")
//         .upload(filePath, file);

//       if (uploadError) {
//         console.error("Upload error:", uploadError);
//         alert("Failed to upload image");
//         setLoading(false);
//         return;
//       }

//       // Get the public URL
//       const { data } = supabase.storage
//         .from("product-images")
//         .getPublicUrl(filePath);

//       finalImageUrl = data.publicUrl;
//     }

//     // Update product in database
//     const { error } = await supabase
//       .from("products")
//       .update({
//         name,
//         price,
//         description,
//         image_url: finalImageUrl,
//       })
//       .eq("id", product.id);

//     setLoading(false);

//     if (error) {
//       alert("Failed to update product");
//       console.error(error);
//     } else {
//       alert("Product updated successfully");
//       onProductUpdated();
//       onClose();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
//         <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Product Name"
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="Price"
//             className="w-full border p-2 rounded"
//             required
//           />
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Description"
//             className="w-full border p-2 rounded"
//           />
//          {/* Image Preview */}
// {previewImage && (
//   <img
//     src={previewImage}
//     alt="Preview"
//     className="w-full h-40 object-cover rounded"
//   />
// )}

//           {/* File upload */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full border p-2 rounded"
//           />
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               {loading ? "Updating..." : "Update"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProductModal;




import { useState } from "react";
import supabase from "../supabaseClient";

const EditProductModal = ({ product, onClose, onProductUpdated }) => {
  if (!product) return null;

  const [name, setName] = useState(product.name || "");
  const [price, setPrice] = useState(product.price || "");
  const [description, setDescription] = useState(product.description || "");
  const [image_url, setImageUrl] = useState(product.image_url || "");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Preview image either new selected file or old url
  const previewImage = file ? URL.createObjectURL(file) : image_url;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let finalImageUrl = image_url;

    if (file) {
      const fileExt = file.name.split(".").pop();
      const filePath = `public/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file);

      if (uploadError) {
        console.error("Upload error:", uploadError);
        alert("Failed to upload image");
        setLoading(false);
        return;
      }

      const { data } = supabase.storage
        .from("product-images")
        .getPublicUrl(filePath);

      finalImageUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("products")
      .update({
        name,
        price,
        description,
        image_url: finalImageUrl,
      })
      .eq("id", product.id);

    setLoading(false);

    if (error) {
      alert("Failed to update product");
      console.error(error);
    } else {
      alert("Product updated successfully");
      onProductUpdated();
      onClose();
    }
  };

  return (
    // <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50">
    //   <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
    //     <h2 className="text-xl font-bold mb-4">Edit Product</h2>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <input
    //         type="text"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         placeholder="Product Name"
    //         className="w-full border p-2 rounded"
    //         required
    //       />
    //       <input
    //         type="number"
    //         value={price}
    //         onChange={(e) => setPrice(e.target.value)}
    //         placeholder="Price"
    //         className="w-full border p-2 rounded"
    //         required
    //       />
    //       <textarea
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         placeholder="Description"
    //         className="w-full h-30 border p-2 rounded"
    //       />
    //       {/* Image Preview */}
    //       {previewImage && (
    //         <img
    //           src={previewImage}
    //           alt="Preview"
    //           className="w-full  object-cover rounded"
    //         />
    //       )}
    //       {/* File upload */}
    //       <input
    //         type="file"
    //         accept="image/*"
    //         onChange={handleFileChange}
    //         className="w-full border p-2 rounded"
    //       />
    //       <div className="flex justify-end gap-2">
    //         <button
    //           type="button"
    //           onClick={onClose}
    //           className="px-4 py-2 bg-gray-300 rounded"
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           type="submit"
    //           disabled={loading}
    //           className="px-4 py-2 bg-blue-500 text-white rounded"
    //         >
    //           {loading ? "Updating..." : "Update"}
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
//     <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 p-4">
//   <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Edit Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Product Name"
//             className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="Price"
//             className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Description"
//             rows={4}
//             className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
//         {/* Image Preview */}
//         {previewImage && (
//           <div className="mt-2">
//             <img
//               src={previewImage}
//               alt="Preview"
//               className="w-full h-auto max-h-48 object-contain rounded-md border border-gray-200"
//             />
//           </div>
//         )}
//         {/* File upload */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Product Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-md file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-blue-700
//               hover:file:bg-blue-100"
//           />
//         </div>
//         <div className="flex justify-end gap-3 pt-2">
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-4 py-2 text-white rounded-md transition-colors ${
//               loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {loading ? "Updating..." : "Update"}
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>


<div className="fixed inset-0   backdrop-blur-[2px] flex justify-center items-center z-50 p-4">
  <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-auto">
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Form Fields */}
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                rows={4}
                className="w-full border md:h-[30vh] border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Column - Image Upload */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* Image Preview */}
            <div className="border-2 border-gray-100 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center min-h-[200px]">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-w-full h-auto max-h-64 object-contain rounded-md"
                />
              ) : (
                <div className="text-gray-400 text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p>Product Image Preview</p>
                </div>
              )}
            </div>

            {/* File upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 text-white rounded-md transition-colors ${
              loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default EditProductModal;
