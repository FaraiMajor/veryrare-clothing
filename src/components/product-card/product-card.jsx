import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button';


import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType='inverted' onClick={addProductToCart}>
                Add to cart
            </Button>
        </ProductCartContainer>
    );

};

export default ProductCard;
