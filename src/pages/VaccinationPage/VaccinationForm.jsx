import { RadioInput, Buttons, BookVaccinationNotification } from '@/components';
import { useForm } from 'react-hook-form';
import useCheckVaccinationInput from './useCheckVaccinationInputs';
import { FormContext } from '@/context/FormProvider';
import { useContext } from 'react';
import { ErrorMessage } from '@/components';
import { useNavigate } from 'react-router-dom';

const VaccinationForm = () => {
  const { updateFields } = useContext(FormContext);
  const navigate = new useNavigate();

  const getItems = JSON.parse(localStorage.getItem('vaccination'));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: getItems,
  });

  const checkRadio = useCheckVaccinationInput(control);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (isValid) {
          updateFields(data);
          navigate('/advice');
        }
      })}
    >
      <h1 className='text-[22px] font-bold mt-10'>უკვე აცრილი ხარ?*</h1>
      <RadioInput
        register={register('had_vaccine', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='had_vaccine'
        radioContent='კი'
        value='true'
      />
      <RadioInput
        register={register('had_vaccine', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='had_vaccine'
        radioContent='არა'
        value='false'
      />
      <ErrorMessage errorMessage={errors.had_vaccine?.message} />

      {checkRadio[0] === 'true' ? (
        <div>
          <h1 className='text-[22px] font-bold mt-10'>აირჩიე რა ეტაპზე ხარ*</h1>
          <RadioInput
            register={register('vaccination_stage', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            name='vaccination_stage'
            radioContent='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
            value='first_dosage_and_registered_on_the_second'
          />
          <RadioInput
            register={register('vaccination_stage', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            name='vaccination_stage'
            radioContent='სრულად აცრილი ვარ'
            value='fully_vaccinated'
          />
          <RadioInput
            register={register('vaccination_stage', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            name='vaccination_stage'
            radioContent='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
            value='first_dosage_and_not_registered_yet'
          />
          <ErrorMessage errorMessage={errors.vaccination_stage?.message} />
        </div>
      ) : checkRadio[0] === 'false' ? (
        <div>
          <h1 className='text-[22px] font-bold mt-10'>რას ელოდები?*</h1>
          <RadioInput
            register={register('i_am_waiting', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            name='i_am_waiting'
            radioContent='დარეგისტრირებული ვარ და ველოდები რიცხვს'
            value='registered_and_waiting'
          />
          <RadioInput
            register={register('i_am_waiting', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            name='i_am_waiting'
            radioContent='არ ვგეგმავ'
            value='not_planning'
          />
          <RadioInput
            register={register('i_am_waiting', {
              required: 'ველის შევსება სავალდებულოა',
            })}
            name='i_am_waiting'
            radioContent='გადატანილი მაქვს და ვგეგმავ აცრას'
            value='had_covid_and_planning_to_be_vaccinated'
          />
          <ErrorMessage errorMessage={errors.i_am_waiting?.message} />
        </div>
      ) : null}
      {checkRadio[1] === 'first_dosage_and_not_registered_yet' &&
      checkRadio[0] === 'true' ? (
        <BookVaccinationNotification
          textContent={
            <>
              რომ არ გადადო, <br /> ბარემ ახლავე დარეგისტრირდი <br />
            </>
          }
        />
      ) : checkRadio[2] === 'had_covid_and_planning_to_be_vaccinated' &&
        checkRadio[0] === 'false' ? (
        <BookVaccinationNotification
          textContent={
            <>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br /> თვის შემდეგ
              შეგიძლიათ ვაქცინის გაკეთება. <br /> <br /> 👉 რეგისტრაციის ბმული
              <br />
            </>
          }
        />
      ) : null}

      <Buttons link='/covid-questionaire' />
    </form>
  );
};

export default VaccinationForm;
