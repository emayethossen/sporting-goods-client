import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

interface CheckoutFormProps {
  clientSecret: string;
  totalPrice: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret, totalPrice }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setIsProcessing(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      setIsProcessing(false);
      toast.error(`Payment failed: ${error.message}`);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      toast.success('Payment successful!');
      // Optionally, redirect or clear the cart:
      setTimeout(() => {
        // Redirect to confirmation or order success page
        window.location.href = '/order-success'; // Example
      }, 2000); // Delay for 2 seconds before redirect
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Total: ${totalPrice.toFixed(2)}</h2>
      <div className="mb-4">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={isProcessing}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
