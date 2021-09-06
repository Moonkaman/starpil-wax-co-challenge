import React from 'react'
import Image from 'next/image'
import { Card, Button } from 'react-bootstrap'

import productStyles from '../styles/Product.module.css'

export default function Product({productDetails}) {
    return (
        <Card className={productStyles.productContainer}>
            <div className="content">
                <Image src={productDetails.img} alt={productDetails.imgAlt} />
                <Card.Body>
                    <p>{productDetails.category}</p>
                    <p>{productDetails.name}</p>
                    <p>${productDetails.price}</p>
                    <Button className="w-100" onClick={productDetails.addCartItem}>Add to cart</Button>
                </Card.Body>
            </div>
        </Card>
    )
}
