import React from 'react';
import {connect} from 'react-redux';
import {add} from '../stateManagement/actions/productActions';

const ProductDetails = ({addProduct}) => {
    const save = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const id = form.get('productId');
        const productName = form.get('productName');
        const price = form.get('price');

        addProduct({id,productName,price});
        alert('add item successful');

        // clear form after submit
        event.target.reset();
    };
  return (
    <>
        <h1>Add New Product</h1>
        <form onSubmit={(event) => save(event)}>
            <div className='form-group'>
                <label>Product Id:</label>
                <input type="number" className='form-control' name='productId'/>
            </div>
            <div className='form-group'>
                <label>Product Name:</label>
                <input type="text" className='form-control' name='productName'/>
            </div>
            <div className='form-group'>
                <label>Price:</label>
                <input type="number" className='form-control' name='price'/>
            </div>
            <hr/>
            <button type="submit" className='btn btn-primary'>Save</button>
        </form>
    </>
  )
}


const mapDispatchToProps = (dispatch) => ({
    addProduct : (item) => dispatch(add(item))
})

export default connect(null,mapDispatchToProps)(ProductDetails);