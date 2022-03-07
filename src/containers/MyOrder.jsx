import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';
import useSumTotal from '@hooks/useSumTotal';
import arrow from '@icons/flechita.svg';
import Image from 'next/image';
import Link from 'next/link';

const MyOrder = () => {
  const { state, toggleOrder } = useContext(AppContext);

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={arrow} alt="arrow" onClick={() => toggleOrder()} />
        <p className={styles.title}>My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, index) => (
          <OrderItem key={`orderItem-${product.id}-${index}`} product={product} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${useSumTotal(state.cart)}</p>
        </div>
        <Link className={styles['primary-button']} href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
