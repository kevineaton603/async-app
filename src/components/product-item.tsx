import { Grid, Paper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { IProduct } from '../data-source';
import './product-item.css';


const ProductItem: FunctionComponent<{product: IProduct}> = ({ product }) => {
    const {
        color,
        department,
        productName,
        price,
        productAdjective,
        productMaterial
    } = product;
    return(
        <Grid item xs={3}>
            <Paper>
                <div>{productName}</div>
                <div>{price}</div>
                <div style={{color}}>{color}</div>
                <div>{department}</div>
                <div>{productAdjective}</div>
                <div>{productMaterial}</div>
            </Paper>
        </Grid>
    )
}

export default ProductItem;