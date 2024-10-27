import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full py-3 bg-gray-800'>
            <div className='w-11/12 md:w-10/12 mx-auto flex items-center justify-between'>
                <Link to='/' className='text-xl font-semibold text-purple-600'>URL Params</Link>
                <button className='bg-purple-600 py-2 px-10 rounded-3xl font-semibold'>Login</button>
            </div>
        </div>
    );
};

export default Header;