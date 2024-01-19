import React from 'react'

function Banner3() {
  return (
    <div id='banner3-container' className='w-full px-24 flex justify-between flex-wrap mobile:px-16'>
      <div id='banner-box' className='bg-banner3-1-img h-[50vh] w-[49%] min-w-[500px] bg-cover bg-center flex flex-col justify-center items-start p-10 tablet:min-w-full tablet:h-[38vh] tablet:mb-4'>
        <h4 className='text-4xl text-white opacity-80'>crazy deals</h4>
        <h2 className='text-6xl text-white font-bold py-4'>buy 1 get 1 free</h2>
        <span className='text-white text-2xl font-medium pb-6'>The best classic dress is on sale at cara</span>
        <button className='text-xl font-semibold py-4 px-8 text-white bg-transparent cursor-pointer border border-white outline-none duration-200'>Learn More</button>
      </div>
      <div id='banner-box' className='bg-banner3-2-img h-[50vh] w-[49%] min-w-[500px] bg-cover bg-center flex flex-col justify-center items-start p-10 tablet:min-w-full tablet:h-[38vh]'>
        <h4 className='text-4xl text-white opacity-80'>spring/summer</h4>
        <h2 className='text-6xl text-white font-bold py-4'>upcomming season</h2>
        <span className='text-white text-2xl font-medium pb-6'>The best classic dress is on sale at cara</span>
        <button className='text-xl font-semibold py-4 px-8 text-white bg-transparent cursor-pointer border border-white outline-none duration-200'>Collection</button>
      </div>
    </div>
  )
}

export default Banner3