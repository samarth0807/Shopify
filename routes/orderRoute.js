const { v4: uuidv4 } = require("uuid");
// const stripe = require('stripe')('sk_test_...');
const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const stripe = require("stripe")(
  "sk_test_51J9ZjkSEB2z6UWP9BC58GMwf50rNYkr7dno91jP6kN9JbPGz0R9a4fkg2h0yaTBM0LdPJ7OzFs1JwMuKf2s0XkBr00f09WyXik"
);

router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  const payment = await stripe.charges.create(
    {
      amount: subtotal * 100,
      currency: "inr",
      customer: customer.id,
      receipt_email: token.email,
    },
    {
      idempotencyKey: uuidv4(),
    }
  );

  if (payment) {
    const order = new Order({
      userid: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      orderItems: cartItems,
      shippingaddress: {
        address: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        postalCode: token.card.addres_zip,
      },
      orderAmount: subtotal,
      transactionId: payment.source.id,
      isDelievered  : false,
    })
    order.save(err=>{

      if(err)
      {
          return res.status(400).json({ message: 'Something went wrong' });
      }
      else{
          res.send('Order Placed Successfully')
      }

  })
}
else{
  return res.status(400).json({ message: 'Payment failed' });
}
});
router.post("/getordersbyuserid", async (req, res) => {
  const userid = req.body.userid
  Order.find({userid:userid},(err,docs)=>{
    if(err)
    {
      return res.status(400).json({ message: 'Payment failed' });
    }

    else{
      res.send(docs);
    }
  })
});

router.post("/getordersbyid", async (req, res) => {
  const orderid = req.body.orderid
  Order.find({_id:orderid},(err,docs)=>{
    if(err)
    {
      return res.status(400).json({ message: 'Payment failed' });
    }

    else{
      res.send(docs[0]);
    }
  })
});
module.exports = router;
