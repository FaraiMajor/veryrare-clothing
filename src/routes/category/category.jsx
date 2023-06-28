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

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
            <Footer />
        </Fragment>
    );
};

export default Category;