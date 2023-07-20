import React, { useEffect, useState } from 'react';
import PageTitleOverlay from '../components/shared/PageTitleOverlay';
import Benner from '../components/ChefDetail/Benner';
import Recipes from '../components/ChefDetail/Recipes';
import { useParams } from 'react-router-dom';
import Spinner from '../utils/Spinner';

const ChefDetail = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://tasty-food-server-nine.vercel.app/recipes/${id}`);
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false); // set loading to false when data is fetched
        }
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner /> // show the spinner when loading is true
            ) : (
                <div className="">
                    <PageTitleOverlay data={data.chef} />
                    <Benner data={data.chef} />
                    <Recipes chef={data.chef} data={data.recipes} />
                </div>
            )}

        </div>
    );
};

export default ChefDetail;