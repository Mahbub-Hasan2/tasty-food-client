import React from 'react';
import ContactForm from './ContactForm';
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
// import SocialLinks from '../shared/SocialLinks';

const ContactCom = () => {
  return (
    <div className='px-2'>
      <div className="grid grid-cols-10 md:px-16 md:gap-20 gap-5">

        <div className="md:col-span-5 col-span-10 grid content-center">
          <h3 className="text-4xl text-gray-700 font-extrabold font-poppins">Get In Touch</h3>
          <p className="text-base text-gray-600 font-poppins py-2 font-medium">
            I'd love to hear from you. Whether you have a question or just want to say hi, feel free to drop a message. I'll try my best to get back to you!
          </p>
          <div className="py-5">
            <div className="flex gap-3 mb-2 text-gray-600 hover:text-primary cursor-pointer">
              <p className="grid content-center">
                <MdLocationOn className='text-xl' />
              </p>
              <p className='text-base font-inter '>Sylhet, Bangladesh</p>
            </div>
            <div className="flex gap-3 mb-2 text-gray-600 hover:text-primary cursor-pointer">
              <p className="grid content-center">
                <IoCall className='text-xl' />
              </p>
              <p className='text-base font-inter '>+8801966945992</p>
            </div>
            <div className="flex gap-3 text-gray-600 hover:text-primary cursor-pointer">
              <p className="grid content-center">
                <IoMdMail className='text-xl' />
              </p>
              <p className='text-base font-inter '>
                <a href="mailto:mahbubdev1@gmail.com" target="_blank" rel="noopener noreferrer">mahbubdev1@gmail.com</a>
              </p>
            </div>
          </div>
          
          {/* <div className="w-auto sm:w-96">
            <SocialLinks/>
          </div> */}
        </div>

        <div className="md:col-span-5 col-span-10 md:grid ">
          <div className="bg-white  w-auto border p-5 rounded-xl shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCom;