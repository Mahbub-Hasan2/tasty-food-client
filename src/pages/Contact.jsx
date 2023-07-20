import React from 'react';
import ContactCom from '../components/Contact/ContactCom';
import PageTitleOverlay from '../components/shared/PageTitleOverlay';

const Contact = () => {
    return (
        <div className=''>
            <PageTitleOverlay />
            <div className="container mx-auto mt-5">
                <ContactCom />
            </div>
        </div>
    );
};

export default Contact;