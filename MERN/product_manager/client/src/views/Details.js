import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';


export default (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => setProduct(res.data))
    }, []);


    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
        .then(res => {
            navigate('/products/')
        })
    }

    return (
        <div>
            <Link to={`/products/`}>Go Back</Link>
            <hr/>
            <h3>Title: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}/edit`}>EDIT</Link>
            {/* <button onClick={(e) => {deleteProduct(product._id)}}>DELETE</button> */}
            <DeleteButton productID={product._id} successCallback={deleteProduct} />
        </div>
    )
}