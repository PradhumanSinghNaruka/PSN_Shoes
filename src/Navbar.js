// import React from 'react'
// import { useState, useEffect } from 'react';
// import Login from './Login';
// import Logout from './Logout';
// import Contact from './Contact';
// import Pradhuman from './Pradhuman';
// import { useAuth } from './context/AuthProvider';
// import {Link} from "react-scroll";
// import { CiMenuFries } from "react-icons/ci";
// import { IoCloseSharp } from "react-icons/io5";

// function Navbar() {
//   const [authUser, setAuthUser] = useAuth();

//   const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light")
//   const element = document.documentElement;
//   useEffect(()=>{
//     if(theme === "dark"){
//       element.classList.add("dark");
//       localStorage.setItem("theme","dark")
//       document.body.classList.add("dark");
//     }else{
//       element.classList.remove("dark");
//       localStorage.setItem("theme","light")
//       document.body.classList.remove("dark");
//     }
//   },[theme])

//   // const darkMode = ()=>{
//   //   const setdarkMode = () => {
//   //     document.querySelector("body").setAttribute('data-theme', 'dark')
//   //   }
//   //   const setlightMode = () => {
//   //     document.querySelector("body").setAttribute('data-theme', 'light')
//   //   }
//   //   const toggleTheme = e => {
//   //     if(e.target.checked) setdarkMode();
//   //     else setlightMode();
//   //   } ;
//   // }
  
//     // let Links =[
//     //     {name:"Home",link:"/"},
//     //     {name:"Men",link:"/"},
//     //     {name:"Women",link:"/"},
//     //     {name:"About",link:"/"}
//     // ]
//     const [menu , setMenu]=useState(false);
//     const navItems = [
//       {
//         id: 1,
//         text: "Home",
//       },
//       {
//         id: 2,
//         text: "Men",
//       },
//       {
//         id: 3,
//         text: "Premium",
//       },
//       {
//         id: 4,
//         text: "Contact",
//       },
//       {
//         id: 5,
//         text: "About",
//       },
//     ]
//   return(
//     <>
//         <div className={"max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50"}>
//             <div>
//             <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="flex justify-between items-center h-16">
//       <div onClick={()=>setMenu(!menu)} className="md:hidden"> 
//           {menu?<IoCloseSharp size={24} />:<CiMenuFries size={24} />
//           }</div>
//                 <div className="flex space-x-2">
//                   <a className="btn btn-ghost text-xl"onClick={()=>document.getElementById("my_modal_2").showModal()}>shoesSTORE</a>
//                   <Pradhuman />
//                 </div>
//                 <div>
//                     <ul className="hidden md:flex space-x-8 ml-24 font-semibold text-xl">
//                     {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 hover:text-purple-500 duration-300 cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
                    
//                 </div>
//             </div>
//   </div>
//   <div className="navbar-end space-x-4">
//   <div className="hidden md:block">
//   <label className="input input-bordered border-black-500 shadow-violet-500 flex items-center gap-2">
//   <input type="text" className="grow" placeholder="Search" />
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       fillRule="evenodd"
//       d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//       clipRule="evenodd" />
//   </svg>
// </label>
//   </div>
//   <label className="swap swap-rotate">
//   {/* this hidden checkbox controls the state */}
//   <input type="checkbox" className="theme-controller" value="synthwave" />

//   {/* sun icon */}
//   <svg
//     className="swap-off h-7 w-7 mr-2 md:mr-0 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     onClick={() => setTheme(theme === "light" ? "dark" : "light")}  // Corrected onClick
//   >
//     <path
//       d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
//     />
//   </svg>

//   {/* moon icon */}
//   <svg
//     className="swap-on h-7 w-7 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}  // Corrected onClick
//   >
//     <path
//       d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
//     />
//   </svg>
// </label>

//   {
//     authUser? (<Logout/>):
//     (
//       <div className="">
//     <a className="bg-black text-white px-4 py-3 mr-2 md:mr-0 rounded-md hover:bg-violet-700 transition duration-500"
//     onClick={()=>document.getElementById("my_modal_1").showModal()}>
//       Login</a>
//       <Login />
//   </div>
//     )}
// </div>
// </div>


// {menu && (
//           <div className="bg-white">
//             <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 hover:text-green-500 duration-300 font-semibold cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     onClick={() => setMenu(!menu)}
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//             </div>
//         </div>
//     </>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';
import Pradhuman from './Pradhuman';
import { useAuth } from './context/AuthProvider';
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Men" },
    { id: 3, text: "Premium" },
    { id: 4, text: "Contact" },
    { id: 5, text: "About" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="flex justify-between items-center h-16">
              <div onClick={() => setMenu(!menu)} className="md:hidden">
                {menu ? <IoCloseSharp size={24} /> : <CiMenuFries size={24} />}
              </div>
              <div className="flex space-x-2">
                <a className="btn btn-ghost text-xl" onClick={() => document.getElementById("my_modal_2").showModal()}>shoesSTORE</a>
                <Pradhuman />
              </div>
              <div>
                <ul className="hidden md:flex space-x-8 ml-24 font-semibold text-xl">
                  {navItems.map(({ id, text }) => (
                    <li className="hover:scale-105 hover:text-purple-500 duration-300 cursor-pointer" key={id}>
                      <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="navbar-end space-x-4">
            <div className="hidden md:block">
              <label className="input input-bordered border-black-500 shadow-violet-500 flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
              </label>
            </div>

            <div>
              <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" checked={theme === "dark"} onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
                {/* Sun icon */}
                <svg className="swap-off h-7 w-7 mr-2 md:mr-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* Moon icon */}
                <svg className="swap-on h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

            {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  className="bg-black text-white px-4 py-3 mr-2 md:mr-0 rounded-md hover:bg-violet-700 transition duration-500"
                  onClick={() => document.getElementById("my_modal_1").showModal()}
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>

        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 hover:text-green-500 duration-300 font-semibold cursor-pointer" key={id}>
                  <Link onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
