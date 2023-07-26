import { createContext, useState, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    clearCart: () => { }, // Adding clearCart to the initial context
    cartCount: 0,
    cartTotal: 0,
});

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
    CLEAR_CART: 'CLEAR_CART', // Adding the new action type for clearing the cart
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CART_ACTION_TYPES.CLEAR_CART: // Handling the new action type to clear the cart
            return {
                ...state,
                cartItems: [],
                cartCount: 0,
                cartTotal: 0,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
        cartReducer,
        INITIAL_STATE
    );

    const updateCartItemsReducer = (cartItems) => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );

        const payload = {
            cartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal,
        };

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    };

    const clearCart = () => {
        const newCartItems = [];
        updateCartItemsReducer(newCartItems);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        clearCart,
        cartItems,
        cartCount,
        cartTotal,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
