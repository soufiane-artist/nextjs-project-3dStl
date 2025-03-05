'use client';
import styles from '@/app/styles/Checkout.module.css';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaPaypal, FaCreditCard, FaLock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import AddtoCard from '@/app/components/AddtoCard';

export default function Checkout() {
    const router = useRouter();
    const [selectedPayment, setSelectedPayment] = useState(null);

    const {user} = useSelector((state) => state.auth.user);

    const [model,setModel] = useState()

    const { id } = useParams();

    useEffect(()=>{ 
        const getModel = async () => {
            await axios.get('http://localhost:2002/api/models/'+ id)
            .then((res) => {
                setModel(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
        getModel();
    },[id])

    const productDetails = {
        title: 'T-60 POWER ARMOR HELMET',
        price: '4.99 $',
        image: 'https://file.pixup3d.com/uploads/post_img/file/67693/x3_(750-750)_ET-Huang-%E6%8A%B1%E8%85%BF%E7%95%B0%E5%BD%A2%20(1).gif'
    };

    const handlePaypalPayment = () => {
        setSelectedPayment('paypal');
        // Implement PayPal payment logic
        console.log('Processing PayPal payment...');
        router.push('/login');

    };

    const handleCardPayment = () => {
        router.push('/login');
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
                                src={model?.images[0]}
                                alt={model?.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.productDetails}>
                            <h3>{model?.title}</h3>
                            <span className={styles.price}>{model?.price.toFixed(2)} $</span>
                        </div>
                    </div>
                    <div className={styles.totalSection}>
                        <span>Total:</span>
                        <span className={styles.price}>{model?.price.toFixed(2)} $</span>
                    </div>
                </div>

                <div className={styles.paymentMethods}>
                    <h2>Payment Method</h2>
                    {model && <AddtoCard model={model} price={model?.price.toFixed(2)} />}
                    {!user?._id && <div className={styles.paymentOptions}>
                        <button 
                            className={`${styles.paymentButton} ${styles.paypalButton}`}
                            onClick={handlePaypalPayment}
                        >
                            <FaPaypal size={24} />
                            Pay with PayPal
                        </button>
                        <button 
                            className={`${styles.paymentButton} ${styles.creditCardButton}`}
                            onClick={handleCardPayment}
                        >
                            <FaCreditCard size={24} />
                            Pay with Credit Card
                        </button>
                    </div>}
                </div>

                <div className={styles.secureNote}>
                    <FaLock className={styles.secureIcon} />
                    <span>Your payment information is secure and encrypted</span>
                </div>
            </div>
        </div>
    );
}