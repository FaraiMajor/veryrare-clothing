import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';


import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
    CheckoutEl,
    TotalEl,
    CartTotal
} from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <CheckoutEl>
                <CartTotal>
                    Your Bag Total: <TotalEl>${cartTotal}</TotalEl>
                </CartTotal>
                <Button onClick={goToCheckoutHandler}>View Bag & Checkout</Button>
            </CheckoutEl>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
