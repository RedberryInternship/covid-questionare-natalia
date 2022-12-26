import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../index.css';
import { Link } from 'react-router-dom';
const StartQuestions = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center h-screen -mt-20'>
      <img className=' w-[6.25rem] logo-animation' src={logo} alt='logo' />
      <Link
        to='/info'
        className=' text-3xl font-bold mt-24 cursor-pointer hover:text-shadow-2xl questions-animation '
      >
        კითხვარის <br /> დაწყება
      </Link>
    </div>
  );
};

export default StartQuestions;
