import React from 'react';
import styles from '@styles/SendEmail.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import Link from 'next/link';
import Image from 'next/image';

const SendEmail = () => {
  return (
    <div className={styles.SendEmail}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <div className={styles['email-image']}>
          <Image src={email} alt="email" />
        </div>
        <Link href="/login">
          <button className={styles['primary-button login-button']}>Login</button>
        </Link>
        <p className={styles.resend}>
          <span>Didn't receive the email?</span>
          <a href="/send-email">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
