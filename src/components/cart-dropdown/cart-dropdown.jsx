import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems, selectCartTotal, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
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
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)
    const isCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    const handleMouseEnter = () => dispatch(setIsCartOpen(isCartOpen));

    const handleMouseLeave = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartDropdownContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
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
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.base}
                    onClick={goToCheckoutHandler}
                >
                    View Bag & Checkout
                </Button>
            </CheckoutEl>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
