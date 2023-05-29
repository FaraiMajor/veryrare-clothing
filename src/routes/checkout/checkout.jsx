import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import './checkout.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <>

            <div className='checkout-container'>
                <span className='bag-title'>Your Bag</span>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <div className='total'>TOTAL: ${cartTotal}</div>
            </div>
        </>
    );
};

export default Checkout;