import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan2,
    BaseSpan,
    Quantity,
    RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));


    return (
        <CheckoutItemContainer >
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <ButtonGroup>
                    <Badge color="secondary" badgeContent={quantity}>
                        <ShoppingCartIcon />{" "}
                    </Badge>
                    <Button onClick={addItemHandler}>
                        {" "}
                        <AddIcon fontSize="small" />

                    </Button>
                    <Button onClick={removeItemHandler}>
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
                <BaseSpan2>${price}</BaseSpan2>
                <RemoveButton onClick={clearItemHandler}>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </RemoveButton>
            </Quantity>
        </CheckoutItemContainer >
    )
}
export default CheckoutItem;
{/* &#10005; */ }