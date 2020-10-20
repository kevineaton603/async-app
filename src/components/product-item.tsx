import React, { FunctionComponent } from 'react';
import { IProduct } from '../data-source';

const ProductItem: FunctionComponent<{product: IProduct}> = ({ product }) => {
    const {
        color,
        department,
        productName,
        price,
        productAdjective,
        productMaterial,
        productDescription
    } = product;
    return(
        <div style={{paddingBottom: '1em'}}>
            <div>{productName}</div>
            <div>{price}</div>
            <div>{productDescription}</div>
            <div>{color}</div>
            <div>{department}</div>
            <div>{productAdjective}</div>
            <div>{productMaterial}</div>
        </div>
    )
}

export default ProductItem;