import React from 'react';
import ProductList from './components/ProductList';
import './App.css';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className='container-fluid'>
      <h1>First Redux Sample App</h1>
      <hr/>
      <div className='row'>
        <div className='col'>
          <ProductList/>
        </div>
        <div className='col'>
          <ProductDetails/>
        </div>
      </div>
    </div>
  );
}

export default App;
