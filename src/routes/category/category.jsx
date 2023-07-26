import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card';
import Footer from '../../components/footer/footer';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, CategoryTitle, LabelSelect, TopElement } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
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
            {/* {isLoading ? (
                <Spinner />
            ) : ( */}
            <CategoryContainer>
                {products.data &&
                    products.data.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </CategoryContainer>
            {/* )} */}
            <Footer />
        </Fragment>
    );
};

export default Category;