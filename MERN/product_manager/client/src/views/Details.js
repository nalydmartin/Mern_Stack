import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => setProduct(res.data))
    }, []);


    return (
        <div>

            <h3>Title: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            
        </div>
    )
}