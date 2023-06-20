import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import Footer from '../../components/footer/footer';

import { CheckoutContainer, Total } from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

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