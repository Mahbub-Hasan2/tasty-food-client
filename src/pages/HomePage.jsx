import React, { Suspense, lazy } from 'react';
import Header from '../components/Home/Header';
import Menu from '../components/Home/Menu';
import Gallery from '../components/Home/Gallery';
import Spinner from '../utils/Spinner';

const Chefs = lazy(() => import('../components/Home/Chefs')); // Lazy-loaded

const HomePage = () => {

    return (
        <div className="">
            <Header />
            <Menu />
            <Suspense fallback={<Spinner/>}>
                <Chefs />
            </Suspense>
            <Gallery />
        </div>
    );
};

export default HomePage;