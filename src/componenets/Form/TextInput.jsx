const TextInput = ({ id, label, name, placeholder, register }) => {
  return (
    <div className='flex flex-col mt-10'>
      <label htmlFor={name} className='mb-3 text-black font-bold text-[1.4rem]'>
        {label}
      </label>
      <input
        {...register}
        id={id}
        placeholder={placeholder}
        className='bg-transparent pl-3 border-black border-solid border-[0.05rem] h-[3.1rem] w-[32rem]'
      />
    </div>
  );
};

export default TextInput;
