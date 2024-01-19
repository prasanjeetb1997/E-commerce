import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'
import p7 from '../../assets/p7.jpg'

function FeaturedProducts() {
    return (
        <div id='featured-products-section' className='py-10 px-24 text-center tablet:px-0 mobile:px-0 mobile:py-24'>
            <h2 className='text-7xl font-semibold mobile:text-[4.1rem] mobile:font-medium'>Featured Products</h2>
            <p className='text-[1.7rem] mt-5 text-[#9a9daa]'>Summer collection New Modern Design</p>
            <div id='featured-product-container' className='flex justify-between flex-wrap py-16 tablet:justify-center mobile:py-10'>
                <div className='w-[23%] min-w-[250px] py-3 px-4 border rounded-3xl border-[#cce7d0] my-6 cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)] relative tablet:m-6 mobile:w-full mobile:max-w-[289px]'>
                    <img className='w-full rounded-2xl' src={p1} alt="p1" />
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
                    <img className='w-full rounded-2xl' src={p2} alt="p1" />
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
                    <img className='w-full rounded-2xl' src={p3} alt="p1" />
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
                    <img className='w-full rounded-2xl' src={p4} alt="p1" />
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
                    <img className='w-full rounded-2xl' src={p5} alt="p1" />
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
                    <img className='w-full rounded-2xl' src={p6} alt="p1" />
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
                    <img className='w-full rounded-2xl' src={p7} alt="p1" />
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
                    <img className='w-full rounded-2xl' src={p1} alt="p1" />
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

export default FeaturedProducts