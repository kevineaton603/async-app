import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import ProductItem from './components/product-item';
import ProductTableItem from './components/product-table-item';
import { getCurrentWeatherByCity } from './data-source/weather';
import useGeolocation from './hooks/use-geolocation';
import useProductStore from './store/use-product-store';

function App() {
  const products = useProductStore(state => state.products);
  const clear = useProductStore(state => state.clear);
  const fetchProducts = useProductStore(state => state.fetch);
  const [mount, setMount] = useState(false);
  useGeolocation();
  useEffect(() => {
    if(mount === true){
      getCurrentWeatherByCity('Boston').then(res => console.log(res));
    } else {
      setMount(true);
    }
  }, [mount])
  useEffect(() => {
    fetchProducts();
    
  }, [fetchProducts]);
  return (
    <div className="App">
      <Button variant="outlined" color="primary" onClick={clear}>Clear Products</Button>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {products?.length 
          ? products.map(product => <ProductItem product={product} />)
          : <div>loading...</div>
        }
      </Grid>
      {products.length !== 0
        ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>productName</TableCell>
                <TableCell>price</TableCell>
                <TableCell>color</TableCell>
                <TableCell>department</TableCell>
                <TableCell>productAdjective</TableCell>
                <TableCell>productMaterial</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => <ProductTableItem product={product} />)}
              </TableBody>
            </Table>
          </TableContainer>
        ): <div>loading...</div>}

    </div>
  );
}

export default App;
