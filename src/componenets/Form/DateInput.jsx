const DateInput = ({ label, name, placeholder }) => {
  return (
    <div className='relative mt-10'>
      <label className='text-[22px] font-bold'>{label}</label>
      <input
        type='date'
        className=' m-6 bg-transparent pl-3 border-black border-solid border-[0.05rem] h-[3.1rem] w-[32rem]'
        name={name}
        id='date'
        placeholder={placeholder}
      />
    </div>
  );
};

export default DateInput;
