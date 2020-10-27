import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { IProduct } from '../data-source';
import './product-item.css';

const useStyles = makeStyles({
    paper: {
      backgroundColor: 'red'
    },
  });

const ProductItem: FunctionComponent<{product: IProduct}> = ({ product }) => {
    const classes = useStyles();
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