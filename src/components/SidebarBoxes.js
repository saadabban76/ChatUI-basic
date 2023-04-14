import React from 'react'

const SidebarBoxes = ({icon, title, subtitle, time}) => {
  return (
    <div className='cursor-pointer border-b border-gray-200 p-2 px-3 hover:bg-[#F0F3FD]'>
      {/* inside div */}
      <div className='flex justify-between text-gray-400 text-[0.9rem]'>
        {/* left side */}
        <div className='flex space-x-2'>
          <img src={icon} className='w-16 h-16' alt='icon' />
          <div className='flex flex-col -space-y-1'>
            <h2 className='text-[#3C647A] text-[1rem] font-semibold'>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
        {/* right side */}
        <p>{time}h ago</p>
      </div>
    </div>
  )
}

export default SidebarBoxes