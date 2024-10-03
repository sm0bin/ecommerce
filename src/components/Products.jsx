import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Products = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    // Load cart items from localStorage when the component mounts
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    // Add product to cart and save to localStorage
    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);

        let updatedCart;
        if (existingProduct) {
            // Increase quantity if the product is already in the cart
            updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            // Add new product with quantity 1
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Function to increase quantity
    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Function to decrease quantity or remove item
    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        ).filter(item => item.quantity > 0); // Remove the item if quantity reaches 0

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Function to remove product from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Function to handle checkout
    const handleChekout = () => {
        // alert('Checkout successful!');
        prompt("Please enter your address:", "Bangladesh")
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <div className='mx-5 h-[80vh]'>
            <h1 className='text-3xl font-bold text-center mb-8 mt-20'>
                Products
            </h1>

            <div className='grid grid-cols-4 gap-4 h-[80vh]'>
                <div className='col-span-3 grid grid-cols-3 gap-4 h-[80vh] overflow-y-auto'>
                    {
                        products.map((product) => (
                            <div key={product.id} className="card card-compact bg-base-100 border">
                                <figure><img className='h-80 w-full object-cover' src={product.image} alt={product.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <h3 className='card-title text-lg'>Price: <span className='text-primary'>৳{product.price}</span></h3>
                                    <p>{product.description}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => addToCart(product)} className="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col border p-4 space-y-4'>
                    <h2 className='text-2xl font-bold text-center'>Cart</h2>
                    <div className="divider"></div>

                    <div className='grow space-y-4'>
                        {cart.length === 0 ? (
                            <p>No items in cart.</p>
                        ) : (
                            cart.map(item => (

                                <div key={item.id} className='flex gap-4 items-center border'>
                                    <img src={item.image} alt="" className='size-16 object-cover' />
                                    <div className='grow'>
                                        <h3 className='font-semibold text-lg'>{item.name}</h3>
                                        <p>৳ {item.price}</p>
                                    </div>
                                    <div className="join join-vertical lg:join-horizontal w-max">
                                        <button onClick={() => decreaseQuantity(item.id)} className="btn btn-square join-item btn-sm">-</button>
                                        <input className="input input-bordered input-sm w-full max-w-14 p-2" value={item.quantity} readOnly />
                                        <button onClick={() => increaseQuantity(item.id)} className="btn btn-square join-item btn-sm">+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="btn btn-square btn-error btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className='flex justify-between'>
                        <h3 className='text-lg font-semibold'>Total: </h3>
                        <p className='text-lg font-semibold'>৳ {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    </div>
                    <button onClick={() => handleChekout()} className='btn btn-primary w-full'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Products;