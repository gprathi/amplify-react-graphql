import { useState, useEffect } from 'react';

const Checkout = () => {
  const [showEmbedded, setShowEmbedded] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  const handleError = (error) => {
    console.log(JSON.stringify(error));
  };

  const handleCancel = () => {
    console.log("Payment cancelled");
  };

  const initCheckout = () => {
    Checkout.configure({
      session: {
        id: "<your_initiate_checkout_session_ID>",
      },
    });
  };

  useEffect(() => {
    initCheckout();
  }, []);

  return (
    <>
      {showEmbedded && <div id="embed-target"></div>}

      {showPaymentPage && <Checkout.ShowPaymentPage />}

      <button
        onClick={() => {
          setShowEmbedded(true);
          Checkout.showEmbeddedPage("#embed-target");
        }}
      >
        Pay with Embedded Page
      </button>

      <button
        onClick={() => {
          setShowPaymentPage(true);
          Checkout.ShowPaymentPage();
        }}
      >
        Pay with Payment Page
      </button>
    </>
  );
};

export default Checkout;
