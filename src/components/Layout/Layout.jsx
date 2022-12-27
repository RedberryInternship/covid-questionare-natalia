import { Fragment } from 'react';
import { HeaderLogo } from '@/components/Icons';
const Layout = (props) => {
  return (
    <Fragment>
      <header className=' sticky w-[95rem] h-34 top-0 m-auto bg-brown-450 '>
        <div className='flex justify-between content-center pt-20 '>
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
