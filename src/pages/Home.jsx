// import React, { useEffect, useState } from "react";
// import Nav from "./Nav";
// import UserProducts from "./UserProducts";
// import Verify from "../components/Verify";
// import TabooOrganics from "./TabooOrganics";
// import User from "../components/User";
// import Footer from "./Footer";
// // import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import BestSelling from "../components/BestSelling";
// // import supabase from "../supabaseClient";
// import { Auth } from "@supabase/auth-ui-react";
// // import { ThemeSupa } from "@supabase/auth-ui-shared";
// import supabase from "../supabaseClient";
// import FetchApi from "../api/FetchApi";

// const Home = () => {
//     return (
//       <div>

// <FetchApi/>

//         {/* <h2>Welcome, {session.user.email}</h2>
//         <button onClick={signOut}>Signout</button> */}
//           {/* <Nav/>  */}
//        <userNav/>
//     <TabooOrganics/>
//     <BestSelling/>
//     <User/>
//       {/* <User searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
//      {/* <BestSelling/> */}
//      <Footer/>
//    {/* <Verify/> */}

//       </div>
//     );

// };

// export default Home;

















import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import UserProducts from "./UserProducts";
import Verify from "../components/Verify";
import TabooOrganics from "./TabooOrganics";
import User from "../components/User";
import Footer from "./Footer";
// import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import BestSelling from "../components/BestSelling";
// import supabase from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../supabaseClient";
import FetchApi from "../api/FetchApi";
import ProductCard from "../components/ProductLayout/ProductLayout";
import AutoScrollingHero from "../api/FetchApi";
import ProductList from "../api/FetchApi";
import UserNav from "../components/UserNav";

const Home = () => {
  return (
    <div>
      {/* <FetchApi /> */}
       {/* <userNav/> */}
       <UserNav/>

      <AutoScrollingHero/>
{/* <ProductList/> */}
      {/* <ProductCard/> */}

<User/>
<Footer/>

    </div>
  );
};

export default Home;
