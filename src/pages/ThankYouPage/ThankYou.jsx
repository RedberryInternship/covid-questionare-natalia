import ThankYouImage from '../../assets/images/thank-you-image.png';
// import '../../App';
const ThankYou = () => {
  return (
    <div className='h-screen bg-dark-gray flex justify-center items-center '>
      <img src={ThankYouImage} alt='Thank you' className='hidden' />
    </div>
  );
};

export default ThankYou;
