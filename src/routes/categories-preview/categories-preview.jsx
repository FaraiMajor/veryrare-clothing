import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview';
import Spinner from '../../components/spinner/spinner';

import {
    selectCategoriesMap,
    selectIsLoading,
} from '../../store/categories/categories.selector';

import Footer from '../../components/footer/footer';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsLoading);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                })
            )}
            <Footer />
        </Fragment>
    );
};

export default CategoriesPreview;