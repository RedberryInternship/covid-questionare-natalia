import React from 'react';
import logo from '@/assets/images/logo.png';
import './StartQuestions.css';
const StartQuestions = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center h-screen -mt-24'>
      <img
        className=' w-[6.3rem] logo-animation absolute'
        src={logo}
        alt='logo'
      />
      <div className=' overflow-y-hidden relative w-96 h-20 top-40 -left-[5.3rem] text-center'>
        <a
          href='/info'
          className='text-3xl font-bold cursor-pointer hover:text-shadow-2xl text-down-animation invisible absolute text-dark-gray font-arial'
        >
          კითხვარის <br /> დაწყება
        </a>
      </div>
    </div>
  );
};

export default StartQuestions;
