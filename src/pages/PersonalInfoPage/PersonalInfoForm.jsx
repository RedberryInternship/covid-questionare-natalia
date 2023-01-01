import { RightArrow, TextInput } from '@/components';
import useCheckPersonalInfoInput from './useCheckPersonalInfoInput';
import { FormContext } from '@/context/FormProvider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '.';
import { useNavigate } from 'react-router-dom';
const PersonalInfoForm = (props) => {
  const { updateFields, formData } = useContext(FormContext);
  const navigate = new useNavigate();
  const getItems = JSON.parse(localStorage.getItem('personalInfo'));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: getItems,
    mode: 'all',
  });

  useCheckPersonalInfoInput(control);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (isValid) {
          updateFields(data);
          console.log(formData);
          navigate('/covid-questionaire');
        }
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
