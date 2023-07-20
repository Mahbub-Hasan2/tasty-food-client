import React from 'react';
import { Outlet } from 'react-router-dom';
import PageTitleOverlay from '../../components/shared/PageTitleOverlay';

const AuthPage = () => {
    return (
        <div>
            <PageTitleOverlay />
            {/* {location.pathname === "/auth" ?  */}
            <Outlet />
            {/* // : 
            // <Login/>
            // } */}
            

        </div>
    );
};

export default AuthPage;