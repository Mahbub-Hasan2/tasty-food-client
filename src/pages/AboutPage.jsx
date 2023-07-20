import React from 'react';
import PageTitleOverlay from '../components/shared/PageTitleOverlay';
import About from '../components/About/About';
import Chefs from '../components/Home/Chefs';
import imga from "../assets/images/sliders/pp_slider1.jpg"


const AboutPage = () => {
    return (
        <div>
            <PageTitleOverlay />
            <About />
            <div className="relative md:mb-[1000px] mb-[4000px]">
                <div className="h-96">
                    <img src={imga} alt="" className='object-cover h-full w-full' />
                </div>
                <div className="absolute top-0">
                    <Chefs about={true} />
                </div>
            </div>

        </div>
    );
};

export default AboutPage;