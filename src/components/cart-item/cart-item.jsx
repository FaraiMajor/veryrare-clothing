import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartItemContainer, ItemDetails, RemoveItem } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;

    const { clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
            <RemoveItem onClick={clearItemHandler}>
                &#10005;
            </RemoveItem>
        </CartItemContainer>
    );
};

export default CartItem;
