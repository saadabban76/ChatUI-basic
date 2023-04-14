import React from 'react';

const ReceiverMsg = ({name, character, time, message}) => {
  return (
    <div className='flex self-end flex-row-reverse'>
    <img src={character} 
    className='ml-2 md:w-[45px] md:h-[45px] w-[40px] h-[40px]' alt='' />
    <div className='flex flex-col space-y-1'>
        {/* name and time */}
        <div className='flex justify-between flex-row-reverse'>
            <h2 className='text-[#3C647A] md:text-[1rem] text-[0.9rem] font-semibold'>{name}</h2>
            <p className='px-4 md:text-[0.9rem] text-[0.8rem] text-gray-400'>{time}</p>
        </div>
            <p className='py-2 px-2 bg-[#d6e9ff] rounded-md break-words'>{message}</p>
        {/* msg */}
    </div>
    </div>
  )
}

export default ReceiverMsg