import {
  RadioInput,
  Buttons,
  BookVaccinationNotification,
} from '@/componenets';
import { useForm, useWatch } from 'react-hook-form';

const VaccinationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      vaccinated: '',
    },
  });
  const checkRadio = useWatch({
    control,
    name: ['vaccinated', 'dose', 'planVaccination'],
  });

  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <h1 className='text-[22px] font-bold mt-10'>უკვე აცრილი ხარ?*</h1>
      <RadioInput
        register={register('vaccinated', { required: true })}
        name='vaccinated'
        radioContent='კი'
      />
      <RadioInput
        register={register('vaccinated', { required: true })}
        name='vaccinated'
        radioContent='არა'
      />
      {checkRadio[0] === 'კი' ? (
        <div>
          <h1 className='text-[22px] font-bold mt-10'>აირჩიე რა ეტაპზე ხარ*</h1>
          <RadioInput
            register={register('dose', { required: true })}
            name='dose'
            radioContent='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
          />
          <RadioInput
            register={register('dose', { required: true })}
            name='dose'
            radioContent='სრულად აცრილი ვარ'
          />
          <RadioInput
            register={register('dose', { required: true })}
            name='dose'
            radioContent='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
          />
        </div>
      ) : checkRadio[0] === 'არა' ? (
        <div>
          <h1 className='text-[22px] font-bold mt-10'>რას ელოდები?*</h1>
          <RadioInput
            register={register('dose', { required: true })}
            name='planVaccination'
            radioContent='დარეგისტრირებული ვარ და ველოდები რიცხვს'
          />
          <RadioInput
            register={register('planVaccination', { required: true })}
            name='planVaccination'
            radioContent='არ ვგეგმავ'
          />
          <RadioInput
            register={register('planVaccination', { required: true })}
            name='planVaccination'
            radioContent='გადატანილი მაქვს და ვგეგმავ აცრას'
          />
        </div>
      ) : null}
      {checkRadio[1] === 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე' &&
      checkRadio[0] === 'კი' ? (
        <BookVaccinationNotification
          textContent={
            <>
              რომ არ გადადო, <br /> ბარემ ახლავე დარეგისტრირდი <br />
            </>
          }
        />
      ) : checkRadio[2] === 'გადატანილი მაქვს და ვგეგმავ აცრას' &&
        checkRadio[0] === 'არა' ? (
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

      <Buttons />
    </form>
  );
};

export default VaccinationForm;
