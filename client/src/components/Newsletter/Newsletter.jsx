import React from 'react'

function Newsletter() {
    return (
        <div id='newsletter-section' className='bg-newsletter-img bg-no-repeat bg-[20%_30%] bg-[#041e42] flex justify-between flex-wrap items-center py-20 px-32 mb-28 mobile:py-10 mobile:px-5'>
            <div id='newsletter-text'>
                <h4 className='text-[2.7rem] font-bold text-white -mt-3'>Sign Up For Newsletters</h4>
                <p className='text-[1.5rem] font-semibold text-[#818ea0] mt-2'>Get E-mail updates about our latest shop and <span className='text-[#ffbd27]'> special offers.</span></p>
            </div>
            <form className='flex w-[40%] tablet:w-[80%] py-5 mobile:w-full'>
                <input className='h-20 px-6 text-2xl w-full border border-transparent rounded-md rounded-r-none outline-none' type="text" placeholder='Your email address'/>
                <button className='bg-[#088178] text-2xl font-semibold py-4 px-8 cursor-pointer text-white whitespace-nowrap rounded-md rounded-l-none'>Sign up</button>
            </form>
        </div>
    )
}

export default Newsletter