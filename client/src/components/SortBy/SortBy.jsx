import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function SortBy() {

    const options = [
        'Recommended', 'Price: High to Low', 'Price: Low to High'
    ];

    const defaultOption = options[0];

    return (
        <div id='shop-page-sortby' className='mb-8 relative py-20 tablet:my-10'>
            <Dropdown className='w-1/4 !absolute right-0 tablet:w-1/3 mobile:w-2/4' controlClassName='!p-[1.5rem]' placeholderClassName='text-xl' menuClassName='text-xl !max-h-60 h-[14.5rem]' arrowClassName='!top-[21px]' options={options} value={defaultOption} />
        </div>
    )
}

export default SortBy