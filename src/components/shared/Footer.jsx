import React from 'react';
// import footerbg from '../../assets/images/footer-main-bg-1.png';
import logo from '../../assets/images/logo-light-1.png';
import { BiPhoneCall, BiLocationPlus } from "react-icons/bi";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-[url('../../assets/images/footer-main-bg-1.png')] w-full bg-cover bg-start  text-light">
            <div className="container mx-auto pb-10 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <div className="p-2">
                        <img src={logo} alt="" className="object-contain" />
                        <p className="py-5">
                            Lorem ipsum dolor sit amet, elit. Aenean ligula eget dolor. Lorem ipsum dolor sit amet, consectetur to adipisicing elit.
                        </p>
                        <img src="https://pharmexa.co.nz/wp-content/uploads/2018/12/Social-Media-Video-Marketing.png" alt="footerImg" className="object-contain py-5" />
                    </div>
                    <div className="p-2">
                        <h3 className="uppercase text-base font-semibold">Recent Posts</h3>
                        <div className="py-4">
                            <h3 className="text-base font-semibold mb-2">Delicious Hot Grilled Chicken Recipes</h3>
                            <p className="text-xs font-bold text-primary mb-4">OCTOBER 4, 2018</p>
                            <h3 className="text-base font-semibold mb-2">Better Fed Than Red Whether Glories</h3>
                            <p className="text-xs font-bold text-primary mb-4">OCTOBER 4, 2018</p>
                            <h3 className="text-base font-semibold mb-2">Trade Pastry Wrap To Coat Fish, Poultry</h3>
                            <p className="text-xs font-bold text-primary mb-4">OCTOBER 4, 2018</p>
                        </div>
                    </div>
                    <div className="p-2">
                        <h3 className="uppercase text-base font-semibold">Popular Posts</h3>
                        <div className="py-4">
                            <div className="flex gap-5 mb-5">
                                <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2018/10/blog-img-4-1-80x80.jpg" alt="" className="object-contain rounded" />
                                <div className="">
                                    <h3 className="text-base font-semibold mb-2">Delicious Hot Grilled Chicken Recipes</h3>
                                    <div className="flex text-xs gap-2 text-gray-400 pt-1.5">
                                        <span className="">
                                            🕗
                                        </span>
                                        <span className="">
                                            OCTOBER 4, 2018
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2018/10/blog-img-1-1-80x80.jpg" alt="" className="object-contain rounded" />
                                <div className="">
                                    <h3 className="text-base font-semibold mb-2">Better Fed Than Red Whether Glories</h3>
                                    <div className="flex text-xs gap-2  text-gray-400 pt-1.5">
                                        <span className="">
                                            🕗
                                        </span>
                                        <span className="">
                                            OCTOBER 4, 2018
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <h3 className="uppercase text-base font-semibold">Contact US</h3>
                        <div className="py-4">
                            <div className="flex gap-3 mb-5">
                                <BiPhoneCall className="text-2xl text-primary" />
                                <p className="text-base">+1 (541) 754-3010</p>
                            </div>
                            <div className="flex gap-3 mb-5">
                                <BiLocationPlus className="text-5xl text-primary" />
                                <p className="text-base">732/21 Second Street, Manchester, King Street, Kingston United Kingdom</p>
                            </div>
                            <div className="flex gap-3 mb-5">
                                <BsFillEnvelopeFill className="text-2xl text-primary" />
                                <p className="text-base">support@palmplaza.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <p className="">
                        Copyrights © 2023 <a href="/" className='text-primary' target="_blank" rel="noopener noreferrer">Palm Plaza</a>. Designed by <a href="https://mahbubdev1.vercel.app" className='text-primary' target="_blank" rel="noopener noreferrer">Munir Uddin Mahbub</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;