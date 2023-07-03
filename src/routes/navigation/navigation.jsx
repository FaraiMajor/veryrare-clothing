import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { theme } from './theme';
import Burger from '../navigation/burger-menu/burger';
import Menu from '../navigation/menu/menu'
import FocusLock from 'react-focus-lock';

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import Diamond from '../../assets/diamond-svg.png'

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';


import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
} from './navigation.styles';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    const handleMouseEnter = () => setOpen(true);
    const handleMouseLeave = () => setOpen(false);
    const closeMenu = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (

        <Fragment>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <div ref={node} >
                        <FocusLock disabled={!open}>
                            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                            <Menu open={open} setOpen={setOpen} id={menuId}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={closeMenu}
                            />
                        </FocusLock>
                    </div>
                    <LogoContainer to='/'>
                        <img className='logo' alt='site logo' src={Diamond} />
                        <h1 className='logo-text'>VERYRARE</h1>
                    </LogoContainer>
                    <NavLinks>
                        <NavLink to='/shop'>
                            FEATURED
                        </NavLink>
                        {currentUser ? (
                            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>SIGN IN</NavLink>
                        )}
                        <CartIcon />

                    </NavLinks>
                    {isCartOpen && <CartDropdown />}
                </NavigationContainer>
                <Outlet />
            </ThemeProvider>
        </Fragment>
    );
};

export default Navigation;