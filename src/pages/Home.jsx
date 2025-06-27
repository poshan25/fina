// import React, { useEffect, useState } from "react";
// import Nav from "./Nav";
// import UserProducts from "./UserProducts";
// import Verify from "../components/Verify";
// import TabooOrganics from "./TabooOrganics";
// import User from "../components/User";
// import Footer from "./Footer";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import BestSelling from "../components/BestSelling";
// import supabase from "../supabaseClient";

// // import BestSelling from '../components/BestSelling'

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const [session, setSession] = useState(null);
//   // useEffect(() => {
//   //   supabase.auth.getSession().then(({ data: { session } }) => {
//   //     setSession(session);
//   //   });
//   //   const {
//   //     data: { subscription },
//   //   } = supabase.auth.onAuthStateChange((_event, session) => {
//   //     setSession(session);
//   //   });
//   //   return () => subscription.unsubscribe();
//   // }, []);
//   useEffect(() => {
//   const saveUserProfile = async () => {
//     if (session?.user) {
//       // Check if user already exists in user_profiles
//       const { data: existingUser, error: fetchError } = await supabase
//         .from('user_profiles')
//         .select('*')
//         .eq('user_id', session.user.id)
//         .single();

//       if (fetchError && fetchError.code !== 'PGRST116') {
//         console.log('Error fetching user profile:', fetchError);
//         return;
//       }

//       if (!existingUser) {
//         // Insert new user
//         const { error: insertError } = await supabase.from('user_profiles').insert({
//           user_id: session.user.id,
//           email: session.user.email,
//           full_name: session.user.user_metadata.full_name,  // Google sends this
//         });

//         if (insertError) {
//           console.log('Error saving user profile:', insertError);
//         } else {
//           console.log('User profile saved successfully!');
//         }
//       } else {
//         console.log('User already exists in user_profiles.');
//       }
//     }
//   };

//   saveUserProfile();
// }, [session]);

//   console.log(session?.user?.email);

//   const signOut = async () => {
//     const { error } = await supabase.auth.signOut();
//   };

//   const signUp = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });
//   };

//   if (!session) {
//     return (
//       <>
//         {/* <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} /> */}
//         <button onClick={signUp}>signin with google</button>
//       </>
//     );
//   } else {
//     return (
//       <div>
//         <h2>Welcome, {session?.user?.email}</h2>
//         <button onClick={signOut}>signout</button>
//       </div>
//     );
//   }

//   // return (
//   //   <div >

//   //       {/* <Nav/> */}
//   //       {/* <UserProducts/> */}
//   //       <TabooOrganics/>
//   //       <BestSelling/>
//   //       <User searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//   //       {/* <BestSelling/> */}
//   //       <Footer/>
//   //       {/* <Verify/> */}
//   //   </div>
//   // )
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

const Home = () => {
  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);


//   useEffect(() => {
//   const saveUserProfile = async () => {
//     if (session?.user) {
//       const { data: existingUser, error: fetchError } = await supabase
//         .from('user_profiles')
//         .select('*')
//         .eq('user_id', session.user.id)
//         .single();

  //     if (existingUser) {
//         console.log('User already exists.');
//         return;
//       }

//       if (fetchError && fetchError.code !== 'PGRST116') {
//         console.log('Fetch error:', fetchError);
//         return;
//       }

//       const { error: insertError } = await supabase.from('user_profiles').insert({
//         user_id: session.user.id,
//         email: session.user.email,
//         full_name: session.user.user_metadata.full_name,
//       });

//       if (insertError) {
//         console.log('Insert error:', insertError);
//       } else {
//         console.log('Profile saved!');
//       }
//     }
//   };

//   saveUserProfile();
// }, [session]);

  // useEffect(() => {
  //   const saveUserProfile = async () => {
  //     if (session?.user) {
  //       const { data: existingUser, error: fetchError } = await supabase
  //         .from('user_profiles')
  //         .select('*')
  //         .eq('user_id', session.user.id)
  //         .single();

  //       if (fetchError && fetchError.code !== 'PGRST116') {
  //         console.log('Error fetching user profile:', fetchError);
  //         return;
  //       }

  //       if (!existingUser) {
  //         const { error: insertError } = await supabase.from('user_profiles').insert({
  //           user_id: session.user.id,
  //           email: session.user.email,
  //           full_name: session.user.user_metadata.full_name,
  //         });

  //         if (insertError) {
  //           console.log('Error saving user profile:', insertError);
  //         } else {
  //           console.log('User profile saved successfully!');
  //         }
  //       } else {
  //         console.log('User already exists in user_profiles.');
  //       }
  //     }
  //   };

  //   saveUserProfile();
  // }, [session]);

  // const signOut = async () => {
  //   await supabase.auth.signOut();
  // };

  // const signUp = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //   });
  // };

  // if (!session) {
  //   return (
  //     <>
  //       <button onClick={signUp}>Signin with Google</button>
  //     </>
  //   );
  // } else {
    return (
      <div>
        {/* <h2>Welcome, {session.user.email}</h2>
        <button onClick={signOut}>Signout</button> */}
          {/* <Nav/>  */}
       <userNav/> 
    <TabooOrganics/>
    <BestSelling/>
    <User/>
      {/* <User searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
     {/* <BestSelling/> */}
     <Footer/>
   {/* <Verify/> */}
      </div>
    );
  
};

export default Home;
