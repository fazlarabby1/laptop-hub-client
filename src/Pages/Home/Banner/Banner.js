import React from 'react';
import img1 from '../../../assets/images/dell-banner.jpeg';
import img2 from '../../../assets/images/HP-banner.jpg';
import img3 from '../../../assets/images/asus-banner.jpg';
import BannerItem from '../BannerItem/BannerItem';

const Banner = () => {
    const bannerData = [
        {
            img: img1,
            id: 1,
            next: 2,
            prev: 3
        },
        {
            img: img2,
            id: 2,
            next: 3,
            prev: 1
        },
        {
            img: img3,
            id: 3,
            next: 1,
            prev: 2
        },
    ]
    return (
        <div className="carousel w-full h-[450px] md:h-[700px] py-10">
            {
                bannerData.map(data => <BannerItem key={data.id} data={data}></BannerItem>)
            }
        </div>
    );
};

export default Banner;