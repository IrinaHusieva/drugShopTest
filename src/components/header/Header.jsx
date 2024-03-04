import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css'

const Header = () => {
    return (
        <header className={css.header}>
            <nav>
                <ul className={css.list}>
                    <li className={css.item}><Link to='/drugShopTest/shop'>Shop</Link></li>
                    <li className={css.item}><Link to='/drugShopTest/cart'>Shopping Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
