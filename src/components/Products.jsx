import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='my-12 mx-5'>
            <h1 className='text-3xl font-bold text-center my-12'>
                Products
            </h1>

            <div className='grid grid-cols-4 gap-4'>
                {
                    products.map((product) => (
                        <div key={product.id} className="card card-compact bg-base-100 border">
                            <figure><img className='h-80 w-full object-cover' src={product.image} alt={product.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <h3 className='card-title text-lg'>Price: <span className='text-primary'>${product.price}</span></h3>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;