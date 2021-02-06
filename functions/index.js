/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IHkLFBa5YSiZO6pbRcLtJ9QtCYZoLgas9CqFLecIUSgFshCEzposIBptTm2MsyYA8LciDxTadGXEoIyYNAHKKkC00sHBXXw3B",
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_string,
  });
});

exports.api = functions.https.onRequest(app);
