import React from 'react';
import { BiLike } from 'react-icons/bi';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import iconChef from "../../assets/images/icons/team-icon.png";
import LazyLoad from 'react-lazy-load';

const Chef = ({ chefData }) => {
    return (
        <div className="col-span-6 lg:col-span-2 md:col-span-3 mb-16 mt-20">
            <div className="relative">
                <div className="w-full h-full">
                    <LazyLoad  offset={100}>
                        <img src={chefData.picture} alt="" className="object-cover w-full" />
                    </LazyLoad>
                </div>
                <div className="absolute -bottom-32 w-full">
                    <div className="bg-[url('../../assets/images/icons/team-icon.png')]   bg-no-repeat  bg-right w-[92%] mx-3.5 px-5 py-3 flex justify-between border-b-2 border-primary bg-light ">
                        <div className="">
                            <h2 className="font-bold text-xl text-gray-900 mb-2">{chefData.name}</h2>
                            <p className="text-sm font-bold uppercase text-gray-500">{chefData.experience} Years of experience</p>
                        </div>
                        {/* <img src={iconChef} alt="" className="w-16 h-16 object-contain" /> */}
                    </div>
                    <div className="bg-light grid grid-cols-3 border-b-2 border-primary">
                        <div className="text-center py-5">
                            {/* <h2 className="text-2xl font-extrabold text-primary">05</h2> */}
                            <div className="flex justify-center items-center mb-2">
                                <RiRestaurant2Fill className="text-2xl font-extrabold text-primary" />
                            </div>
                            <h3 className="text-sm font-medium uppercase leading-4 text-gray-500">{chefData.num_recipes} recipes</h3>
                        </div>
                        <div className="text-center py-5">

                            <div className="flex justify-center mb-2">
                                <BiLike className="text-2xl font-extrabold text-primary" />
                            </div>
                            <h3 className="text-sm font-medium uppercase leading-4 text-gray-500">{chefData.likes} Likes</h3>
                        </div>
                        <div className="text-center py-5 h-full flex items-center">
                            {/* <CiViewBoard className="text-2xl font-extrabold text-primary" /> */}
                            <Link to={`/chef/${chefData.id}`} state={{ title: "Munir Uddin Mahbub", route: "Chef Information", page: "Chef" }}>
                                <button className="bg-primary text-light px-2 py-2">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chef;