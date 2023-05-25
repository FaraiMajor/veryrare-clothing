import React from 'react';
import Slider from '../../components/slideshow/slider';
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory';
import './home.scss'

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
    ];

    return (
        <>
            <div className='banner-container'>
                {/* <img className='banner-image' src={Banner} /> */}
                <Slider className='slider' />
                <div className='category-body-container'>
                    <h2>Best Collection in the Whole World</h2>
                    <span>It’s time to step outside your color comfort zone. Our collection is truly our of this world</span>
                    <p>Shop Now</p>
                </div>
            </div >
            <Directory categories={categories} />;
            <Outlet />
        </>
    )
};

export default Home;