import React from 'react';

const Spinner = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
        </div>
    );
};

export default Spinner;