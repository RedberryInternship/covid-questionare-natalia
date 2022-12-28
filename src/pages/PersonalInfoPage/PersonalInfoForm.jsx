import { RightArrow, TextInput } from '@/components';
import { useForm } from 'react-hook-form';
import useCheckPersonalInfoInput from './useCheckPersonalInfoInput';
import { ErrorMessage } from '.';

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
    mode: 'all',
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
      <ErrorMessage errorMessage={errors.first_name?.message} />
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
      <ErrorMessage errorMessage={errors.last_name?.message} />

      <TextInput
        id='email'
        label='მეილი*'
        name='email'
        placeholder='fbi@redberry.ge'
        register={register('email', {
          required: 'იმეილის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'იმეილის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@redberry.ge/,
            message: 'იმეილი უნდა მთავრდებოდეს redberry.ge-ით',
          },
        })}
      />
      <ErrorMessage errorMessage={errors.email?.message} />

      <button type='submit' className='absolute left-[52%] bottom-16'>
        <RightArrow />
      </button>
    </form>
  );
};

export default PersonalInfoForm;
