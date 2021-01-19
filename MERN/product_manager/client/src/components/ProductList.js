import React, {useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
export default (props) => {

    const {removeFromDom} = props;

    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
        .then(res => {
            removeFromDom(productID)
        })
    }

    return (
        <div>
            <h2>ALL PRODUCTS</h2>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    <button onClick={(e) => {deleteProduct(product._id)}}>DELETE</button>
                </p>
            })}
            
        </div>
    )
}