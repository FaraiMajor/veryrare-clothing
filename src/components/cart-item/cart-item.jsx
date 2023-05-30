import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import './cart-item.scss';

const CartItem = ({ cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;

    const { clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
            <div className="remove-el" onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CartItem;
