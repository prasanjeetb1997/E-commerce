import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import p1 from '../../assets/p1.jpg'

function Cart() {
    return (
        <>
            <Header></Header>
            <main className='mb-28 px-32 py-16 tablet:px-8 mobile:px-2'>
                <div style={{ overflowX: 'auto' }} className='mb-10'>
                    <div className='flex text-center text-2xl font-semibold border-y-2 py-7 w-full'><span className='w-[11%] mobile:w-[15%]'>REMOVE</span> <span className='w-[14%] mobile:w-[15%]'>IMAGE</span> <span className='w-[29%] mobile:w-[25%]'>PRODUCT</span> <span className='w-[14%] mobile:w-[15%]'>PRICE</span> <span className='w-[14%] mobile:w-[15%]'>QUANTITY</span> <span className='w-[18%] mobile:w-[15%]'>SUBTOTAL</span></div>

                    <div className='flex text-center font-light items-center  text-gray-500 text-2xl py-7 w-full'><span className='w-[11%]'><IconButton aria-label="delete" size='large'><DeleteForeverIcon color='warning' fontSize='large' /></IconButton></span> <span className='w-[14%]'><img src={p1} alt="p1" className='max-w-[100px] mx-auto tablet:max-w-[75px] mobile:max-w-[58px]' /></span> <span className='w-[29%]'>Cartoon Astronaut T-Shirts</span> <span className='w-[14%]'>$118</span><span className='w-[14%]'><input className='w-[40%] p-3 outline-none border-2 mobile:w-full' type="number" min={1} max={10} /></span><span className='w-[18%]'>$118</span></div>

                    <div className='flex text-center font-light items-center  text-gray-500 text-2xl py-7 w-full'><span className='w-[11%]'><IconButton aria-label="delete" size='large'><DeleteForeverIcon color='warning' fontSize='large' /></IconButton></span> <span className='w-[14%]'><img src={p1} alt="p1" className='max-w-[100px] mx-auto tablet:max-w-[75px] mobile:max-w-[58px]' /></span> <span className='w-[29%]'>Cartoon Astronaut T-Shirts</span> <span className='w-[14%]'>$118</span><span className='w-[14%]'><input className='w-[40%] p-3 outline-none border-2 mobile:w-full' type="number" min={1} max={10} /></span><span className='w-[18%]'>$118</span></div>

                    <div className='flex text-center font-light items-center  text-gray-500 text-2xl py-7 w-full'><span className='w-[11%]'><IconButton aria-label="delete" size='large'><DeleteForeverIcon color='warning' fontSize='large' /></IconButton></span> <span className='w-[14%]'><img src={p1} alt="p1" className='max-w-[100px] mx-auto tablet:max-w-[75px] mobile:max-w-[58px]' /></span> <span className='w-[29%]'>Cartoon Astronaut T-Shirts</span> <span className='w-[14%]'>$118</span><span className='w-[14%]'><input className='w-[40%] p-3 outline-none border-2 mobile:w-full' type="number" min={1} max={10} /></span><span className='w-[18%]'>$118</span></div>
                </div>

                <div className='border-2 p-10 w-2/4 mobile:w-full'>
                    <h1 className='text-4xl font-semibold mb-5'>Cart Totals</h1>
                    <table className='border-2 border-collapse text-2xl text-gray-500 w-full mb-7'>
                        <tr>
                            <td className='border-2 border-collapse p-3'>Cart Subtotal</td>
                            <td className='border-2 border-collapse p-3'>$ 335</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-collapse p-3'>Shipping</td>
                            <td className='border-2 border-collapse p-3'>Free</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-collapse p-3 font-semibold'>Total</td>
                            <td className='border-2 border-collapse p-3 font-semibold'>$ 335</td>
                        </tr>
                    </table>
                    <button className='text-2xl font-semibold py-5 px-10 text-white bg-[#088178] rounded cursor-pointer outline-none duration-200'>Proceed to checkout</button>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Cart