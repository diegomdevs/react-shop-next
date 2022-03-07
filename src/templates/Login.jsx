import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Login.module.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={styles.Login}>
      <div className={styles['Login-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <form ref={form} action="/" className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className={styles['input input-email']} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={styles['input input-password']} />
          <Link href="/">
            <button onClick={handlerSubmit} className={styles['primary-button-login-button']}>
              Log in
            </button>
          </Link>
          <a href="/new-password">Forgot my password</a>
        </form>
        <Link href="/signup">
          <button className={styles['secondary-button signup-button']}>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
