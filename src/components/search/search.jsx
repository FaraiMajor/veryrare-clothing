import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/categories.selector';
import SearchResult from '../../routes/search-results/search-result';

const Search = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const results = [];

            // Iterate through each category in the categoriesMap
            Object.keys(categoriesMap).forEach((category) => {
                const products = categoriesMap[category];

                // Filter products based on the search term
                const filteredProducts = products.filter((product) =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );

                // Add filtered products to the results array
                results.push(...filteredProducts);
            });

            setSearchResults(results);
            navigate('/search-results', { state: { searchResults } }); // Navigate to the search results page and pass searchResults as state
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={handleSearch} // Handle search when Enter key is pressed
                placeholder="Search products..."
            />
            <SearchResult searchResults={searchResults} />
        </div>
    );
};

export default Search;
