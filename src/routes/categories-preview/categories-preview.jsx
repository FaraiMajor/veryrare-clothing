import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview';
import Footer from '../../components/footer/footer';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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