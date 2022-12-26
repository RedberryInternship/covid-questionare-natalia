const BookVaccinationNotification = (props) => {
  return (
    <>
      <p className='ml-16 mt-10 text-xl font-normal text-gray-900 dark:text-gray-300'>
        {props.textContent}
        <a href='https://booking.moh.gov.ge/' className=' text-cyan-600'>
          https://booking.moh.gov.ge/
        </a>
      </p>
    </>
  );
};

export default BookVaccinationNotification;
