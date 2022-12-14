import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Checkout = ({ product }) => {
    const { name, _id, price, email, productId } = product;

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
            method: "POST",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
                'content-type': "application/json",
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data =>
                setClientSecret(data.clientSecret)
            );
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('')
        }

        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            const paymentInfo = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
                productId
            }
            fetch(`${process.env.REACT_APP_API_URL}/payments`, {
                method: 'POST',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`,
                    'content-type': 'application/json',
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                    toast.success('Your payment is successful');
                })
        }
        setProcessing(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm px-7 mt-5 btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-600'>{cardError}</p>
            {
                success &&
                <div>
                    <p className="text-green-500">{success}</p>
                    <p>Your transactionId is: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default Checkout;