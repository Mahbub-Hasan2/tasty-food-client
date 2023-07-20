import React from 'react';
import { IoMdCart } from "react-icons/io";
import shop1 from "../../assets/images/shop/1.jpg"
import shop2 from "../../assets/images/shop/2.jpg"
import shop3 from "../../assets/images/shop/3.jpg"
import shop4 from "../../assets/images/shop/4.jpg"

import type1 from "../../assets/images/type/icon-1.png";
import type2 from "../../assets/images/type/icon-2.png";
import type3 from "../../assets/images/type/icon-3.png";
import type4 from "../../assets/images/type/icon-4.png";
import type5 from "../../assets/images/type/icon-5.png";
// import shop5 from "../../assets/images/shop/5.jpg"

const Menu = () => {

    return (
        <div className='md:mb-40 md:px-0 px-2'>
            <div className="container relative mx-auto lg:px-20 md:pb-20 pb-14 md:pt-20 pt-5">
                <div className="grid grid-cols-7">
                    <div className="md:col-span-2 col-span-7 pr-5 md:p-0 px-2 pb-5 md:text-start text-center">
                        <h3 className="uppercase text-xl text-primary font-semibold mb-2">Menu</h3>
                        <h2 className=" text-3xl text-gray-900 font-bold">Delicious Food</h2>
                        <p className="text-base text-gray-500 leading-7 py-5">Part of the secret of success in life is to eat what you like and let the food fight it out inside.</p>
                        <h4 className="cursor-pointer text-primary font-bold text-base underline uppercase">Read More</h4>
                    </div>
                    <div className="md:col-span-5 col-span-7">
                        <div className="grid grid-cols-4">
                            <div className="relative overflow-hidden col-span-4 md:col-span-1 group cursor-pointer md:mb-0 mb-1">
                                <img src={shop1} alt="" className="object-contain group-hover:scale-110 h w-fullover:transition-all ease-out delay-150 duration-300" />
                                <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-transparent via-amber-5 to-black">
                                    <button className="absolute top-0 right-0 border-2 border-primary rounded-full p-1 mt-3 mr-3 group-hover:bg-primary hover:transition-all ease-out delay-150 duration-300">
                                        <IoMdCart className='text-4xl text-light p-2  bg-gray-800 rounded-full' />
                                    </button>
                                    <div className="m-2 absolute inset-x-0 bottom-4 group-hover:bottom-9 hover:transition-all ease-out delay-150 duration-300">
                                        <hr className="h-0.5 bg-light w-1/2 group-hover:w-2/3 hover:transition-all ease-out delay-150 duration-300" />
                                        <h2 className="text-light text-xl font-semibold group-hover:text-primary hover:transition-all ease-out delay-150 duration-300">Chicken Soup</h2>
                                        <p className="text-primary font-semibold text-[17px] opacity-0 group-hover:opacity-100 hover:transition-all ease-out delay-150 duration-300">$10.50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden col-span-4 md:col-span-1 group cursor-pointer md:mb-0 mb-1">
                                <img src={shop2} alt="" className="object-contain w-full group-hover:scale-110 hover:transition-all ease-out delay-150 duration-300" />
                                <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-transparent via-amber-5 to-black">
                                    <button className="absolute top-0 right-0 border-2 border-primary rounded-full p-1 mt-3 mr-3 group-hover:bg-primary hover:transition-all ease-out delay-150 duration-300">
                                        <IoMdCart className='text-4xl text-light p-2  bg-gray-800 rounded-full' />
                                    </button>
                                    <div className="m-2 absolute inset-x-0 bottom-4 group-hover:bottom-9 hover:transition-all ease-out delay-150 duration-300">
                                        <hr className="h-0.5 bg-light w-1/2 group-hover:w-2/3 hover:transition-all ease-out delay-150 duration-300" />
                                        <h2 className="text-light text-xl font-semibold group-hover:text-primary hover:transition-all ease-out delay-150 duration-300">Chicken Soup</h2>
                                        <p className="text-primary font-semibold text-[17px] opacity-0 group-hover:opacity-100 hover:transition-all ease-out delay-150 duration-300">$10.50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden col-span-4 md:col-span-1 group cursor-pointer md:mb-0 mb-1">
                                <img src={shop3} alt="" className="object-contain w-full group-hover:scale-110 hover:transition-all ease-out delay-150 duration-300" />
                                <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-transparent via-amber-5 to-black">
                                    <button className="absolute top-0 right-0 border-2 border-primary rounded-full p-1 mt-3 mr-3 group-hover:bg-primary hover:transition-all ease-out delay-150 duration-300">
                                        <IoMdCart className='text-4xl text-light p-2  bg-gray-800 rounded-full' />
                                    </button>
                                    <div className="m-2 absolute inset-x-0 bottom-4 group-hover:bottom-9 hover:transition-all ease-out delay-150 duration-300">
                                        <hr className="h-0.5 bg-light w-1/2 group-hover:w-2/3 hover:transition-all ease-out delay-150 duration-300" />
                                        <h2 className="text-light text-xl font-semibold group-hover:text-primary hover:transition-all ease-out delay-150 duration-300">Chicken Soup</h2>
                                        <p className="text-primary font-semibold text-[17px] opacity-0 group-hover:opacity-100 hover:transition-all ease-out delay-150 duration-300">$10.50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden col-span-4 md:col-span-1 group cursor-pointer md:mb-0 mb-1">
                                <img src={shop4} alt="" className="object-contain w-full group-hover:scale-110 hover:transition-all ease-out delay-150 duration-300" />
                                <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-transparent via-amber-5 to-black">
                                    <button className="absolute top-0 right-0 border-2 border-primary rounded-full p-1 mt-3 mr-3 group-hover:bg-primary hover:transition-all ease-out delay-150 duration-300">
                                        <IoMdCart className='text-4xl text-light p-2  bg-gray-800 rounded-full' />
                                    </button>
                                    <div className="m-2 absolute inset-x-0 bottom-4 group-hover:bottom-9 hover:transition-all ease-out delay-150 duration-300">
                                        <hr className="h-0.5 bg-light w-1/2 group-hover:w-2/3 hover:transition-all ease-out delay-150 duration-300" />
                                        <h2 className="text-light text-xl font-semibold group-hover:text-primary hover:transition-all ease-out delay-150 duration-300">Chicken Soup</h2>
                                        <p className="text-primary font-semibold text-[17px] opacity-0 group-hover:opacity-100 hover:transition-all ease-out delay-150 duration-300">$10.50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* manu type  */}
                <div className="w-full">
                    <div className="md:absolute static -bottom-10  m-auto left-0 right-0">
                        <div className=" grid grid-cols-5 shadow-lg max-w-4xl mx-auto">
                            <div className="md:col-span-1 col-span-5 md:inline flex gap-3 items-center md:py-8 md:border-none border cursor-pointer p-3 text-center hover:bg-primary bg-light group">
                                <div className="flex justify-center items-center md:px-14">
                                    <img src={type1} alt="" className="md:max-w-[60px] max-w-[40px] object-contain pb-1.5" />
                                </div>
                                <h3 className="text-gray-900 group-hover:text-light  uppercase text-base font-semibold">Dinner</h3>
                            </div>
                            <div className="md:col-span-1 col-span-5 md:inline flex gap-3 items-center md:py-8 md:border-none border cursor-pointer p-3 text-center hover:bg-primary bg-light group">
                                <div className="flex justify-center items-center md:px-14">
                                    <img src={type2} alt="" className="md:max-w-[60px] max-w-[40px] object-contain pb-1.5" />
                                </div>
                                <h3 className="text-gray-900 group-hover:text-light  uppercase text-base font-semibold">Dinner</h3>
                            </div>
                            <div className="md:col-span-1 col-span-5 md:inline flex gap-3 items-center md:py-8 md:border-none border cursor-pointer p-3 text-center hover:bg-primary bg-light group">
                                <div className="flex justify-center items-center md:px-14">
                                    <img src={type3} alt="" className="md:max-w-[60px] max-w-[40px] object-contain pb-1.5" />
                                </div>
                                <h3 className="text-gray-900 group-hover:text-light  uppercase text-base font-semibold">Dinner</h3>
                            </div>
                            <div className="md:col-span-1 col-span-5 md:inline flex gap-3 items-center md:py-8 md:border-none border cursor-pointer p-3 text-center hover:bg-primary bg-light group">
                                <div className="flex justify-center items-center md:px-14">
                                    <img src={type4} alt="" className="md:max-w-[60px] max-w-[40px] object-contain pb-1.5" />
                                </div>
                                <h3 className="text-gray-900 group-hover:text-light  uppercase text-base font-semibold">Dinner</h3>
                            </div>
                            <div className="md:col-span-1 col-span-5 md:inline flex gap-3 items-center md:py-8 md:border-none border cursor-pointer p-3 text-center hover:bg-primary bg-light group">
                                <div className="flex justify-center items-center md:px-14">
                                    <img src={type5} alt="" className="md:max-w-[60px] max-w-[40px] object-contain pb-1.5" />
                                </div>
                                <h3 className="text-gray-900 group-hover:text-light  uppercase text-base font-semibold">Dinner</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;