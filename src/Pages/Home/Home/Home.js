import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/advertisedproducts`)
            .then(res => setAdvertisedProducts(res.data))
    }, [])
    return (
        <div>
            <div className='mx-10'>
                <Banner></Banner>
            </div>
            <Categories></Categories>

            {advertisedProducts.length > 0 &&
                    <AdvertisedProducts advertisedProducts={advertisedProducts}></AdvertisedProducts>
            }

            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;