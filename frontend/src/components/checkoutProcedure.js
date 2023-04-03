import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutProcedure(props) {
  return (
    <Row className="checkout-procedure">
      <Col className={props.step1 ? 'active' : ''}>Login</Col>
      <Col className={props.step2 ? 'active' : ''}>Shipping</Col>
      <Col className={props.step3 ? 'active' : ''}>Payment</Col>
      <Col className={props.step4 ? 'active' : ''}>Place Order</Col>
    </Row>
  );
}
