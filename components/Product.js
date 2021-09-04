import React from 'react'
import Image from 'next/image'

import productStyles from '../styles/Product.module.css'

export default function Product({productDetails}) {
    return (
        <div cla>
            <Image src={productDetails.img} alt={productDetails.imgAlt} />
            <p className={productStyles.productContainer}>{productDetails.category}</p>
            <p>{productDetails.name}</p>
            <p>${productDetails.price}</p>
        </div>
    )
}
