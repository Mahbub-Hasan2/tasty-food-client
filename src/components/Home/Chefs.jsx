import React, { useEffect, useState } from 'react';
import Chef from './chef';
import Spinner from '../../utils/Spinner';

const Chefs = ({about}) => {
    const [chefs, setChefs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://tasty-food-server-nine.vercel.app/chefs`);
            const jsonData = await response.json();
            setChefs(jsonData);
            setLoading(false); // set loading to false when data is fetched
        }
        fetchData();
    }, []);

console.log(about)
    return (
        <div className='pb-20 md:px-0 px-2'>
            <div className="container mx-auto md:px-20">
                <div className={`mb-10  ${about === true ? "text-center text-light pt-10" : "md:text-start text-center"}`}>
                    <h3 className="text-primary text-xl font-semibold mb-2">OUR TEAM</h3>
                    <h2 className=" md:text-4xl text-2xl font-bold mb-3">Specialized Chefs</h2>
                </div>
                <div className="">{loading ? (
                    <Spinner />
                ) : (
                    <div className="grid grid-cols-6 gap-5">
                        {chefs?.chefs.map(chef => <Chef key={chef.id} chefData={chef} />)}
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default Chefs;