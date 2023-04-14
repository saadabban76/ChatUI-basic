import React from 'react';
import {TbDotsCircleHorizontal} from 'react-icons/tb';
import {BsPlusCircle} from 'react-icons/bs';
import bluecircle from '../assets/bluecircle.png';
import character1 from '../assets/character-1.png';
import character2 from '../assets/character-2.png';
import character3 from '../assets/character-3.png';

const BodyHeader = () => {
  return (
    <div className='pb-2 p-3 flex justify-between items-center'>
    {/* left side */}
    <div className='flex space-x-2 items-center'>
        <img src={bluecircle} alt='' className='md:w-[45px] w-[27px]' />
        <div className='flex flex-col'>
            <h2 className='text-[#3C647A] text-[1.2rem] font-semibold'>Friends</h2>
            <p className='text-gray-400'>3 Members</p>
        </div>
    </div>
    {/* center */}
    <div className='flex space-x-1 items-center'>
        <img src={character1} alt='' className='md:w-[36px] md:h-[36px] w-[33px] h-[33px]' />
        <img src={character2} alt='' className='md:w-[36px] md:h-[36px] w-[33px] h-[33px]' />
        <img src={character3} alt='' className='md:w-[36px] md:h-[36px] w-[33px] h-[33px]' />
        <BsPlusCircle className='md:text-[35px] text-[28px] text-[#219ef8]' />
    </div>
    {/* right side */}
    <div>
        <TbDotsCircleHorizontal className='md:text-[34px] text-[32px] text-[#219ef8]' />
    </div>
    </div>
  )
}

export default BodyHeader