import React, { useEffect, useState } from 'react';
import './App.css';
import ProductItem from './components/product-item';
import { getProductData, IProduct } from './data-source';
import { getCurrentWeatherByCity } from './data-source/weather';
import useProductStore from './store/use-product-store';



function App() {
  const products = useProductStore(state => state.products);
  const clear = useProductStore(state => state.clear);
  const fetchProducts = useProductStore(state => state.fetch);
  const [mount, setMount] = useState(false);
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
      <button onClick={clear}>Clear Products</button>
      <div>
        {products?.length 
          ? (<div className="products-container">
              {products.map(product => <ProductItem product={product} />)}
            </div>)
          : <div>loading...</div>
        }
      </div>
    </div>
  );
}

export default App;
