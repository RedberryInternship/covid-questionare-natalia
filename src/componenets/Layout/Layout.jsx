import React from 'react';
import { Fragment } from 'react';
import headerLogo from '@/assets/images/header-logo.svg';
const Layout = (props) => {
  return (
    <Fragment>
      <header className='w-[95rem] mt-20 m-auto '>
        <div className='flex justify-between content-center '>
          <img src={headerLogo} alt='header logo' />
          <img src={props.pageNumber} alt='page 1' />
        </div>
        <hr className=' mt-6 bg-black-700 border-none bg-black h-[0.1rem]' />
      </header>
      <div className='w-[95rem] m-auto flex justify-between'>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Layout;
