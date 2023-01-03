import ThankYouImage from '@/assets/images/thank-you-image.png';
import Star from '@/assets/images/tiny-star.png';
import './ThankYou.css';
const ThankYou = () => {
  return (
    <div className='h-screen bg-dark-gray flex flex-col justify-center items-center '>
      <img
        src={Star}
        alt='Big star'
        className=' w-12 big-star-anim  absolute invisible'
      />
      <img
        src={ThankYouImage}
        alt='Thank you'
        className=' visibility-animation thanks-image absolute invisible'
      />
      <img
        src={Star}
        alt='Tiny star'
        className=' w-8 tiny-star-anim  absolute invisible'
      />
    </div>
  );
};

export default ThankYou;
