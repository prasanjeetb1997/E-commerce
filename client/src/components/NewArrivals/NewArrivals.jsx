import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import n1 from '../../assets/n8.jpg'
import n2 from '../../assets/n2.jpg'
import n3 from '../../assets/n3.jpg'
import n4 from '../../assets/n4.jpg'
import n5 from '../../assets/n5.jpg'
import n6 from '../../assets/n6.jpg'
import n7 from '../../assets/n7.jpg'

function NewArrivals() {
    return (
        <div id='New-arrivals-section' className='py-10 px-24 my-12 text-center tablet:px-0 mobile:px-16'>
            <h2 className='text-7xl font-semibold mobile:text-[4.1rem] mobile:font-medium'>New Arrivals</h2>
            <p className='text-[1.7rem] mt-5 text-[#9a9daa]'>Summer collection New Modern Design</p>
            <div id='New-arrivals-container' className='flex justify-between flex-wrap py-14 tablet:justify-center mobile:justify-center'>
                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n1} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n2} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n3} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n4} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n5} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n6} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n7} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={n1} alt="p1" />
                    <div id='description' className='text-start py-3'>
                        <span className='text-[#606063] text-xl mobile:text-2xl'>adidas</span>
                        <h5 className='pt-2 text-[#1a1a1a] text-2xl font-medium mobile:text-3xl mobile:font-normal mobile:pt-4'>Cartoon Astronaut T-Shirts</h5>
                        <div id='rating-stars' className='text-yellow-500'>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                            <StarRateIcon className='mobile:!text-3xl'></StarRateIcon>
                        </div>
                        <h4 className='pt-2 font-bold text-[#088178] text-2xl mobile:text-3xl'>$74</h4>
                    </div>
                    <div className='absolute bottom-5 right-3 w-16 h-16 border rounded-[50px] border-[#cce7d0] bg-[#e8f6ea] font-medium text-[#088178] leading-[3.5rem] hover:bg-[#088178] hover:text-[#e8f6ea] duration-200'>
                        <ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewArrivals