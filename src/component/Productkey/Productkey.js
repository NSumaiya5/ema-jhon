import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const Productkey = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product);
    return (
        <div>
            <h1>your Product Details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default Productkey;