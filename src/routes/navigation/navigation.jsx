import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Diamond from '../../assets/diamond-svg.png'

import './navigation.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img className='logo' src={Diamond} />
                    <h1 className='logo-text'>VERYRARE</h1>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;