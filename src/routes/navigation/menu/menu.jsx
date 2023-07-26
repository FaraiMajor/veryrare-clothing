import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, NavLink, TopMenu, BottomMenu } from './menu.styles.jsx';

const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <TopMenu>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/shop/mens'>
                    Men
                </NavLink>
                <NavLink to='/shop/womens'>
                    Women
                </NavLink>
                <NavLink to='/shop/sneakers'>
                    Sneakers
                </NavLink>
                <NavLink to='/shop/jackets'>
                    Jackets
                </NavLink>
                <NavLink to='/shop/hats'>
                    Hats
                </NavLink>
            </TopMenu>
            <BottomMenu>
                <hr
                    style={{
                        color: 'black',
                        height: '0.01px',
                        width: '100%',
                    }}
                />
                <NavLink to='/auth'>
                    Sign In
                </NavLink>
                <NavLink to='/shop'>
                    Featured
                </NavLink>
                <NavLink to='/checkout'>
                    Checkout
                </NavLink>
            </BottomMenu>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;