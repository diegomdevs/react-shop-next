import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import Image from 'next/image';

const MobileMenu = () => {
  const { toggleMenuMobile, toggleOrder } = useContext(AppContext);
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <Image src={close} alt="close" className={styles['mobile-menu-close']} onClick={() => toggleMenuMobile()} />
        <li>
          <Link href="">CATEGORIES</Link>
        </li>
        <li>
          <Link href="">All</Link>
        </li>
        <li>
          <Link href="">Clothes</Link>
        </li>
        <li>
          <Link href="">Electronics</Link>
        </li>
        <li>
          <Link href="">Furnitures</Link>
        </li>
        <li>
          <Link href="">Toys</Link>
        </li>
        <li>
          <Link href="">Others</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link onClick={() => toggleOrder()}>My orders</Link>
        </li>
        <li>
          <Link href="/account">My accounts</Link>
        </li>
      </ul>
      <ul className={styles['mobile-menu-email-and-sign-out']}>
        <li>
          <Link href="/" className={styles['mobile-menu-email']}>
            platzi@example.com
          </Link>
        </li>
        <li>
          <Link className={styles['mobile-menu-sign-out']} href="/login">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
