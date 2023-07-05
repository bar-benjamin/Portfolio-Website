import React from 'react';

import PROGRAMMER from '../assets/programmer.gif';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[700px] w-full grid sm:grid-cols-1 gap-8 pr-2'>
            <div>
              <p>Enthusiastic software developer who loves turning ideas into reality.
                Eager to learn and adapt to new technologies and frameworks and thriving on continuous growth.
                I'm a quick learner, team player, and independent. In my free time, I enjoy sports and learning French.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={PROGRAMMER} alt="Your Image" className="mt-8" />
          </div>
      </div>
    </div>
  );
};

export default About;
