import { LeftArrow, RightArrow } from '@/components';
import { NavLink } from 'react-router-dom';
const Buttons = ({ link }) => {
  return (
    <>
      <NavLink to={link}>
        <button className='absolute left-[45%] bottom-16'>
          <LeftArrow />
        </button>
      </NavLink>

      <button type='submit' className='absolute left-[52%] bottom-16'>
        <RightArrow />
      </button>
    </>
  );
};

export default Buttons;
