import React from 'react';
import home from './assets/home.svg';
import create from './assets/create.svg';
import bell from './assets/bell.svg';
import character3 from './assets/character-3.png';
import help from './assets/help.svg';
import workspace from './assets/workspace.svg';

const Header = () => {
  return (
    <div className='px-4 md:px-16 lg:px-32 text-white bg-[#00354E]'>
        {/* Container */}
        <div className='flex justify-between'>
            {/* logo */}
            <div className='flex items-center'>
                <h2 className='sm:text-2xl text-xl font-semibold'>TestLogo</h2>
            </div>
        {/* center icons */}
            <div className='flex items-center text-gray-200 px-3 space-x-3  text-sm'>
                <div className='flex flex-col sm:px-4 p-3 gap-2 items-center cursor-pointer'>
                    <img
                     className='w-[24px] text-white' 
                     src={home} 
                     alt=''
                    />
                    <p className='sm:block hidden'>Home</p>
                </div>
                <div className='flex flex-col gap-2 sm:px-4 p-3 items-center cursor-pointer'>
                    <img
                     className='sm:w-[23px] w-[20px]' 
                     src={create} 
                     alt=''
                    />
                    <p className='sm:block hidden'>Create</p>
                </div>
                <div className='flex bg-[#004FFF] sm:px-4 p-3 flex-col gap-2 items-center cursor-pointer'>
                    <img 
                     src={workspace} 
                     alt='' 
                     className='sm:w-[23px] w-[18px] text-white' 
                    />
                    <p className='sm:block hidden'>Messages</p>
                </div>
            </div>
            {/* right div */}
            <div className='text-gray-200 text-xl flex justify-center items-center space-x-4'>
                <img 
                 src={help} 
                 alt='' 
                 className='cursor-pointer sm:w-[26px] w-[23px] text-white' 
                />
                <img 
                 src={bell} 
                 alt='' 
                 className='cursor-pointer sm:w-[26px] w-[23px] text-white' 
                />
                <img 
                 src={character3} 
                 alt='' 
                 className='cursor-pointer sm:w-[35px] w-[39px] text-white' 
                />
            </div>
        </div>
    </div>
  )
}

export default Header