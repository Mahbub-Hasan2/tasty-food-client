import React, { useEffect, useState } from 'react';
import { BsFillStarFill } from "react-icons/bs";
import { IoMdCart } from 'react-icons/io';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from './Recipe';

const Recipes = ({chef, data}) => {

    return (
        <div className='pb-20 bg-gray-100 px-2'>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-normal text-gray-600 mb-10">All posts by <span className="underline">{chef?.name}</span></h2>

                <div className="">
                    {data && data.map((item, i) => <Recipe key={i} data={item} />)}
                </div>
            </div>


        </div>
    );
};

export default Recipes;