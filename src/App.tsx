import React, { useEffect, useState } from 'react';
import './App.css';
import ProductItem from './components/product-item';
import { getProductData, IProduct } from './data-source';

function App() {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    getProductData()
    .then((res) => {
      setProducts(res);
    })
    .catch(err => console.error(err))
  }, []);

  return (
    <div className="App">
      <div>
        {products?.length 
          ? products.map(product => <ProductItem product={product} />)
          : <div>loading...</div>
        }
      </div>
    </div>
  );
}

export default App;
