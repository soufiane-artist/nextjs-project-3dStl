// add to cart @paypal/react-paypal-js
'use client';
import React, { useState } from 'react';
import { PayPalScriptProvider, FUNDING, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const AddtoCard = ({ price , model }) => {
    const [showButton, setShowButton] = useState(true);
    const router = useRouter()

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "3D Model Purchase", // your description
                    amount: {
                        value: price?.toString(),
                    },
                },
            ],
        });
    };

    const onApprove = async (data, actions) => {
        try {
            const paymentDetails = await actions.order.capture();
            if (paymentDetails.status === 'COMPLETED') {
                console.log('Payment successful');
                toast.success('Your account has been charged successfully');
                setTimeout(()=>{
                    router.push('/pages/confirmer/'+model?._id)
                },2000)
            } else {
                toast.error('Payment was not completed successfully');
            }
        } catch (error) {
            toast.error('An error occurred while processing the payment');
        }
    };

    const createOrderMasterCard = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: price?.toString(),
                    currency_code: 'USD'
                }
            }],
            application_context: {
                shipping_preference: "NO_SHIPPING", // Disable shipping
                user_action: "PAY_NOW" // Direct to payment
            },
            payer: {
                address: {
                    country_code: 'MA' // Change country code as needed
                },
                email_address: "customer@example.com"
            }
        });
    };

    const paypalOptions = {
        'client-id': 'AbEUR2g58x1VH8epFMOdpqqhbDcRdddp4hrR6TKRf6QRdfP19ARDdsjxyn5XulM5MtjjmH2xst69y3qk',
        currency: 'USD',
    };

    return (
        <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                fundingSource={FUNDING.PAYPAL}
                createOrder={createOrder}
                onApprove={onApprove}
            />
            <PayPalButtons
                style={{ layout: "vertical" }}
                fundingSource={FUNDING.CARD}
                createOrder={createOrderMasterCard}
                onApprove={onApprove}
            />
        </PayPalScriptProvider>
    );
};

export default AddtoCard;