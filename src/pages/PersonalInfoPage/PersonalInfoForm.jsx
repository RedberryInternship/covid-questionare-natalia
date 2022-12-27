import { RightArrow, TextInput } from '@/components';
import { useForm } from 'react-hook-form';
import useCheckPersonalInfoInput from './useCheckPersonalInfoInput';

const PersonalInfoForm = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
  });

  const checkInputs = useCheckPersonalInfoInput(control);

  console.log(errors);
  console.log(checkInputs);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <TextInput
        id='first_name'
        label='სახელი*'
        name='first_name'
        placeholder='იოსებ'
        register={register('first_name', {
          required: 'სახელის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
        })}
      />
      <p>{errors.first_name?.message}</p>
      <TextInput
        id='last_name'
        label='გვარი*'
        name='last_name'
        placeholder='ჯუღაშვილი'
        register={register('last_name', {
          required: 'გვარის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
        })}
      />
      <p>{errors.last_name?.message}</p>

      <TextInput
        id='email'
        label='მეილი*'
        name='email'
        placeholder='იოსებ'
        register={register('email', {
          required: 'იმეილის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'იმეილის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          pattern: /^[a-zA-Z0-9_.+-]+@redberry.ge/,
        })}
      />
      <p>{errors.email?.message}</p>

      <button type='submit' className='absolute left-[52%] bottom-16'>
        <RightArrow />
      </button>
    </form>
  );
};

export default PersonalInfoForm;
