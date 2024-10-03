import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='my-12 mx-5'>
            <h1 className='text-3xl font-bold text-center mb-8 mt-20'>
                Products
            </h1>

            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-3 grid grid-cols-3 gap-4'>
                    {
                        products.map((product) => (
                            <div key={product.id} className="card card-compact bg-base-100 border">
                                <figure><img className='h-80 w-full object-cover' src={product.image} alt={product.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <h3 className='card-title text-lg'>Price: <span className='text-primary'>{product.price}৳</span></h3>
                                    <p>{product.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='border p-4 space-y-4'>
                    <h2 className='text-2xl font-bold text-center'>Cart</h2>
                    <div className="divider"></div>
                    <div className='flex gap-4 items-center border'>
                        <img src="/products-1/01.jpg" alt="" className='size-16 object-cover' />
                        <div className='grow'>
                            <h3 className='font-semibold text-lg'>Product 1</h3>
                            <p>100৳</p>
                        </div>
                        <div className="join join-vertical lg:join-horizontal">
                            <button className="btn btn-square join-item btn-sm">-</button>
                            <input className="input input-bordered input-sm w-full max-w-12" value={10} />
                            <button className="btn btn-square join-item btn-sm">+</button>
                        </div>
                        <button className="btn btn-square btn-error btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </button>
                    </div>

                    <div className='flex justify-between'>
                        <h3 className='text-lg font-semibold'>Total: </h3>
                        <p className='text-lg font-semibold'>100৳</p>
                    </div>
                    <button onClick={() => prompt("Please enter your address:", "Bangladesh")} className='btn btn-primary w-full'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Products;