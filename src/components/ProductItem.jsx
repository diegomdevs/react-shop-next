import React, { useContext } from 'react';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartImg from '@icons/bt_add_to_cart.svg';
import addedToCartImg from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      {<img src={product?.images[0]} width={240} height={240} alt={product?.title} />}
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          {state.cart.includes(product) ? (
            <Image onClick={() => handleClick(product)} className={styles.added} width={50} height={50} src={addedToCartImg} alt="" />
          ) : (
            <Image onClick={() => handleClick(product)} src={addToCartImg} alt="" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
