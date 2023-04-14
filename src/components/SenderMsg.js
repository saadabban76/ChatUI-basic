import React from 'react'

const SenderMsg = ({character, name, message, time}) => {
  return (
    <div className='flex space-x-2'>
        <img src={character} 
        className='md:w-[45px] md:h-[45px] w-[40px] h-[40px]' alt='' />
        <div className='flex flex-col space-y-1'>
            {/* name and time */}
            <div className='flex justify-between'>
                <h2 className='text-[#3C647A] md:text-[1rem] text-[0.9rem] font-semibold'>{name}</h2>
                <p className='px-4 md:text-[0.9rem] text-[0.8rem] text-gray-400'>{time}</p>
            </div>
                <p className='py-2 px-2 bg-[#e4f7e2] rounded-md break-words'>{message}</p>
            {/* msg */}
        </div>
    </div>
  )
}

export default SenderMsg