import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <Outlet />
        </div>
    );
};

export default MainLayout;