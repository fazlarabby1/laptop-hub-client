import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <div className='mx-10'>
                <Banner></Banner>
            </div>
            <Categories></Categories>
        </div>
    );
};

export default Home;