import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className='mb-5 shadow-lg border-t-4 border-primary sm:p-5 p-2'>
            <h2 className="text-xl mb-2 font-poppins font-semibold">{blog.q}</h2>
            <p className="text-base font-roboto">{blog.a}</p>
        </div>
    );
};

export default Blog;