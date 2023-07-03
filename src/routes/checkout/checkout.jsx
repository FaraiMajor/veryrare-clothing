import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    selectCartItems,
    selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import PaymentForm from "../../components/payment-form/payment-form";
import Footer from '../../components/footer/footer';
import ShoppingBags from '../../assets/shopping-bags.png'

import {
    CheckoutContainer,
    Total, CheckoutMainContainer,
    EmptyBagButton,
    EmptyBag,
    CardSection,
} from './checkout.styles';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const navigate = useNavigate();

    const goToShopHandler = () => {
        navigate('/shop');
    };

    return (
        <>
            <CheckoutMainContainer>
                {cartItems.length ? (
                    <CheckoutContainer>
                        <span className='bag-title'>Your Bag</span>
                        {cartItems.map((cartItem) => (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        ))}
                        <Total>TOTAL: ${cartTotal}</Total>
                    </CheckoutContainer>
                ) : (
                    <EmptyBag>
                        <img src={ShoppingBags} width='60' />
                        <p>Your Shopping Bag is empty.</p>
                        <EmptyBagButton onClick={goToShopHandler}>Continue Shopping</EmptyBagButton>
                    </EmptyBag>
                )}
                <CardSection>
                    <PaymentForm />
                    <details>
                        <summary>Click here for Card Instructions</summary>
                        <h3>Hey, your friendly developer here!</h3>
                        <h4>USE THIS TEST CARD:</h4>
                        <p><span>Card Number :</span> 4242 4242 4242 4242</p>
                        <p><span>Expirey Data :</span> 12/29</p>
                        <p><span>CVC :</span> 424</p>
                    </details>
                </CardSection>
            </CheckoutMainContainer >
            <Footer />
        </>
    );
};

export default Checkout;