import { useForm } from 'react-hook-form';
import { Buttons, DateInput, RadioInput, TextInput } from '@/components';
import useCheckQuestionaireInput from './useCheckQuestionaireInput';
const CovidQuestionaireForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      had_covid: '',
      had_antibody_test: '',
      'antibodies.test_date': '',
      'antibodies.number': '',
      covid_date: '',
    },
  });

  const checkRadio = useCheckQuestionaireInput(control);

  console.log(errors);
  console.log(checkRadio);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <h1 className='text-[22px] font-bold mt-10'>
        გაქვს გადატანილი Covid-19?*
      </h1>
      <RadioInput
        register={register('had_covid', { required: true })}
        id='covidYes'
        name='had_covid'
        radioContent='კი'
      />
      <RadioInput
        register={register('had_covid', { required: true })}
        id='covidNo'
        name='had_covid'
        radioContent='არა'
      />
      <RadioInput
        register={register('had_covid', { required: true })}
        id='now'
        name='had_covid'
        radioContent='ახლა მაქვს'
      />

      {checkRadio[0] === 'კი' ? (
        <>
          <h1 className='text-[22px] font-bold mt-10'>
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </h1>
          <RadioInput
            register={register('had_antibody_test', { required: true })}
            id='yes'
            name='had_antibody_test'
            radioContent='კი'
          />
          <RadioInput
            register={register('had_antibody_test', { required: true })}
            id='no'
            name='had_antibody_test'
            radioContent='არა'
          />
        </>
      ) : null}

      {checkRadio[0] === 'კი' && checkRadio[1] === 'კი' ? (
        <>
          <DateInput
            register={register('antibodies.test_date')}
            label='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'
            placeholder='რიცხვი'
            name='antibodies.test_date'
          />
          <div className=' ml-6 -mt-10'>
            <TextInput
              register={register('antibodies.number')}
              name='antibodies.number'
              placeholder='ანტისხეულების რაოდენობა'
            />
          </div>
        </>
      ) : checkRadio[0] === 'კი' && checkRadio[1] === 'არა' ? (
        <DateInput
          register={register('covid_date', { required: true })}
          label='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
          placeholder='დდ/თთ/წწ'
          name='covid_date'
        />
      ) : null}
      <Buttons />
    </form>
  );
};

export default CovidQuestionaireForm;
