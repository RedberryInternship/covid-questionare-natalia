import React from 'react';
import { Fragment } from 'react';
import { HeaderLogo } from '@/componenets/Icons';
const Layout = (props) => {
  return (
    <Fragment>
      <header className='w-[95rem] mt-20 m-auto '>
        <div className='flex justify-between content-center '>
          <HeaderLogo />
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
