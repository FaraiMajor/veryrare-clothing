import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ProductCard from '../product-card/product-card';
import { MainContainer, Container, LabelSelect, TopElement, NoResults } from './search-results.styles';
import Footer from '../footer/footer';
// import NoResultImage from '../../assets/nores.jpeg'
import Navigation from '../../routes/navigation/navigation';

const SearchResult = () => {
    const location = useLocation();
    const { searchResults, searchTerm } = location.state;
    const [sortBy, setSortBy] = useState('');

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortProducts = (products, sortBy) => {
        let sortedProducts = [...products];

        if (sortBy === 'nameAZ') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'nameZA') {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === 'priceLowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'priceHighToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        return sortedProducts;
    };

    const sortedResults = sortProducts(searchResults, sortBy);

    return (
        <>
            <MainContainer>
                <Navigation />
                <TopElement>
                    <p className='searchtitle'>SEARCH RESULTS</p>
                    <LabelSelect>
                        <label>Sort by</label>
                        <select value={sortBy} onChange={handleSortByChange}>
                            <option value="">Filters</option>
                            <option value="nameAZ">Name (A-Z)</option>
                            <option value="nameZA">Name (Z-A)</option>
                            <option value="priceLowToHigh">Price (Low to High)</option>
                            <option value="priceHighToLow">Price (High to Low)</option>
                        </select>
                    </LabelSelect>
                </TopElement>
                <Container>
                    {sortedResults.length > 0 ? (
                        sortedResults.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <NoResults>
                            <p className='noresults'>Sorry pal, we couldn't find : <span>{searchTerm}</span></p>
                            {/* <img src={NoResultImage} alt='no result' width="60%" /> */}
                        </NoResults>
                    )}
                </Container>

            </MainContainer>
            <Footer />
        </>
    );
};

export default SearchResult;
