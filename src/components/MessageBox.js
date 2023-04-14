import React from 'react';
import file from '../assets/file.svg';
import smile from '../assets/emoji.svg';
import send from '../assets/send.svg';
import { BsPlusCircle } from 'react-icons/bs';

const MessageBox = () => {
  return (
    <div className='relative bottom-0 px-4 p-2 rounded-md border border-gray-200'>
        <div className='flex items-center justify-between'>
            {/* input message */}
            <div className='flex-1'>
                <input 
                    className='outline-none border-none text-gray-800'
                    type='text'
                    placeholder='Write a message...' 
                />
            </div>
            {/* icons */}
            <div className='flex space-x-2 items-center pr-2'>
                <button className='bg-[#00CEE0] p-2 text-white gap-2 h-[75%] rounded-md flex items-center text-[0.9rem]'>
                    <span>
                    <BsPlusCircle className='md:text-lg font-bold' />
                    </span>
                    <p className='sm:inline-block hidden'>Condition</p>
                </button>
                <img 
                    src={file}
                    className='w-[14px] cursor-pointer'
                    alt=''
                />
                <img 
                    src={smile}
                    className='w-[24px] cursor-pointer'
                    alt=''
                />
            </div>
            {/* send button */}
            <div className='cursor-pointer border-l flex justify-center p-2 border-gray-300'>
                <img 
                    src={send}
                    className='w-[90%]'
                    alt=''
                />
            </div>
        </div>
    </div>
  )
}

export default MessageBox