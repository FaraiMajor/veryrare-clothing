import { useSelector } from 'react-redux';

import {
    selectCartItems,
    selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import Footer from '../../components/footer/footer';

import { CheckoutContainer, Total } from './checkout.styles';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <>
            <CheckoutContainer>
                <span className='bag-title'>Your Bag</span>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <Total>TOTAL: ${cartTotal}</Total>
            </CheckoutContainer>
            <Footer />
        </>
    );
};

export default Checkout;