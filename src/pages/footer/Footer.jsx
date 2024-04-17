import { Link } from 'react-router-dom'
import Logo from '../../components/header/Logo'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Helmet } from 'react-helmet-async';


const Footer = () => {
    <Helmet>
        <style type="text/css">{`
        footer 
    `}
        </style>
    </Helmet>
    return (
        <footer className='bg-mainColor text-xs p-4 text-colorText2 pb-12 md:pb-0'>
            <div className='container md:w-4/5 w-full mx-auto flex flex-col gap-6'>
                <div className='flex flex-col md:flex-row md:justify-between items-center text-center md:text-start md:items-start'>
                    <Logo />
                    <div className='mt-8'>
                        <h2 className='title text-base font-bold text-hoverColorText'>Information</h2>
                        <ul className='mt-4 flex flex-col gap-1'>
                            <Link to="/" className='p-1 transition-all hover:text-white hover:translate-x-2'><li>Sales</li></Link>
                            <Link to="/"><li className='p-1 transition-all hover:text-white hover:translate-x-2'>About Us</li></Link>
                            <Link to="/"><li className='p-1 transition-all hover:text-white hover:translate-x-2'>Contact Us</li></Link>
                            <Link to="/"><li className='p-1 transition-all hover:text-white hover:translate-x-2'>FAQs Page</li></Link>
                            <Link to="/"><li className='p-1 transition-all hover:text-white hover:translate-x-2'>سياسة الاستبدال و الاسترجاع</li></Link>
                        </ul>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-base font-bold text-hoverColorText'>Contact us</h2>
                        <ul className='mt-4 flex flex-col gap-1'>
                            <li className='p-1 flex gap-2 items-center'><PhoneAndroidIcon className='text-colorText1' /><span>01013655708</span></li>
                            <li className='p-1 flex gap-2 items-center'><PhoneIcon className='text-colorText1' /><span>12345678</span></li>
                            <li className='p-1 flex gap-2 items-center'><MailIcon className='text-colorText1' /><span>kamal@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 mt-8'>
                        <div>
                            <h3 className='text-base font-bold text-hoverColorText'>Follow us on</h3>
                            <div className=' mt-4 flex gap-3' >
                                <a href="" className='text-colorText1 hover:text-hoverColorText'><FacebookIcon /></a>
                                <a href="" className='text-colorText1 hover:text-hoverColorText'><XIcon /></a>
                                <a href="" className='text-colorText1 hover:text-hoverColorText'><InstagramIcon /></a>
                                <a href="" className='text-colorText1 hover:text-hoverColorText'><YouTubeIcon /></a>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-base font-bold text-hoverColorText'>Payment methods</h3>
                            <div className='mt-4 flex justify-around'>
                            <img className='w-8' src="/images/Payment methods/mastercard.png" alt="mastercard" />
                            <img className='w-8' src="/images/Payment methods/visa.png" alt="visa" />
                            <img className='w-8' src="/images/Payment methods/paypal.png" alt="paypal" />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-center'> Developed by <span className='text-hoverColorText font-bold'>Kamal Hosny</span></h1>
            </div>
        </footer>
    )
}

export default Footer