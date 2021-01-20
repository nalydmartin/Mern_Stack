import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    // const [products, setProducts] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/products')
    //     .then(res => {
    //         setProducts(res.data);
    //         setLoaded(true);
    //     })
    // }, []);

    // const removeFromDom = productID => {
    //     setProducts(products.filter(product => product._id != productID));
    // }

    const createProduct = (product) => {
        axios.post('http://localhost:8000/api/products', product)
        .then(res => console.log(res));
        }
    

    return (
        <div>
            <ProductForm 
            onSubmitProp={createProduct} 
            initialTitle="" 
            initialPrice="" 
            initialDescription="" />
            <hr />

            <ProductList />

        </div>
    )
}