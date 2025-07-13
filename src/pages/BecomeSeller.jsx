import React, { useState } from "react";
import supabase from "../supabaseClient";
import UserNav from "../components/UserNav";
import { v4 as uuidv4 } from "uuid";

import Footer from "./Footer";

const BecomeSeller = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  // const [handleLogin, setHandleLogin] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    shopName: "",
    sellerEmail: "",
    sellerPassword: "",
    phone: "",
    address: "",
    emailOrPhone: "", 
    password: "", 
  });

  /////////////

  const handleLogin = async (e) => {
    e.preventDefault();

    const { emailOrPhone, password } = formData;

    // Fetch seller by email or phone
    const { data: sellers, error } = await supabase
      .from("sellers")
      .select("*")
      // .or(`email.eq.${emailOrPhone},phone.eq.${emailOrPhone}`); // match either
      .or(`email.eq.${emailOrPhone}`)
      .or(`phone.eq.${emailOrPhone}`);

    if (error || sellers.length === 0) {
      alert("Seller not found");
      return;
    }

    const seller = sellers[0];

    if (seller.password === password) {
      // Password matches
      alert("Login successful!");

      // Optional: save seller_id in localStorage for later use
      localStorage.setItem("seller_id", seller.seller_id);

      // Navigate to admin panel
      window.location.href = "/seller-dashboard"; // change path as needed
    } else {
      alert("Incorrect password");
    }
  };



  // const redirectToSellerPage = () => {

  // }

  ///////////////////

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSellerId = uuidv4(); // generate unique id

    const { error } = await supabase.from("sellers").insert([
      {
        seller_id: newSellerId,
        name: formData.name,
        shop_name: formData.shopName,
        email: formData.sellerEmail,
        password: formData.sellerPassword,
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

  const openSignUpForm = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-[#fff8f7]">
      <div className="  px-4 sm:px-6 lg:px-38">
        <UserNav />
      </div>

      <div className="max-w-md mx-auto mt-10 mb-10 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Become a Seller</h2>

        {isLoggedIn ? (
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-4"
          >
            {/* Fake inputs */}
            <input
              type="text"
              name="fakeusernameremembered"
              style={{ display: "none" }}
            />
            <input
              type="password"
              name="fakepasswordremembered"
              style={{ display: "none" }}
            />

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
              name="shopName"
              placeholder="shop Name"
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="password"
              name="sellerPassword"
              autoComplete="new-seller-password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />

            <input
              type="email"
              name="sellerEmail"
              autoComplete="new-seller-email"
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
        ) : (
          <div className=" bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Login with Password
              </h2>
              <form onSubmit={handleLogin} className="space-y-5">
                <input
                  type="text"
                  name="emailOrPhone"
                  placeholder="Mobile Number / Email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                //  onClick={() => {
                //     redirectToSellerPage();
                //   }}
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    openSignUpForm();
                  }}
                  type="button"
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700 transition"
                >
                  Sign up
                </button>
                <div className="text-right text-sm text-orange-600 hover:underline cursor-pointer">
                  Reset password
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By clicking Login, you agree to our{" "}
                  <a
                    href="https://university.daraz.com.np/course/learn?id=42214"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-600 underline"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://pages.daraz.com.np/wow/i/np/help-pages/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-600 underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BecomeSeller;