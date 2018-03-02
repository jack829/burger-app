import React from 'react';

const price = (props) => <h3>Total Price: <strong>{`$${props.price.toFixed(2)}`}</strong></h3>;

export default price;
