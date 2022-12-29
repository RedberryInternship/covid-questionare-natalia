import { useForm } from 'react-hook-form';
import { Buttons, DateInput, RadioInput, TextInput } from '@/components';
import useCheckQuestionaireInput from './useCheckQuestionaireInput';
import { useContext } from 'react';
import { FormContext } from '../../context/FormProvider';
import { useHistory } from 'react-router-dom';
import { ErrorMessage } from '@/components';
const CovidQuestionaireForm = () => {
  const { updateFields, printData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      had_covid: '',
      had_antibody_test: '',
      antibodies: {
        test_date: '',
        number: '',
      },
      covid_sickness_date: '',
    },
  });

  const checkRadio = useCheckQuestionaireInput(control);
  const history = useHistory();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (isValid) {
          printData();
          updateFields(data);
          history.push('/vaccination');
        }
      })}
    >
      <h1 className='text-[22px] font-bold mt-10'>
        გაქვს გადატანილი Covid-19?*
      </h1>
      <RadioInput
        register={register('had_covid', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        id='covidYes'
        name='had_covid'
        radioContent='კი'
        value='yes'
      />
      <RadioInput
        register={register('had_covid', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        id='covidNo'
        name='had_covid'
        radioContent='არა'
        value='no'
      />
      <RadioInput
        register={register('had_covid', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        id='now'
        name='had_covid'
        radioContent='ახლა მაქვს'
        value='have_right_now'
      />
      <ErrorMessage errorMessage={errors.had_covid?.message} />

      {checkRadio[0] === 'yes' ? (
        <>
          <h1 className='text-[22px] font-bold mt-10'>
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </h1>
          <RadioInput
            register={register('had_antibody_test', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            id='yes'
            name='had_antibody_test'
            radioContent='კი'
            value='true'
          />
          <RadioInput
            register={register('had_antibody_test', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            id='no'
            name='had_antibody_test'
            radioContent='არა'
            value='false'
          />
          <ErrorMessage errorMessage={errors.had_antibody_test?.message} />
        </>
      ) : null}

      {checkRadio[0] === 'yes' && checkRadio[1] === 'true' ? (
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
      ) : checkRadio[0] === 'yes' && checkRadio[1] === 'false' ? (
        <>
          <DateInput
            register={register('covid_sickness_date', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            label='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
            placeholder='დდ/თთ/წწ'
            name='covid_sickness_date'
          />
          <ErrorMessage errorMessage={errors.covid_sickness_date?.message} />
        </>
      ) : null}
      <Buttons link='/info' />
    </form>
  );
};

export default CovidQuestionaireForm;
