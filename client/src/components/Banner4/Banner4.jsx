import React from 'react'

function Banner4() {
    return (
        <div id='banner4-container' className='flex justify-between flex-wrap w-full px-24 py-10 tablet:py-6 mobile:px-16 mobile:py-4'>
            <div className='bg-banner4-1-img h-[30vh] min-w-[28%] w-[29%] bg-cover bg-center flex flex-col justify-center items-start p-10 mb-10 tablet:w-[32%] tablet:p-4 mobile:w-full mobile:mb-6 mobile:p-10'>
                <h2 className='text-5xl text-white font-black py-4'>SEASONAL SALE</h2>
                <h3 className='text-3xl text-[#ec544e] font-semibold'>Winter Collection -50% OFF</h3>
            </div>
            <div className='bg-banner4-2-img h-[30vh] min-w-[28%] w-[38%] bg-cover bg-center flex flex-col justify-center items-start p-10 mb-10 tablet:w-[32%] tablet:p-4 mobile:w-full mobile:mb-6 mobile:p-10'>
                <h2 className='text-5xl text-white font-black py-4'>NEW FOOWEAR COLLECTION</h2>
                <h3 className='text-3xl text-[#ec544e] font-semibold'>Spring / Summer 2023</h3>
            </div>
            <div className='bg-banner4-3-img h-[30vh] min-w-[28%] w-[29%] bg-cover bg-center flex flex-col justify-center items-start p-10 mb-10 tablet:w-[32%] tablet:p-4 mobile:w-full mobile:mb-6 mobile:p-10'>
                <h2 className='text-5xl text-white font-black py-4'>T-SHIRTS</h2>
                <h3 className='text-3xl text-[#ec544e] font-semibold'>New Trendy Prints</h3>
            </div>
        </div>
    )
}

export default Banner4