import React from 'react'
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'

function Features() {
    return (
        <div id='home-feature-section' className='flex items-center justify-between flex-wrap pt-28 pb-20 px-32 mobile:justify-evenly mobile:px-10 mobile:py-12'>

            <div className='width-[180px] text-center border border-[#cce7d0] rounded-[4px] py-7 px-3.5 shadow-[20px_20px_34px_rgba(0,0,0,0.03)] my-4 mx-0 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] mobile:w-72'>
                <img className='mb-2 w-full' src={f1} alt="feature1" />
                <span className='border rounded px-3 pt-2 pb-1.5 font-bold text-lg text-[#088178] bg-[#fddde4] inline-block'>Free Shipping</span>
            </div>

            <div className='width-[180px] text-center border border-[#cce7d0] rounded-[4px] py-7 px-3.5 shadow-[20px_20px_34px_rgba(0,0,0,0.03)] my-4 mx-0 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] mobile:w-72'>
                <img className='mb-2 w-full' src={f2} alt="feature2" />
                <span className='border rounded px-3 pt-2 pb-1.5 font-bold text-lg text-[#088178] bg-[#cdebbc] inline-block'>Order Online</span>
            </div>

            <div className='width-[180px] text-center border border-[#cce7d0] rounded-[4px] py-7 px-3.5 shadow-[20px_20px_34px_rgba(0,0,0,0.03)] my-4 mx-0 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)]  mobile:w-72'>
                <img className='mb-2 w-full' src={f3} alt="feature3" />
                <span className='border rounded px-3 pt-2 pb-1.5 font-bold text-lg text-[#088178] bg-[#d1e8f2] inline-block'>Save Money</span>
            </div>

            <div className='width-[180px] text-center border border-[#cce7d0] rounded-[4px] py-7 px-3.5 shadow-[20px_20px_34px_rgba(0,0,0,0.03)] my-4 mx-0 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] mobile:w-72'>
                <img className='mb-2 w-full' src={f4} alt="feature4" />
                <span className='border rounded px-3 pt-2 pb-1.5 font-bold text-lg text-[#088178] bg-[#cdd4f8] inline-block'>Promotions</span>
            </div>

            <div className='width-[180px] text-center border border-[#cce7d0] rounded-[4px] py-7 px-3.5 shadow-[20px_20px_34px_rgba(0,0,0,0.03)] my-4 mx-0 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] mobile:w-72'>
                <img className='mb-2 w-full' src={f5} alt="feature5" />
                <span className='border rounded px-3 pt-2 pb-1.5 font-bold text-lg text-[#088178] bg-[#f6dbf6] inline-block'>Happy Sell</span>
            </div>

            <div className='width-[180px] text-center border border-[#cce7d0] rounded-[4px] py-7 px-3.5 shadow-[20px_20px_34px_rgba(0,0,0,0.03)] my-4 mx-0 hover:shadow-[10px_10px_54px_rgba(70,62,221,0.1)] mobile:w-72'>
                <img className='mb-2 w-full' src={f6} alt="feature6" />
                <span className='border rounded px-3 pt-2 pb-1.5 font-bold text-lg text-[#088178] bg-[#fff2e5] inline-block'>F24/7 Support</span>
            </div>

        </div>
    )
}

export default Features