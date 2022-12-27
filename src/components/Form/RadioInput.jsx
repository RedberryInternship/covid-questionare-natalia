const RadioInput = ({ id, name, radioContent, register }) => {
  return (
    <>
      <div className='flex items-center mb-4 mt-4 ml-6 '>
        <input
          {...register}
          id={id}
          type='radio'
          name={name}
          value={radioContent}
          className='radio-button appearance-none w-6 h-6 rounded-full border border-solid border-black before:block before:w-[18px] before:h-[18px] before:m-[2px] before:content-[""] before:rounded-full checked:before:bg-black '
        />
        <label
          htmlFor={id}
          className='ml-5 text-xl font-normal text-gray-900 dark:text-gray-300'
        >
          {radioContent}
        </label>
      </div>
    </>
  );
};

export default RadioInput;
