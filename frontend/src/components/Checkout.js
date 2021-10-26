import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";
export default function Checkout({amount}) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, amount));
  }
  return (
    <div>
      <StripeCheckout
        amount={amount * 100}
        shippingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey="pk_test_51J9ZjkSEB2z6UWP9luZHnxqj9xTIWcsxzupkI8mz8fF1YBRFQhC8wNDgCahs0lGVEp7lhTCfGBJH1PHQiM1639CM00s8O1J68h"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
