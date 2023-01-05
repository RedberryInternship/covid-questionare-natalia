import { LeftArrow, RightArrow } from '@/components';
import { FormContext } from '@/context/FormProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = ({ link }) => {
  const { onNext, onPrev } = useContext(FormContext);

  return (
    <>
      <NavLink to={link}>
        <button className='absolute left-[45%] bottom-16 z-40' onClick={onPrev}>
          <LeftArrow />
        </button>
      </NavLink>

      <button
        type='submit'
        className='absolute left-[52%] bottom-16 z-40'
        onClick={onNext}
      >
        <RightArrow />
      </button>
    </>
  );
};

export default Buttons;
