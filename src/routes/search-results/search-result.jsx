import React from 'react';

import ProductCard from '../../components/product-card/product-card';
import { Container } from './search.styles';

const SearchResult = ({ searchResults }) => {
    const results = searchResults?.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))
    return (
        <Container>
            {/* {searchResults && searchResults.length > 0 ? ( */}
            {results}

            {/* ) : (
                <p>No results found.</p>
            )} */}

        </Container>
    );
};

export default SearchResult;
