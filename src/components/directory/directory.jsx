import React from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from '../slideshow/slider';
import DirectoryItem from '../directory-item/directory-item'
import Footer from '../footer/footer';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { DirectoryContainer, BannerContainer, CategoryBodyContainer } from './directory.styles';

const categories = [
    {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/fpZD3wb/diordior.jpg',
        route: 'shop/hats',
    },
    {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/Zh85Pxd/moncler.jpg',
        route: 'shop/jackets',
    },
    {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/MnjwRDz/jays.jpg',
        route: 'shop/sneakers',
    },
    {
        id: 4,
        title: 'womens',
        imageUrl: 'https://i.ibb.co/WGvcm3w/winnie.webp',
        route: 'shop/womens',
    },
    {
        id: 5,
        title: 'mens',
        imageUrl: 'https://i.ibb.co/tp78mrd/shai.webp',
        route: 'shop/mens',
    },
];

const Directory = () => {
    const navigate = useNavigate();
    const goToShopHandler = () => {
        navigate('/shop');
    };

    return (
        <>
            <BannerContainer>
                <Slider className='slider' />
                <CategoryBodyContainer>
                    <h2>Best Collection in the Whole World</h2>
                    <span>It’s time to step outside your color comfort zone. Our collection is truly our of this world</span>
                    <button className="btn-white" onClick={goToShopHandler}>Shop Now</button>
                </CategoryBodyContainer>
            </BannerContainer >
            <DirectoryContainer>
                {categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))}
            </DirectoryContainer>
            <Footer />
        </>
    );
};

export default Directory;