import { RightArrow } from '@/componenets/Icons';
import { useForm } from 'react-hook-form';
import { TextInput } from '@/componenets/Form';

const PersonalInfoForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <TextInput
        id='firstName'
        label='სახელი*'
        name='firstname'
        placeholder='იოსებ'
        {...register('firstName', {
          required: 'სახელის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
        })}
      />
      <p>{errors.firstName?.message}</p>
      <TextInput
        id='lastName'
        label='გვარი*'
        name='lastName'
        placeholder='ჯუღაშვილი'
        {...register('lastName', {
          required: 'გვარის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
        })}
      />
      <p>{errors.lastName?.message}</p>

      <TextInput
        id='email'
        label='მეილი*'
        name='email'
        placeholder='იოსებ'
        {...register('email', {
          required: 'იმეილის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'იმეილის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          pattern: '/^[a-zA-Z0-9_.+-]+@redberry.ge/',
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
