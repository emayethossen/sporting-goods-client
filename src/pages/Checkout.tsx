import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import { useCreatePaymentIntentMutation } from '../redux/features/paymentApi';

const stripePromise = loadStripe('pk_test_51NHkNyIkBo7JLvUgZdJSESlph30fudUcdTNVT2bEvCqI908q6UkMn6TxTflxIccs77KqRnMsHUguIX1uXtus9O2U008D8fSYI6');

const Checkout = () => {
  const location = useLocation();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Use RTK Query to fetch createPaymentIntent mutation
  const [createPaymentIntent, { data, isLoading, isError }] = useCreatePaymentIntentMutation();

  useEffect(() => {
    const total = location.state?.total || 0;
    setTotalPrice(total);

    // Call the createPaymentIntent API using RTK Query
    if (total > 0) {
      createPaymentIntent(total);
    }
  }, [location.state, createPaymentIntent]);

  useEffect(() => {
    if (data) {
      setClientSecret(data.clientSecret);
    }
  }, [data]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Failed to load payment information. Please try again.</p>
      ) : clientSecret && totalPrice > 0 ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} totalPrice={totalPrice} />
        </Elements>
      ) : (
        <p>No payment information available.</p>
      )}
    </div>
  );
};

export default Checkout;
