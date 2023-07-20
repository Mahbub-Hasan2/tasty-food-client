import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../assets/images/sliders/pp_slider1.jpg";
import slide2 from "../../assets/images/sliders/pp_slider2.jpg";
import slide4 from "../../assets/images/sliders/pp_slider4.jpg";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-zoom';

const sliderData = [
    {
        id: 1,
        smallTitle: 'Welcome to Tasty Food',
        title: 'Up to 50% OFFER',
        image: slide1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        smallTitle: 'Healthy Food Restaurant',
        title: 'Come & Enjoy Our Food',
        image: slide2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 3,
        smallTitle: 'Make Your Life Healthy',
        title: 'Make You Feel Good',
        image: slide4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    }
]



const Header = () => {
    return (
        <div>
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                  }}
            >
                {sliderData.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative md:h-auto h-96">
                            <img src={item?.image} alt="" className="w-full h-full object-cover" />
                            <div className="absolute w-full md:px-5 px-2 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <h3 className="text-secondary md:mb-5 mb-2 font-semibold md:text-2xl">{item.smallTitle}</h3>
                                <h2 className="md:text-6xl text-2xl font-bold text-light">{item.title}</h2>
                                <p className="text-light md:text-xl md:font-semibold md:py-5 py-2">{item.description}</p>
                                <button className="md:px-12 px-7 md:py-3 py-1.5 bg-primary font-bold uppercase text-gray-900">Learn More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Header;