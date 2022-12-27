import { Buttons, DateInput, RadioInput } from '@/components';
const CovidQuestionaireForm = () => {
  return (
    <form>
      <h1 className='text-[22px] font-bold mt-10'>
        გაქვს გადატანილი Covid-19?*
      </h1>
      <RadioInput id='yes' name='hadCovid' radioContent='კი' />
      <RadioInput id='no' name='hadCovid' radioContent='არა' />
      <RadioInput id='now' name='hadCovid' radioContent='ახლა მაქვს' />

      <h1 className='text-[22px] font-bold mt-10'>
        ანტისხეულების ტესტი გაქვს გაკეთებული?*
      </h1>
      <RadioInput id='yes' name='antibodies' radioContent='კი' />
      <RadioInput id='no' name='antibodies' radioContent='არა' />

      <DateInput
        label='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
        placeholder='რიცხვი'
        name='covidDate'
      />
      <Buttons />
    </form>
  );
};

export default CovidQuestionaireForm;
