import React from 'react'

function MainBanner() {
    return (
        <div className='bg-banner-img h-[90vh] bg-cover bg-no-repeat tablet:h-[80vh] tablet:bg-center mobile:h-[60vh] flex flex-col pl-20 mobile:pl-10 justify-center items-start'>
            <h4 className='text-4xl font-medium py-1'>Trade-in-offer</h4>
            <h2 className='font-semibold text-8xl mobile:text-6xl py-1'>Super value deals</h2>
            <h1 className='font-semibold text-8xl mobile:text-6xl text-[#088178] py-0.5'>On all products</h1>
            <p className='text-3xl text-[#9a9daa] py-6'>Save more with coupons & up to 70% off!</p>
            <button className='bg-button-img bg-no-repeat text-[#088178] font-bold text-2xl leading-4 py-8 px-28 tablet:leading-6 tablet:px-28 tablet:py-6 mobile:ml-[-23px] mobile:px-32 mobile:bg-contain'>Shop now</button>
        </div>
    )
}

export default MainBanner