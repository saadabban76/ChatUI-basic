import React from 'react';
import SidebarBoxes from './components/SidebarBoxes';

import bluecircle from './assets/bluecircle.png';
import greencircle from './assets/greencircle.png';
import orangecircle from './assets/orangecircle.png';
import redcircle from './assets/redcircle.png';

import BodyHeader from './components/BodyHeader';
import MainBody from './components/MainBody';


const Hero = () => {
  return (
    <div className='p-4 md:px-16 lg:px-32 bg-[#f0f7ff]'>
        {/* main component */}
        <div className='lg:flex-row flex-col flex justify-between'>
            {/* sidebar */}
            <div className='lg:h-[88vh] h-auto bg-white flex flex-col border border-gray-200 rounded-md'>
                <SidebarBoxes
                    icon={bluecircle} 
                    title='Friends' 
                    subtitle="I'm down the street"
                    time='4' 
                />
                <SidebarBoxes
                    icon={greencircle} 
                    title='Collage Group' 
                    subtitle="Yoo! wassup"
                    time='1' 
                />
                <SidebarBoxes
                    icon={orangecircle} 
                    title='Entrepreneurs' 
                    subtitle='how is your start up going'
                    time='3' 
                />
                <SidebarBoxes
                    icon={redcircle} 
                    title='ProjectX' 
                    subtitle="lets work on this project"
                    time='2' 
                />
            </div>
            {/* right bar */}
            <div className='lg:ml-5 lg:mt-0 mt-3 flex-1 bg-white rounded-md border border-gray-100'>
                {/* Header */}
                <BodyHeader />
                {/* Main body */}
                <MainBody />
            </div>
        </div>
    </div>
  )
}

export default Hero