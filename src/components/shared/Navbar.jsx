import React, { useState } from 'react';
import logo from "../../assets/images/logo-light-1.png";
import logopal from "../../assets/images/pal-new-logo.png";
import { NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../../Layouts/AuthContextProvider';
import { getAuth, signOut } from "firebase/auth";
import app from '../Auth/firebase.init';
import { toast } from 'react-toastify';
import ActiveLink from '../../utils/ActiveLink';

const Navbar = () => {
    const auth = getAuth(app);
    let { pathname } = useLocation();

    const [open, setOpen] = useState(false);
    const { userInfo, setUserInfo } = React.useContext(AppContext);

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserInfo(null);
            toast.success("Sign-out successful.", {
                position: "bottom-left",
            });
        }).catch((error) => {
            // An error happened.
            toast.error("An error happened.", {
                position: "bottom-left",
            });
        });

    }
    return (
        <div>

            <nav className={`${pathname === "/" ? "bg-gray-900" : "bg-gray-50"} border-gray-200 `}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    <NavLink to="/" className="flex items-center">
                        <img src={pathname === "/" ? logo : logopal} className="h-10 scale-110 mr-3" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </NavLink>
                    <div className="relative flex items-center md:order-2">
                        <div className="">
                            <div className="flex gap-3 items-center">
                                {userInfo?.email || userInfo?.displayName && 
                                    <div className="group">
                                        <button type="button" className="w-8 h-8 flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-full h-full rounded-full" src={userInfo?.photoURL} alt="user photo" />
                                        </button>
                                        {/* <!-- Dropdown menu --> */}
                                        <div className={`absolute right-full top-3 z-50 ${pathname === "/" ? "bg-light" : "bg-light"}  group-hover:block hidden my-4 text-base list-none  divide-y rounded-lg shadow`} id="user-dropdown">
                                            <div className="px-4 py-3">
                                                <span className="block text-sm text-gray-900 ">{userInfo?.displayName}</span>
                                                <span className="block text-sm  text-gray-500 truncate ">{userInfo?.email}</span>
                                            </div>
                                            <ul className="py-2" aria-labelledby="user-menu-button">

                                                <li>
                                                    <button onClick={logOut} className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                                {userInfo?.email || userInfo?.displayName  ?
                                    <button onClick={logOut} className={`${pathname === "/" ? "text-light" : "text-gray-900"} px-5 py-1 font-bold uppercase  border-2 border-primary sm:block hidden `}>Sign out</button>
                                    :
                                    <NavLink to="/auth/login" state={{ route: "Login", page: "Auth" }}>
                                        <button className={`${pathname === "/" ? "text-light" : "text-gray-900"} px-5 py-1 font-bold uppercase  border-2 border-primary`}>Log In</button>
                                    </NavLink>
                                }

                            </div>


                        </div>
                        <button onClick={() => setOpen(!open)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${open ? 'block' : "hidden"} w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
                        <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 ${pathname === "/" ? "bg-gray-900 md:bg-gray-900 " : "bg-gray-50"} rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 `}>
                            <li>
                                <ActiveLink text="Home" to="/" />
                            </li>
                            <li>
                                <ActiveLink text="Blogs" to="/blogs" state={{ route: "Blogs", page: "Home" }}  />
                            </li>
                            <li>
                                <ActiveLink text="About Us" to="/about" state={{ route: "About Us", page: "Home" }}  />
                            </li>
                            <li>
                                <ActiveLink text="Contact" to="/contact"  state={{ route: "Contact Us", page: "Home" }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;