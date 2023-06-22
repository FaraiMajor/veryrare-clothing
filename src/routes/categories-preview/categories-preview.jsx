import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import Footer from '../../components/footer/footer';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
            <Footer />
        </Fragment>
    );
};

export default CategoriesPreview;