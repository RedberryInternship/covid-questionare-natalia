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
          className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
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
