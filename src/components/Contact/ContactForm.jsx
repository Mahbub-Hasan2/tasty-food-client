import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {

    const formRef = useRef(null);
    const emailInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        

        setLoading(true);
        emailjs
            .sendForm(
                "service_jfpzp9a", // email-js service-Id (here use google)
                "template_1d74zxa", // email-js template Id
                e.target,
                "tj4zchgaAjf2dL760" // email-js user Id
            )
            .then(
                (result) => {
                    setLoading(false);
                    formRef?.current?.reset();
                    alert("Mail send successfully");
                },
                (error) => {
                    setLoading(false);
                    alert(error.text);
                }
            );
    };


    return (
        <div>
            <form
                ref={formRef}
                onSubmit={sendEmail}
            >
                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input type="text" name="name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                    <br />
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address *</label>
                    <input name="email" ref={emailInputRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    <br />
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message *</label>
                    <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                </div>
                <button type="submit" className="md:w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;