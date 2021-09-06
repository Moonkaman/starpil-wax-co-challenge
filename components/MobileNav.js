import React from 'react'
import { Offcanvas, ListGroup } from 'react-bootstrap'

// CSS in JS example

const canvasHeaderStyles = {
  justifyContent: 'space-between',
  padding: '2rem 1rem'
}

export const MobileNav = ({open, close}) => {
  return (
    <Offcanvas show={open} onHide={close}>
      <Offcanvas.Header style={canvasHeaderStyles} closeButton>
        Navigation
      </Offcanvas.Header>
      <Offcanvas.Body>
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
