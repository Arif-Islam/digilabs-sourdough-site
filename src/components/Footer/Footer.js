import React from 'react';
import logo from '../../images/Combined Shape Copy 2.png';
import fb from '../../images/Facebook.png';
import insta from '../../images/Instagram.png';
import twitter from '../../images/Twitter.png';
import yt from '../../images/YouTube.png';
import appleStore from '../../images/apple store.png';
import playStore from '../../images/play store.png';
import apple from '../../images/Apple_App_Store.png';
import play from '../../images/Google_Play.png';

const Footer = () => {
    return (
        <div className='bg-[#242464]'>
            <div className='max-w-[1300px] mx-auto'>
                <div className='w-11/12 2xl:w-full mx-auto py-16'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between'>
                        <div className='w-[150px] lg:mr-16'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className="flex justify-center items-center hover:cursor-pointer space-x-[8px] pb-4 lg:pb-8">
                                    <img className='w-7 h-7' src={logo} alt="site logo" />
                                    <p className='font-semibold text-[32px] text-white'>sodo</p>
                                </div>
                                <div className='flex space-x-[26px] '>
                                    <img src={fb} alt="" />
                                    <img src={insta} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={yt} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[150px] mx-auto'>
                            <div className='flex flex-col items-start justify-start space-y-2'>
                                <p className='text-white font-semibold text-lg'>Company</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>About us</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Meet the team</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Careers</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Blog</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-[150px] mx-auto'>
                            <div className='flex flex-col items-start justify-start space-y-2'>
                                <p className='text-white font-semibold text-lg'>Product</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Product</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Product</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Product</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Product</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-[150px] mx-auto'>
                            <div className='flex flex-col items-start justify-start space-y-2'>
                                <p className='text-white font-semibold text-lg'>Product</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Product</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Product</p>
                                <p className='text-[#FAFAFA] font-normal text-lg'>Product</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-[180px] lg:mr-6'>
                            <div className='flex items-center justify-center bg-[#FAFAFA]  rounded-lg py-2 px-6 gap-1 hover:cursor-pointer hover:bg-gray-100 transition duration-400 ease-in-out'>
                                <img src={apple} alt="" />
                                <p className='text-[#171740] text-lg font-semibold '>Apple Store</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-[180px]'>
                            <div className='flex items-center justify-center bg-[#FAFAFA]  rounded-lg py-2 px-6 gap-1 hover:cursor-pointer hover:bg-gray-100 transition duration-400 ease-in-out'>
                                <img className='' src={play} alt="" />
                                <p className='text-[#171740] text-lg font-semibold '>Play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;