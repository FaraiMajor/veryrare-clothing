import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card";
import { ProductsContext } from '../../contexts/products.context';

import './shop.scss'

export default function Shop() {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};