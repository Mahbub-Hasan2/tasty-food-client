import React, { Component } from "react";
import Slider from "react-slick";

const galleryData = [
    {
        id: 1,
        image: "https://i.ibb.co/6w1jvNX/gallery1.jpg",
        title: "cheese Roll",
    },
    {
        id: 2,
        image: "https://i.ibb.co/vqZCjPn/gallery2.jpg",
        title: "Mix Cupcake",
    },
    {
        id: 3,
        image: "https://i.ibb.co/HGwnf1H/gallery3.jpg",
        title: "Grilled Potato Pizza",
    },
    {
        id: 4,
        image: "https://i.ibb.co/whtHGCH/gallery4.jpg",
        title: "cheese Roll",
    },
    {
        id: 5,
        image: "https://i.ibb.co/LhWGb8g/gallery5.jpg",
        title: "Mix Cupcake",
    },
    {
        id: 6,
        image: "https://i.ibb.co/jDF7n8y/gallery6.jpg",
        title: "Grilled Potato Pizza",
    },
    {
        id: 7,
        image: "https://i.ibb.co/ZgxYT0y/gallery7.jpg",
        title: "cheese Roll",
    },
    {
        id: 8,
        image: "https://i.ibb.co/RSj12Gq/gallery8.jpg",
        title: "Mix Cupcake",
    },
    {
        id: 9,
        image: "https://i.ibb.co/tPvYpmx/gallery9.jpg",
        title: "Grilled Potato Pizza",
    }

]

const Gallery = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-[url('../../assets/images/gallery/gallerybg.jpg')] py-20 w-full bg-cover bg-start  text-light">
            <div className="container mx-auto overflow-hidden">
                <div className="text-center">
                    <h3 className="text-primary tex-xl font-bold">GALLERY</h3>
                    <h2 className="text-light font-bold md:text-4xl text-xl">The Devine Feel of Taste</h2>
                </div>

                <div className="my-10">
                    <Slider {...settings}>
                        {galleryData.map((item, i) => (
                            <div key={i} className="px-0.5">
                                <img src={item.image} alt="" className="" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="">
                    <h2 className="md:text-4xl text-xl text-light font-bold text-center">A person with taste is merely one who recognize the greatest beauty in the simplest things.</h2>
                </div>
            </div>
        </div>
    );
};

export default Gallery;