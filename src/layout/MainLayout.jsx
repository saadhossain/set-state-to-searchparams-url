import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className='w-11/12 md:w-10/12 mx-auto my-10'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;