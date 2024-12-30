import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NHkNyIkBo7JLvUgZdJSESlph30fudUcdTNVT2bEvCqI908q6UkMn6TxTflxIccs77KqRnMsHUguIX1uXtus9O2U008D8fSYI6'); // Replace with your Stripe publishable key

const PaymentForm = ({ clientSecret }) => {
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        if (!stripe || !elements) {
            return; // Stripe.js has not loaded yet
        }

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Customer Name', // Customize with your own customer details
                },
            },
        });

        if (error) {
            setError(error.message);
        } else {
            if (paymentIntent.status === 'succeeded') {
                console.log('Payment successful!');
                // Handle success (e.g., show a success message, redirect, etc.)
            }
        }

        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            {error && <div>{error}</div>}
            <button type="submit" disabled={processing || !stripe}>Pay</button>
        </form>
    );
};

const PaymentPage = () => {
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        // Fetch the client secret from your backend API
        fetch('http://localhost:5000/api/payment/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 5000, currency: 'usd' }),
        })
            .then((response) => response.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    return (
        <div>
            {clientSecret ? (
                <Elements stripe={stripePromise}>
                    <PaymentForm clientSecret={clientSecret} />
                </Elements>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PaymentPage;
