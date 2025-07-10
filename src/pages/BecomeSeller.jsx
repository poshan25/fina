import React, { useState } from "react";
import supabase from "../supabaseClient";
import UserNav from "../components/UserNav";
import Footer from "./Footer";

const BecomeSeller = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      alert("You must be logged in to become a seller");
      return;
    }

    const { error } = await supabase.from("sellers").insert([
      {
        seller_id: user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
    ]);

    if (error) {
      alert("Error creating seller: " + error.message);
    } else {
      alert("You are now a seller!");
    }
  };

  return (
    <div className="bg-[#fff8f7]">
      <div className="  px-4 sm:px-6 lg:px-38">
        <UserNav />
      </div>

      <div className="max-w-md mx-auto mt-10 mb-10 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Become a Seller</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name or Business"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="shop Name"
            placeholder="shop Name"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeSeller;








//  ADDING SUPABASE VALIDATION.