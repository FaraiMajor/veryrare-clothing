import React from 'react';

import Button from '../button/button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown-container'>
        <div className='cart-items' />
        <Button>View Bag & Checkout</Button>
    </div>
);

export default CartDropdown;