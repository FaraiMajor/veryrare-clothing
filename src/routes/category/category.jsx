import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card';
import Spinner from '../../components/spinner/spinner';
import Footer from '../../components/footer/footer';

import {
    selectCategoriesMap,
    selectIsLoading,
} from '../../store/categories/categories.selector';

import { CategoryContainer, CategoryTitle, LabelSelect, TopElement } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('')
    const [products, setProducts] = useState({
        data: categoriesMap[category],
        sortOption: '', // Initially no sorting option selected
        filterOption: '', // Initially no filtering option selected
    });

    useEffect(() => {
        setProducts({
            data: categoriesMap[category],
            sortOption: '',
            filterOption: '', // Reset the filtering option when the category changes
        });
    }, [category, categoriesMap]);


    const handleSortChange = (event) => {
        const sortOption = event.target.value;
        let sortedProducts = [...products.data];

        if (sortOption === 'nameAZ') {
            sortedProducts = sortedProducts.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (sortOption === 'nameZA') {
            sortedProducts = sortedProducts.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        } else if (sortOption === 'priceLowToHigh') {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceHighToLow') {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        }

        setProducts({ ...products, data: sortedProducts, sortOption });
    };

    // const filterByPriceRange = (minPrice, maxPrice) => {
    //     const filteredProducts = products.data.filter(
    //         (product) => product.price >= minPrice && product.price <= maxPrice
    //     );
    //     setProducts({
    //         ...products,
    //         data: filteredProducts,
    //         filterOption: `priceRange-${minPrice}-${maxPrice}`,
    //     });
    // };

    const clearFilters = () => {
        setProducts({
            ...products,
            data: categoriesMap[category],
            filterOption: '',
        });
    };


    return (
        <Fragment>
            <TopElement>
                <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
                <LabelSelect>
                    <label className="text">Sort by</label>
                    <select onChange={handleSortChange}>
                        <option value="">Filters</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="nameAZ">Name (A-Z)</option>
                        <option value="nameZA">Name (Z-A)</option>

                    </select>
                </LabelSelect>
            </TopElement>
            {/* <div>
                <label>Min Price:</label>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <label>Max Price:</label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button onClick={() => filterByPriceRange(minPrice, maxPrice)}>
                    Apply Price Filter
                </button>
            </div> */}
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products.data &&
                        products.data.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
            <Footer />
        </Fragment>
    );
};

export default Category;