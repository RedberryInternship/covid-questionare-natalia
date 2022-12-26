import { LeftArrow, RightArrow } from '@/componenets';
const Buttons = () => {
  return (
    <>
      <button type='submit' className='absolute left-[45%] bottom-16'>
        <LeftArrow />
      </button>
      <button type='submit' className='absolute left-[52%] bottom-16'>
        <RightArrow />
      </button>
    </>
  );
};

export default Buttons;
