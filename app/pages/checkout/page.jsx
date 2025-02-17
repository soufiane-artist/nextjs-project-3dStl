'use client';
import styles from '@/app/styles/Checkout.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { FaPaypal, FaCreditCard, FaLock } from 'react-icons/fa';

export default function Checkout() {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const productDetails = {
        title: 'T-60 POWER ARMOR HELMET',
        price: '4.99 $',
        image: 'https://file.pixup3d.com/uploads/post_img/file/67693/x3_(750-750)_ET-Huang-%E6%8A%B1%E8%85%BF%E7%95%B0%E5%BD%A2%20(1).gif'
    };

    const handlePaypalPayment = () => {
        setSelectedPayment('paypal');
        // Implement PayPal payment logic
        console.log('Processing PayPal payment...');
    };

    const handleCardPayment = () => {
        setSelectedPayment('card');
        // Implement credit card payment logic
        console.log('Processing card payment...');
    };

    return (
        <div className={styles.container}>
            <div className={styles.checkoutContainer}>
                <div className={styles.header}>
                    <h1>Secure Checkout</h1>
                    <p className={styles.subtitle}>Complete your purchase securely</p>
                </div>

                <div className={styles.orderSummary}>
                    <h2>Order Summary</h2>
                    <div className={styles.productInfo}>
                        <div className={styles.productImage}>
                            <img
                                src={productDetails.image}
                                alt={productDetails.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.productDetails}>
                            <h3>{productDetails.title}</h3>
                            <span className={styles.price}>{productDetails.price}</span>
                        </div>
                    </div>
                    <div className={styles.totalSection}>
                        <span>Total:</span>
                        <span className={styles.price}>{productDetails.price}</span>
                    </div>
                </div>

                <div className={styles.paymentMethods}>
                    <h2>Payment Method</h2>
                    <div className={styles.paymentOptions}>
                        <button 
                            className={`${styles.paymentButton} ${styles.paypalButton}`}
                            onClick={handlePaypalPayment}
                        >
                            <FaPaypal size={24} />
                            Pay with PayPal
                        </button>
                        <button 
                            className={`${styles.paymentButton} ${styles.cardButton}`}
                            onClick={handleCardPayment}
                        >
                            <FaCreditCard size={24} />
                            Pay with Credit Card
                        </button>
                    </div>
                </div>

                <div className={styles.secureNote}>
                    <FaLock className={styles.secureIcon} />
                    <span>Your payment information is secure and encrypted</span>
                </div>
            </div>
        </div>
    );
}