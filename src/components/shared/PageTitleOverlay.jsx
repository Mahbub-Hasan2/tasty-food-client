import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleOverlay = ({data}) => {
    let {state} = useLocation();
    let {pathname} = useLocation();

    return (
        <div className="bg-[url('../../assets/images/page-title-main.jpg')] w-full bg-cover bg-start bg-fixed  text-light">
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-3xl text-light font-bold ">{data?.name ? data?.name :( "Home " + pathname)}</h2>
                <p className="py-3 flex gap-3 justify-center text-base font-semibold">
                    <span className="text-light">{state?.page}</span> - <span className="text-primary">{state?.route}</span>
                </p>
            </div>
        </div>
    );
};

export default PageTitleOverlay;