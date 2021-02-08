'use strict';

const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

module.exports.getStripeEphemeralKeys = async event => {
  
  const api_version = '2020-08-27';
  const customer_id = event.multiValueQueryStringParameters.stripe_account_id;
  //const customer_id = data.customer_id;
  const key = await stripe.ephemeralKeys.create(
        {customer: customer_id},
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
