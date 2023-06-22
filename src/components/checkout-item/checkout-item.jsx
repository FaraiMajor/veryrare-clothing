import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <CheckoutItemContainer >
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Badge color="secondary" badgeContent={quantity}>
                    <ShoppingCartIcon />{" "}
                </Badge>
                <ButtonGroup>
                    <Button onClick={addItemHandler}>
                        {" "}
                        <AddIcon fontSize="small" />

                    </Button>
                    <Button onClick={removeItemHandler}>
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>

        </CheckoutItemContainer >
    )

}
export default CheckoutItem;