'use strict';

const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

module.exports.getStripeEphemeralKeys = async event => {
  
  const api_version = '2020-08-27';
  const customer_name = event.customer_name;
  //create a customer
  
  const customer = await stripe.customers.create({
    name: customer_name,
  });
  
  //const customer_id = data.customer_id;
  const key = await stripe.ephemeralKeys.create(
        {customer: customer.id},
        {apiVersion: api_version}
    );
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: key,
        input: event,
      },
      null,
      2
    ),
  };
};
