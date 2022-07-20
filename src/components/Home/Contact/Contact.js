import React from 'react';

const Contact = () => {
    return (
        <div className='py-10 lg:py-16'>
            <div className='w-11/12 lg:w-3/5 mx-auto'>
                <p className='text-[#171740] text-[32px] font-semibold pb-6'>Contact us</p>
                <form className='bg-[#242464] rounded-2xl flex flex-col justify-center items-center pb-10'>
                    <div className='flex pt-10 pb-6 space-x-8'>
                        <div>
                            <p className='text-white text-lg font-normal pb-1'>First name</p>
                            <input className='w-[139px] lg:w-[225px] xl:w-[317px] h-[56px] rounded-lg bg-[#FAFAFA] px-4 text-lg text-[#5D5DC5] focus:outline-none' type="text" placeholder='Alex' required />
                        </div>
                        <div>
                            <p className='text-white text-lg font-normal pb-1'>Last name</p>
                            <input className='w-[139px] lg:w-[225px] xl:w-[317px] h-[56px] rounded-lg bg-[#FAFAFA] px-4 text-lg text-[#5D5DC5] focus:outline-none' type="text" placeholder='Bloggs' required />
                        </div>
                    </div>
                    <div className='pb-6'>
                        <p className='text-white text-lg font-normal pb-1'>Email address</p>
                        <input className='w-[305px] lg:w-[480px] xl:w-[664px] h-[56px] rounded-lg bg-[#FAFAFA] px-4 text-lg text-[#5D5DC5] focus:outline-none' type="email" placeholder='alex.bloggs@email.com' required />
                    </div>
                    <div className='pb-6'>
                        <p className='text-white text-lg font-normal pb-1'>Your message</p>
                        <textarea className='w-[305px] lg:w-[480px] xl:w-[664px] h-[162px] rounded-lg bg-[#FAFAFA] px-4 text-lg text-[#5D5DC5] focus:outline-none pt-2' placeholder='Please enter your message' required></textarea>
                    </div>
                    <div className='w-[305px] lg:w-auto lg:text-right lg:ml-[268px] xl:ml-[450px] bg-[#5555FF] hover:bg-[#0f0fd8] transition duration-400 ease-in-out rounded-lg text-center'>
                        <button type='submit' className='  text-white text-lg font-semibold px-8 py-3 '>Submit message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;