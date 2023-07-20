import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { RiRestaurant2Fill } from "react-icons/ri";
import { MdOutlineWorkHistory } from "react-icons/md";

const Benner = ({data}) => {
    return (
        <div className='bg-gray-100'>
            <div className="container mx-auto">
                <div className="sm:flex md:gap-8 gap-2 py-10 max-w-3xl mx-auto items-center">
                    <div className="flex  sm:justify-normal justify-center">
                        <div className="w-24 h-24">
                            <img className="rounded-full w-full h-full border-light border-4 object-contain" src={data?.picture} alt="" />
                        </div>
                    </div>
                    <div className="sm:text-start text-center">
                        <div className="sm:flex gap-3 mb-1">
                            <div className="flex sm:justify-normal justify-center items-center gap-2">
                                <FaUserAlt className='text-primary' />
                                <p className="font-semibold">{data?.name}</p>
                            </div>
                            <div className="flex sm:justify-normal justify-center items-center gap-2">
                                <MdOutlineWorkHistory className='text-primary' />
                                <p className="font-semibold"> {data?.experience} years of experience</p>
                            </div>
                        </div>
                        <p className="text-base font-medium pt-2 text-gray-500">{data?.bio}</p>
                        <div className="sm:flex gap-3 mt-2">
                            <div className="flex sm:justify-normal justify-center items-center gap-2">
                                <BiLike className='text-primary' />
                                <p className="font-semibold">{data?.likes} Likes</p>
                            </div>
                            <div className="flex sm:justify-normal justify-center items-center gap-2">
                                <RiRestaurant2Fill className='text-primary' />
                                <p className="font-semibold"> {data?.num_recipes} recipes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benner;