import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';

const Home = () => {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProducts(data.products);
            setIsLoading(false);
        };
        getProducts();
    }, []);

    //Set States in the URL Search Params
    const [searchParams, setSearchParams] = useSearchParams();

    const searchText = searchParams.get('search') || '';
    // console.log(products);
    const filterItems = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-semibold border-purple-600 border-l-4 pl-2'>Products</h3>
                <SearchBox
                    searchText={searchText}
                    setSearchParams={setSearchParams}
                />
            </div>
            <div className='grid grid-cols-4 gap-5 my-10'>
                {
                    filterItems.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Home;