import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


export default (props) => {
    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
    }, [])

    const updateProduct = (product) => {
        
        axios.put(`http://localhost:8000/api/products/${id}`, product)
        .then(res => {
            navigate('/products/' + id)
        });
        
        // e.preventDefault();
        // axios.put(`http://localhost:8000/api/products/${id}`, {
        //     title,
        //     price,
        //     description
        // })
        // .then(res => {
        //     navigate('/products/' + id)
        // });
    }

    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
        .then(res => {
            console.log(res);
            navigate("/products");
        })
    }

    return (
        <>
            <h1>Update Product</h1>
            {loaded && (
                <>
                    <ProductForm 
                    onSubmitProp={updateProduct} 
                    initialTitle={product.title} 
                    initialPrice={product.price} 
                    initialDescription={product.description}
                    />
                    <DeleteButton productID={product._id} successCallback={deleteProduct} />
                </>
            )}
        </>
    )
}
        // <div>
        //     <Link to={`/products/`}>Go Back</Link>
        //     <hr/>

        //     <h1>Update a Product</h1>

        //     <form onSubmit={updateProduct}>
        //         <p>
        //             <label>Title</label>
        //             <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
        //         </p>
        //         <p>
        //             <label>Price</label>
        //             <input type="text" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} />
        //         </p>
        //         <p>
        //             <label>Description</label>
        //             <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}} />
        //         </p>
        //         <input type="submit" />
        //     </form>
        // </div>
    