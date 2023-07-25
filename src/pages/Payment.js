import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements
} from "@stripe/react-stripe-js";
import '../css/Payment.css'
import { Form, Container } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const stripePromise = loadStripe('pk_test_51NEZa7LOBLmJUZqser1WkR2oFqFkR1zYrJYUaIbeGgYWVIOL7n4gxwKVIcIYhDQR3UCyh9stRpexvTfcETVMEDo6003t7gDSSU')
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));

        if (!stripe) {
          return;
        }
    
        const clientSecret = new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
        );
    
        if (!clientSecret) {
          return;
        }
    
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Payment succeeded!");
              break;
            case "processing":
              setMessage("Your payment is processing.");
              break;
            case "requires_payment_method":
              setMessage("Your payment was not successful, please try again.");
              break;
            default:
              setMessage("Something went wrong.");
              break;
          }
        });
      }, [stripe]);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js hasn't yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
    
        setIsLoading(true);
    
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:3000",
          },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
          } else {
            setMessage("An unexpected error occurred.");
          }
      
          setIsLoading(false);
        };
      
        const paymentElementOptions = {
          layout: "tabs"
        }

        const appearance = {
            theme: 'stripe',
          };
          const options = {
            clientSecret,
            appearance,
          };

  return (
    <>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <Container fliud className="d-flex flex-column p-0 m-0">
                    <Form className="payment-form" onSubmit={handleSubmit}>
                        <PaymentElement id="payment-element" options={paymentElementOptions} />
                            <button disabled={isLoading || !stripe || !elements} id="submit">
                                <span id="button-text">
                                {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                                </span>
                            </button>
                            {/* Show any error or success messages */}
                            {message && <div id="payment-message">{message}</div>}
                    </Form>
                </Container>
        </Elements>
        )}
    </>
  )
}

export default Payment