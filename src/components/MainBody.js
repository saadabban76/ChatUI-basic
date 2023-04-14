import React from 'react';
import character1 from '../assets/character-1.png';
import character2 from '../assets/character-2.png';
import character3 from '../assets/character-3.png';
import SenderMsg from './SenderMsg';
import ReceiverMsg from './ReceiverMsg';
import MessageBox from './MessageBox';

const MainBody = () => {
  return (
    <div className='pt-8 flex flex-col justify-between h-[91%]'>
        {/* main */}
        <div className='p-4 flex flex-col space-y-8 items-start'>
            {/* sender message */}
            <SenderMsg 
                name='John wick'
                time='7:00'
                character={character1}
                message='Can you make a website for me ?'
            />
            <ReceiverMsg 
                name='Me'
                time='7:10'
                character={character3}
                message='Yes.. I can do that'
            />
            <SenderMsg 
                name='Jennifer'
                time='8:00'
                character={character1}
                message='Thats Great'
            />
            <ReceiverMsg 
                name='Me'
                time='8:15'
                character={character3}
                message='Yeah'
            />
            <SenderMsg 
                name='John wick'
                time='8:35'
                character={character2}
                message='Cool !'
            />
            <ReceiverMsg 
                name='Me'
                time='8:35'
                character={character3}
                message='Lets meet up!'
            />
        </div>
        {/* message */}
            <MessageBox />
    </div>
  )
}

export default MainBody