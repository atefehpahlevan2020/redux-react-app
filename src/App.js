import React from 'react';
import ProductList from './components/ProductList';
import './App.css';
import ProductDetails from './components/ProductDetails';
import UserListWithThunk from './components/UserListWithThunk';
// import CommentList from './components/CommentList';

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
      <div className='row'>
        <div className='col mb-5'>
          <UserListWithThunk/>
          {/* <CommentList/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
