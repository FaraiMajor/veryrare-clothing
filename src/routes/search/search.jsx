import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';

import {
    SearchContainer,
    Overlay,
    Icon,
    InputField,
    SearchDropdown,
    SearchIcon,
    InputBoxContainer,
} from './search.styles';

const Search = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = () => {
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
        // navigate('/search-results', { state: { searchResults, searchTerm } });
    };

    useEffect(() => {
        if (searchTerm || searchResults.length > 0) {
            navigate('/search-results', { state: { searchResults, searchTerm } });
        }
    }, [navigate, searchResults, searchTerm]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchTerm(searchFieldString);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
            setSearchTerm('');
            setIsOpen(false);
        }
    };
    useEffect(() => {
        if (searchTerm) {
            // Delay the search execution after a short interval (e.g., 300ms) to prevent immediate search on each key press
            const timeoutId = setTimeout(handleSearch, 3000);

            // Cleanup the timeout when the component unmounts or when the search term changes
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [searchTerm]);

    return (

        <SearchContainer>
            <Icon onClick={handleToggleDropdown}>
                <svg viewBox="0 0 512 512" class="ionicon" xmlns="http://www.w3.org/2000/svg">
                    <title>Search</title>
                    <path stroke-width="32" stroke-miterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                    <path d="M338.29 338.29L448 448" stroke-width="32" stroke-miterlimit="10" stroke-linecap="round" stroke="currentColor" fill="none"></path>
                </svg>
            </Icon>
            {isOpen && (
                <>
                    <SearchDropdown>
                        <InputBoxContainer>
                            <SearchIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                </path>
                            </SearchIcon>

                            <InputField
                                type='text'
                                value={searchTerm}
                                onChange={onSearchChange}
                                onKeyDown={handleKeyDown} // Handle search when Enter key is pressed
                                placeholder="Search For Products"
                            />
                        </InputBoxContainer>
                    </SearchDropdown>
                    <Overlay onClick={handleToggleDropdown} />
                </>
            )}
        </SearchContainer>

    );
};

export default Search;
