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

    const [errors, setErrors] = useState([]);

    const createProduct = (product) => {
        axios.post('http://localhost:8000/api/products', product)
        .then(res => console.log(res))
        .catch(err => {
            const errResponse = err.response.data.errors;
            const errArray = [];
            for (const key of Object.keys(errResponse)) {
                errArray.push(errResponse[key].message)
            }
            setErrors(errArray);
        })
        }
    

    return (
        <div>
            <ProductForm 
            onSubmitProp={createProduct} 
            initialTitle="" 
            initialPrice="" 
            initialDescription="" 
            errors = {errors}
            />
            <hr />

            <ProductList />

        </div>
    )
}