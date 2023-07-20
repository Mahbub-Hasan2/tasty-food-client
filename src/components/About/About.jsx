import React from 'react';
import AboutImg from "../../assets/images/about/abolut-img-2.png";
import signature from "../../assets/images/about/about-signature1-1.png";

const About = () => {
    return (
        <div className="container mx-auto px-5">
            <div className="py-20">
                <div className="grid grid-cols-2">
                    <div className="md:col-span-1 col-span-2">
                        <img src={AboutImg} alt="" className="" />
                    </div>
                    <div className="md:col-span-1 col-span-2  flex items-center text-center">
                        <div className="md:p-5 shadow-lg border-t-4 border-primary">
                            <h3 className="text-xl font-bold text-primary mb-4">WELCOME TO PALM PLAZA</h3>
                            <h2 className="text-3xl font-bold">We Are A Modern Italian Restaurant In The Center Of The City</h2>
                            <p className="text-gray-600 py-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <h className="text-xl text-inherit font-semibold">” Coming to us for a lunch or a dinner should feel just as comfortable, as having one at home “</h>
                            <div className="flex items-center justify-center py-5">
                                <img src={signature} alt="" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;