import React from 'react'
import logo from '../../assets/logo2.png'
import { NavLink } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {

    const [isOpen, setIsOpen] = React.useState(false)


    function navbarToggle() {
        setIsOpen(!isOpen)
    }

    return (
        <>

            <nav className='flex justify-between items-center pl-24 pr-20 py-7 bg-[#E3E6F3] shadow-[0_5px_15px_rgba(0,0,0,0.06)] sticky top-0 z-10'>
                <img src={logo} alt="LogoOfWebsite" width='138px' height='39px' />
                <ul className='!font-sans flex items-center text-[1.7rem] text-[#1a1a1a] font-semibold tablet:hidden'>
                    <li className='px-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[30%] after:h-[2px] after:bottom-[-2px] after:left-7 hover:after:bg-[#3b6a67] duration-300 after:duration-300' to='/'>Home</NavLink></li>
                    <li className='px-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[30%] after:h-[2px] after:bottom-[-2px] after:left-7 hover:after:bg-[#088178] duration-300 after:duration-300' to='/shop'>Shop</NavLink></li>
                    <li className='px-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[30%] after:h-[2px] after:bottom-[-2px] after:left-7 hover:after:bg-[#088178] duration-300 after:duration-300' to='/blog'>Blog</NavLink></li>
                    <li className='px-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[30%] after:h-[2px] after:bottom-[-2px] after:left-7 hover:after:bg-[#088178] duration-300 after:duration-300' to='/about'>About</NavLink></li>
                    <li className='px-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[30%] after:h-[2px] after:bottom-[-2px] after:left-7 hover:after:bg-[#088178] duration-300 after:duration-300' to='/contact'>Contact</NavLink></li>
                    <li className='px-7 relative'><NavLink className='hover:text-[#088178] duration-300' to='/cart'><ShoppingBagOutlinedIcon fontSize='large' /></NavLink></li>
                </ul>
                <ul className='hidden tablet:flex items-center text-2xl text-[#1a1a1a]'>
                    <li className='pr-12 relative'><NavLink className='hover:text-[#088178] duration-300' to='/cart'><ShoppingBagOutlinedIcon className='tablet:!text-[21px]' fontSize='large' /></NavLink></li>
                    <li><button onClick={navbarToggle}><MenuIcon className='cursor-pointer hover:text-[#088178] tablet:!text-[22px]' fontSize='large'></MenuIcon></button></li>
                </ul>
            </nav>

            {
                isOpen && <ul id='mobileSideNav' className='!font-sans bg-[#E3E6F3] text-[1.7rem] text-[#1a1a1a] fixed top-0 right-0 mobile:w-9/12 tablet:w-3/6 h-screen font-semibold flex flex-col items-start pl-20 shadow-[0_40px_60px_rgba(0,0,0,0.1)] z-20'>
                    <li className='mt-20 mb-7'><button onClick={navbarToggle}><CloseIcon className='hover:text-[#088178] cursor-pointer' fontSize='large'></CloseIcon></button></li>
                    <li className='my-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[70%] after:h-[1.5px] after:bottom-[-3px] after:left-0 hover:after:bg-[#405b59] duration-300 after:duration-300' to='/'>Home</NavLink></li>
                    <li className='my-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[70%] after:h-[1.5px] after:bottom-[-3px] after:left-0 hover:after:bg-[#088178] duration-300 after:duration-300' to='/'>Shop</NavLink></li>
                    <li className='my-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[70%] after:h-[2px] after:bottom-[-3px] after:left-0 hover:after:bg-[#088178] duration-300 after:duration-300' to='/'>Blog</NavLink></li>
                    <li className='my-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[70%] after:h-[1.5px] after:bottom-[-3px] after:left-0 hover:after:bg-[#088178] duration-300 after:duration-300' to='/'>About</NavLink></li>
                    <li className='my-7 relative'><NavLink className='hover:text-[#088178] after:absolute after:w-[70%] after:h-[1.5px] after:bottom-[-3px] after:left-0 hover:after:bg-[#088178] duration-300 after:duration-300' to='/'>Contact</NavLink></li>
                </ul>
            }
        </>
    )
}

export default Header