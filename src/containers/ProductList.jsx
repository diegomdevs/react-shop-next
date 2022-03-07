import React, { useContext } from 'react';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';
import useGetProducts from '@hooks/useGetProducts';
import MobileMenu from '@components/MobileMenu';
import AppContext from '@context/AppContext';

const API = 'https://api.escuelajs.co/api/v1/products/';

const ProductList = () => {
  const products = useGetProducts(API);
  const { state } = useContext(AppContext);
  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {state.isMenuMobile && <MobileMenu />}
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
        ;
      </div>
    </section>
  );
};

export default ProductList;
