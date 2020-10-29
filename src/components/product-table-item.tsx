import { TableCell, TableRow } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { IProduct } from '../data-source';
import './product-item.css';

const ProductTableItem: FunctionComponent<{product: IProduct}> = ({ product }) => {
    const {
        color,
        department,
        productName,
        price,
        productAdjective,
        productMaterial,
    } = product;
    return(
        <TableRow>
            <TableCell>{productName}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell style={{color}}>{color}</TableCell>
            <TableCell>{department}</TableCell>
            <TableCell>{productAdjective}</TableCell>
            <TableCell>{productMaterial}</TableCell>
        </TableRow>
    )
}

export default ProductTableItem;