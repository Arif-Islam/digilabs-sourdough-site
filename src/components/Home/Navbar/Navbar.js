import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../images/Combined Shape Copy 2.png'
import { CgMenuRight, CgMenuLeft } from 'react-icons/cg';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const navigate = useNavigate();

    const gotohome = () => {
        navigate('/');
    }
    return (
        <div className='py-6'>
            <div className='hidden lg:block lg:w-11/12 mx-auto 2xl:w-full'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-8'>
                        <div onClick={gotohome} className="flex justify-center items-center hover:cursor-pointer space-x-[8px]">
                            <img className='w-7 h-7' src={logo} alt="site logo" />
                            <p className='font-semibold text-[32px]'>sodo</p>
                        </div>
                        <div className='flex space-x-8 justify-center items-center text-[#242464] font-normal text-lg mt-2'>
                            <div className='hover:text-[#5555FF] transition duration-400 ease-in-out hover:cursor-pointer'>
                                <NavLink to='/about'>About us</NavLink>
                            </div>
                            <div className='hover:text-[#5555FF] transition duration-400 ease-in-out hover:cursor-pointer'>
                                <NavLink to='/download'>Download</NavLink>
                            </div>
                            <div className='hover:text-[#5555FF] transition duration-400 ease-in-out hover:cursor-pointer'>
                                <NavLink to='/contact'>Contact</NavLink>
                            </div>

                        </div>
                    </div>
                    <div className='flex space-x-6 justify-center items-center'>
                        <div className='text-lg font-semibold text-[#5555FF] hover:text-[#0f0fd8] transition duration-400 ease-in-out hover:cursor-pointer'>
                            <NavLink to='/login'>Log in</NavLink>
                        </div>
                        <div>
                            <button className='w-48 h-14 bg-[#5555FF] text-white rounded-lg font-semibold text-lg hover:bg-[#0f0fd8] transition duration-400 ease-in-out'>Primary action</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden'>
                <div className='flex justify-between items-center w-11/12 md:w-4/5 mx-auto'>
                    <div className='flex flex-col justify-end items-end'>
                        <div onClick={gotohome} className="flex justify-center items-center hover:cursor-pointer space-x-[8px]">
                            <img className='w-7 h-7' src={logo} alt="site logo" />
                            <p className='font-semibold text-[32px]'>sodo</p>
                        </div>
                    </div>
                    <div className='flex justify-end items-end'>
                        {showNav ?
                            <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                                <CgMenuLeft className='cursor-pointer w-8 h-8 text-black pl-1'>
                                </CgMenuLeft>
                            </div>
                            :
                            <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                                <CgMenuRight onClick={() => setShowNav(!showNav)} className='cursor-pointer w-8 h-8 text-black pl-1'></CgMenuRight>
                            </div>
                        }
                    </div>
                </div>
                <div className={(showNav ? "top-[75px]" : "-top-full") + " fixed bg-gray-100 h-[230px] text-[#242464] text-lg text-center rounded w-full space-y-3 items-center transition-top duration-500 ease-in-out transform"}>
                    <div className='mt-2 md:mt-0 '>
                        <NavLink to='/about'>About us</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/download'>Download</NavLink>
                    </div>
                    <div className=''>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                    <div className='font-semibold text-[#5555FF] hover:text-[#0f0fd8] transition duration-400 ease-in-out hover:cursor-pointer'>
                            <NavLink to='/login'>Log in</NavLink>
                        </div>
                        <div>
                            <button className='w-44 h-12 bg-[#5555FF] text-white rounded-lg font-semibold hover:bg-[#0f0fd8] transition duration-400 ease-in-out'>Primary action</button>
                        </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;