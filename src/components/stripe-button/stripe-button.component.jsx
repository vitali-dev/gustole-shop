import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StipeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_nATOK36RZsKsnVYd3AfZIm5J00gw2SQvfa';

  const onToken = token => {
    console.log(token);
    alert('Payment Sucessful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Gustole Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Hrj.svg'
      description={`Your total is$${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StipeCheckoutButton;
