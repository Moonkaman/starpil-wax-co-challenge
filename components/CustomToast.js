import React, {useState} from 'react'
import { Toast } from 'react-bootstrap'

// CSS in JS examples
const toastHeaderSyles = {
  justifyContent: 'space-between !important'
}

export default function CustomToast({toastMessage}) {
  return (
    <Toast key={index}>
      <Toast.Header style={toastHeaderSyles}>
        Item Added to Cart
      </Toast.Header>
      <Toast.Body>
        {toastMessage}
      </Toast.Body>
    </Toast>
  )
}
