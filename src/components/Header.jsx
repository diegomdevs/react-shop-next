import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleMenu, toggleOrder } = useContext(AppContext);

  return (
    <div className="Header">
      <nav className={styles.Nav}>
        <img src={menu.src} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href="/" passHref>
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']}>
              <button className={styles['navbar-email-buttom']} onClick={() => toggleMenu()}>
                platzi@example.com
              </button>
            </li>
            <li className={styles['navbar-shopping-cart']}>
              <Image src={shoppingCart} alt="shopping cart" onClick={() => toggleOrder()} />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.isMenuOpen && <Menu />}
        {state.isOrderOpen && <MyOrder />}
      </nav>
    </div>
  );
};

export default Header;
