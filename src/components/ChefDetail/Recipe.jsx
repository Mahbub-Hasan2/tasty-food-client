import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { toast } from 'react-toastify';

const Recipe = ({ data }) => {
    const { cooking_method, favorite, ingredients, name, rating, img } = data;
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleFavorite = () => {
        setIsFavorite(true);
        toast.success("💝 Added to favorite 💗", {
            position: "bottom-left",
        });
    }

    return (
        <div className="grid grid-cols-8 gap-4 bg-light shadow rounded cursor-pointer mb-5">

            <div className="md:col-span-3 col-span-8 relative">
                <img className="h-60 w-full object-none" src={img} alt="" />
                <div className="absolute items-end inset-x-0 bottom-0 h-full flex justify-between gap-3 bg-gradient-to-b from-transparent via-amber-5 to-black">
                    <div className="text-primary mb-3 ml-4">
                        <div className="flex justify-center">
                            <BsFillStarFill className='text-xl mb-1' />
                        </div>
                        <h2 className="text-sm font-medium">{rating} Rating</h2>
                    </div>
                    <div className="text-primary ">
                        {isFavorite ?
                            <button className="absolute mb-3 bottom-0 right-0 border-2 border-primary rounded-full p-1 mt-3 mr-3 group-hover:bg-primary hover:transition-all ease-out delay-150 duration-300">
                                <MdOutlineFavoriteBorder className='text-4xl text-light p-2  bg-gray-500 rounded-full' />
                            </button>
                            :
                            <button onClick={handleFavorite} className="absolute mb-3 bottom-0 right-0 border-2 border-primary rounded-full p-1 mt-3 mr-3 group-hover:bg-primary hover:transition-all ease-out delay-150 duration-300">
                                <MdOutlineFavoriteBorder className='text-4xl text-light p-2  bg-gray-800 rounded-full' />
                            </button>
                        }

                    </div>
                </div>
            </div>
            <div className="md:col-span-2 col-span-8 sm:col-span-3 py-3 md:px-0 sm:px-2 px-5 pb-0">
                <h2 className="uppercase font-semibold text-primary">ingredients</h2>
                <ol className="list-decimal pl-4">
                    {ingredients?.map((item, index) => (<li key={index} className='font-medium text-gray-600'>{item}</li>))}

                </ol>
            </div>
            <div className="md:col-span-3 sm:col-span-5 col-span-8 py-3 md:px-0 sm:px-2 p-5 pt-">
                <h2 className="uppercase font-semibold text-primary">cooking method</h2>
                <p className="text-gray-600">{cooking_method}</p>
            </div>
        </div>
    );
};

export default Recipe;