import React from 'react';
import errorimg from "../assets/images/404.webp"

const ErrorPage = () => {
    return (
        <div className='container mx-auto relative'>
            <img className="w-full" src={errorimg} alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* <h1 className="text-4xl font-semibold text-center text-primary">404</h1>
                <h2 className="text-2xl font-semibold text-center text-primary">Page Not Found</h2> */}
                <button className="px-5 py-3 bg-primary">
                    <a href="/" className="text-white">Back to Home</a>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;