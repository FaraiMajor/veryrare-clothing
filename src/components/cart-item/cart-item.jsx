import { useDispatch, useSelector } from 'react-redux';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import {
    clearItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { CartItemContainer, ItemDetails, RemoveItem } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));

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
                <DeleteForeverOutlinedIcon />
            </RemoveItem>
        </CartItemContainer>
    );
};

export default CartItem;
