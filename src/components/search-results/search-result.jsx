import React from 'react';
import { useLocation } from 'react-router-dom';

import ProductCard from '../product-card/product-card';
import { Container } from './search.styles';

const SearchResult = () => {
    const location = useLocation();
    const { searchResults } = location.state;
    return (
        <Container>
            {searchResults && searchResults.length > 0 ? (
                searchResults?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))

            ) : (
                <p>No results found.</p>
            )}

        </Container>
    );
};

export default SearchResult;
