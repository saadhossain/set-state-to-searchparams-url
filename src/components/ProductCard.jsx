import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className='bg-gray-800 rounded-lg'>
            <img src={product.thumbnail} alt={product.title} loading='lazy' />
            <div className='p-5'>
                <h4>{product.title}</h4>
                <div className='flex items-center justify-between mt-5'>
                    <h2 className='text-xl font-bold'>${product.price}</h2>
                    <button className='bg-purple-600 py-2 px-5 rounded-3xl font-semibold hover:bg-purple-800 duration-200 ease-in-out'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;