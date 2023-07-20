import React from 'react';
import PageTitleOverlay from '../components/shared/PageTitleOverlay';
import Blog from '../components/Blogs/Blog';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Blogs = () => {
    const blogData = [
        {
            id: 1,
            q: "Tell us the differences between uncontrolled and controlled components.",
            a: "In React JS, uncontrolled components are components that have their own internal state and manage their own data, while controlled components are components that receive their data and state from their parent component via props. Uncontrolled components are simpler to set up but harder to manage, while controlled components require more code but offer better control and validation over the data.In summary, uncontrolled components manage their own data and state, while controlled components receive their data and state from their parent component.",
        },
        {
            id: 2,
            q: "How to validate React props using PropTypes",
            a: (<span>
                To validate React props using PropTypes, you can import the PropTypes library from the 'prop-types' package, and add a 'propTypes' object to your component.
                <br /><br />
                In the 'propTypes' object, you can define the expected data type and format for each prop.
                <br /><br />
                If a prop value doesn't match the defined type or format, a warning message will be displayed in the console.
            </span>),
        },
        {
            id: 3,
            q: "Tell us the difference between nodejs and express js.",
            a: (<span>
                Node.js is a JavaScript runtime built on the V8 engine, while Express.js is a web framework built on top of Node.js. <br />

                Node.js provides a platform to run JavaScript code on the server-side, while Express.js provides a set of features and tools for building web applications and APIs using Node.js. <br />

                In summary, Node.js is a runtime environment for executing JavaScript code, while Express.js is a web framework that simplifies building web applications using Node.js. <br />
            </span>),
        },
        {
            id: 4,
            q: "What is a custom hook, and why will you create a custom hook?",
            a: (<span>
                A custom hook is a reusable piece of logic that encapsulates common functionality in a React application. <br />
                <br />
                You would create a custom hook to avoid duplicating code across multiple components, or to abstract away complex logic to make it easier to reuse and maintain. Custom hooks can also make your code more readable and easier to test by separating concerns into self-contained modules.
            </span>)
        }
    ]
    return (
        <div>
            <PageTitleOverlay />
            <div className="container mx-auto flex justify-center">
                <div ref={ref} className='w-full' style={{ width: 800, }} >
                    {/* pdf items  */}
                    <div className="text-center mt-10">
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf} className='uppercase font-semibold text-base px-5 mb-1 py-2 border-2 border-primary'>Generate Pdf</button>}
                        </Pdf>

                        <h1 className='text-xl font-semibold'>Hello Blog Page</h1>
                        <h2 className='text-xl font-semibold text-gray-500 mt-3'>Click on the above button to download this blog page in PDF format.</h2>

                    </div>

                    {/* blog items  */}
                    <div className="px-2 pb-20 pt-10 max-w-3xl mx-auto">
                        {blogData.map((blog) => (
                            <Blog key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;