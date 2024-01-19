import React from 'react'

function Banner2() {
  return (
    <div className='bg-banner2-img h-[40vh] mb-28 bg-cover bg-center flex flex-col justify-center items-center text-center tablet:h-[33vh]  mobile:h-[28vh]'>
        <h4 className='text-white text-2xl font-semibold'>Repair Services</h4>
        <h2 className='text-white text-6xl font-bold py-9'>Up to <span className='text-red-600'>70% Off </span>- All t-Shirts & Accessories</h2>
        <button className='text-2xl font-semibold py-6 px-12 text-black bg-white rounded cursor-pointer outline-none duration-200 hover:bg-[#088178] hover:text-white'>Explore more</button>
    </div>
  )
}

export default Banner2