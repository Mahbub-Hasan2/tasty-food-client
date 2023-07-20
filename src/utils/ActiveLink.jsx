import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const ActiveLink = ({ text, ...attributes }) => {
    let { pathname } = useLocation();

    return (
        <NavLink
            className={({ isActive, isPending }) =>
                `${isPending ? "text-red" : isActive ? "text-primary" :
                    pathname === "/" ? "text-gray-50 hover:bg-gray-900" : "text-gray-900 hover:bg-gray-50"}
                block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-primary md:p-0`
            }
            {...attributes}
        >
            {text}
        </NavLink>
    );
};

export default ActiveLink;