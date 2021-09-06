import React from 'react'
import { Offcanvas, ListGroup } from 'react-bootstrap'

// CSS in JS examples
const canvasHeaderStyles = {
  justifyContent: 'space-between',
  padding: '2rem 1rem'
}

const accountListGroupStyles = {
  marginBottom: '2rem'
}

// This is a Offcanvas component from bootstrap (https://react-bootstrap.github.io/components/offcanvas/) and adds a drawer the the left side of the screen for mobile navigation 
export const MobileNav = ({open, close}) => {
  return (
    <Offcanvas show={open} onHide={close}>
      <Offcanvas.Header style={canvasHeaderStyles} closeButton>
        Navigation
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* These are the buttons that are gone from the top of the page in the mobile version */}
        <ListGroup style={accountListGroupStyles}>
          <ListGroup.Item action href="#">Account</ListGroup.Item>
          <ListGroup.Item action href="#">Checkout</ListGroup.Item>
        </ListGroup>

        {/* These are the normal navigation buttons */}
        <ListGroup>
          <ListGroup.Item action href="#">Home</ListGroup.Item>
          <ListGroup.Item action href="#">Collections</ListGroup.Item>
          <ListGroup.Item action href="#">Professional</ListGroup.Item>
          <ListGroup.Item action href="#">Eva Pro Rewards</ListGroup.Item>
          <ListGroup.Item action href="#">About Us</ListGroup.Item>
          <ListGroup.Item action href="#">Contact Us</ListGroup.Item>
          <ListGroup.Item action href="#">Quiz</ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
