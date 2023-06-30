import { useSelector } from 'react-redux';

import {
    selectCartItems,
    selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import PaymentForm from "../../components/payment-form/payment-form";
import Footer from '../../components/footer/footer';

import { CheckoutContainer, Total, CheckoutMainContainer } from './checkout.styles';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <>
            <CheckoutMainContainer>
                <CheckoutContainer>
                    <span className='bag-title'>Your Bag</span>
                    {cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))}
                    <Total>TOTAL: ${cartTotal}</Total>
                </CheckoutContainer>
                <PaymentForm />
            </CheckoutMainContainer>
            <Footer />
        </>
    );
};

export default Checkout;