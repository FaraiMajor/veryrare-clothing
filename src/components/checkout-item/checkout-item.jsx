import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import './checkout-item.scss'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart, cartTotal } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
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
            </span>
            <span className="price">${price}</span>
            {/* <div className="prices">


                <span>Total ${cartTotal}</span>
            </div> */}
            <div className="remove-button" onClick={clearItemHandler}>
                &#10005;
            </div>

        </div>
    )

}
export default CheckoutItem;