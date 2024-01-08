import React, { useRef, useEffect } from "react";
import { loadScript } from "@paypal/paypal-js";


export default function Paypal() {
  const paypal = useRef();


  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          shape: "pill",
          color: "gold",
          layout: "vertical",
          label: "pay",
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: "100.00",
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            console.log(details);
          });
        },
      })
      .render(paypal.current);
  }, []);

  return <div ref={paypal}></div>;
}


