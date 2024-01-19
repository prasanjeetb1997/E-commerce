import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppImg from '../../assets/app.jpg'
import PlayImg from '../../assets/play.jpg'
import PayImg from '../../assets/pay.png'

function Footer() {
  return (
    <footer className='px-32 pt-32 pb-20 flex flex-wrap justify-between mobile:px-12'>
      <div id='footer-col-1' className='flex flex-col items-start mb-6'>
        <img className='mb-9 w-[38%]' src={logo} alt="logo" />
        <h4 className='text-[1.7rem] pb-7 font-semibold'>Contact</h4>
        <p className='text-2xl text-[#9a9daa] mb-3'><strong className='text-[#465b52]'>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
        <p className='text-2xl mb-3 text-[#9a9daa]'><strong className='text-[#465b52]'>Phone: </strong> +01 2222 365 /(+91) 01 2345 6789</p>
        <p className='text-2xl mb-3 text-[#9a9daa]'><strong className='text-[#465b52]'>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
        <div>
          <h4 className='text-[1.7rem] pb-8 font-semibold mt-7'>Follow us</h4>
          <div id='socialmedia-icons'>
            <Link> <FacebookIcon className='text-[#465b52] pr-2 hover:text-[#088178]' fontSize='large'></FacebookIcon></Link>
            <Link> <TwitterIcon className='text-[#465b52] pr-2 hover:text-[#088178]' fontSize='large'></TwitterIcon></Link>
            <Link> <InstagramIcon className='text-[#465b52] pr-2 hover:text-[#088178]' fontSize='large'></InstagramIcon></Link>
            <Link><PinterestIcon className='text-[#465b52] pr-2 hover:text-[#088178]' fontSize='large'></PinterestIcon></Link>
            <Link><YouTubeIcon className='text-[#465b52] pr-2 hover:text-[#088178]' fontSize='large'></YouTubeIcon></Link>
          </div>
        </div>
      </div>
      <div id='footer-col-2' className='flex flex-col items-start mb-5'>
        <h4 className='text-[1.7rem] pb-6 font-semibold'>About</h4>
        <Link className='text-2xl text-[#9a9daa] mb-3'>About us</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>Delivery Information</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>Privacy Policy</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>Terms & Conditions</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>Contact Us</Link>
      </div>
      <div id='footer-col-3' className='flex flex-col items-start mb-5'>
        <h4 className='text-[1.7rem] pb-6 font-semibold'>My Account</h4>
        <Link className='text-2xl text-[#9a9daa] mb-3'>Sign In</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>View Cart</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>My Wishlist</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>Track My Order</Link>
        <Link className='text-2xl text-[#9a9daa] mb-3'>Help</Link>
      </div>
      <div id='footer-col-4' className='flex flex-col items-start mb-5'>
        <h4 className='text-[1.7rem] pb-6 font-semibold'>Install App</h4>
        <p className='text-2xl text-[#9a9daa]'>From App Store or Google Play</p>
        <div className='flex justify-between'>
          <img className='border border-[#088178] rounded-lg my-6 min-w-[50%]' src={AppImg} alt="img" />
          <img className='border border-[#088178] rounded-lg my-6 min-w-[50%]' src={PlayImg} alt="img" />
        </div>
        <p className='text-2xl text-[#9a9daa]'>Secured Payment Gateways</p>
        <img className='mt-8' src={PayImg} alt="img" />
      </div>
      <div id='footer-copyright-section' className='w-full text-center'>
        <p className='text-[1.6rem] text-[#9a9daa]'>&#169; 2023, Tech2 etc - HTML CSS Ecommerce Template</p>
      </div>
    </footer>
  )
}

export default Footer