import { LeftArrow, RightArrow } from '@/components';
import { Link } from 'react-router-dom';
const Buttons = ({ link }) => {
  return (
    <>
      <Link to={link}>
        <button className='absolute left-[45%] bottom-16'>
          <LeftArrow />
        </button>
      </Link>

      <button type='submit' className='absolute left-[52%] bottom-16'>
        <RightArrow />
      </button>
    </>
  );
};

export default Buttons;
