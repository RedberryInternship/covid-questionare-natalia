const TextAreaInput = ({ label, name, register }) => {
  return (
    <div className='flex flex-col mt-10'>
      <label
        htmlFor={name}
        className='w-[36rem] text-[22px] font-bold mb-4 text-dark-gray'
      >
        {label}
      </label>
      <textarea
        {...register}
        name={name}
        className='block p-2.5 w-full h-48 text-sm text-gray-900 bg-transparent border border-black resize-none '
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
