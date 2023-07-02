import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, NavLink } from './menu.styles.jsx';

const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <NavLink to='/'>
                <span aria-hidden="true"></span>
                Home
            </NavLink>
            <NavLink to='/shop/mens'>
                <span aria-hidden="true"></span>
                Men
            </NavLink>
            <NavLink to='/shop/womens'>
                <span aria-hidden="true"></span>
                Women
            </NavLink>
            <NavLink to='/shop/sneakers'>
                <span aria-hidden="true"></span>
                Sneakers
            </NavLink>
            <NavLink to='/shop/jackets'>
                <span aria-hidden="true"></span>
                Jackets
            </NavLink>
            <NavLink to='/shop/hats'>
                <span aria-hidden="true"></span>
                Hats
            </NavLink>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;