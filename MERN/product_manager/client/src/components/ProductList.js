import React, {useState} from 'react';
import axios from 'axios';

export default ({products}) => {

    return (
        <div>
            <h2>ALL PRODUCTS</h2>
            {products.map((product, idx) => {
                return <p key={idx}><a href={`/products/${product._id}`} >Title: {product.title}</a></p>
            })}
            
        </div>
    )
}