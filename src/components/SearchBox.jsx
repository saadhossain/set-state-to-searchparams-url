import React from 'react';

const SearchBox = ({ searchText, setSearchParams }) => {

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchParams(prev => {
            if (value) {
                prev.set("search", value);
            } else {
                prev.delete("search");
            }
            return prev;
        }, { replace: true });
    };
    return (
        <input
            onChange={handleSearch}
            type="text"
            defaultValue={searchText}
            placeholder='What you are looking for?'
            className='w-1/4 h-10 px-3 rounded-3xl focus:outline-none text-gray-900' />
    );
};

export default SearchBox;