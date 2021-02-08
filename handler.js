'use strict';

const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

module.exports.getStripeEphemeralKeys = async event => {
  
  //const api_version = data.api_version;
  const customer_id = event.multiValueQueryStringParameters.customer_id;
  //const customer_id = data.customer_id;
  /*const key = await stripe.ephemeralKeys.create(
        {customer: customer_id},
        {apiVersion: api_version}
    );*/
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: customer_id,
        input: event,
      },
      null,
      2
    ),
  };
};
