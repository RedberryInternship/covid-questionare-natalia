import { useForm } from 'react-hook-form';
import {
  RadioInput,
  TextAreaInput,
  FinishButton,
  LeftArrow,
} from '@/components';
import useCheckInput from './useCheckAdviceInput';
const AdviceForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      non_formal_meetings: '',
      number_of_days_from_office: '',
      what_about_meetings_in_live: '',
      tell_us_your_opinion_about_us: '',
    },
  });

  console.log(useCheckInput(control));
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <p className='w-[36rem] text-xl leading-7 mt-10 text-dark-gray'>
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის. <br /> <br /> პანდემიის პერიოდში ერთმანეთსაც იშვიათად
        ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
      <h1 className='w-[36rem] text-[22px] font-bold mt-10 text-dark-gray'>
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </h1>
      <RadioInput
        register={register('non_formal_meetings', { required: true })}
        name='non_formal_meetings'
        radioContent='კვირაში ორჯერ'
      />
      <RadioInput
        register={register('non_formal_meetings', { required: true })}
        name='non_formal_meetings'
        radioContent='კვირაში ერთხელ'
      />
      <RadioInput
        register={register('non_formal_meetings', { required: true })}
        name='non_formal_meetings'
        radioContent='ორ კვირაში ერთხელ'
      />
      <RadioInput
        register={register('non_formal_meetings', { required: true })}
        name='non_formal_meetings'
        radioContent='თვეში ერთხელ'
      />
      <h1 className='w-[36rem] text-[22px] font-bold mt-10 text-dark-gray'>
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </h1>
      <RadioInput
        register={register('number_of_days_from_office', { required: true })}
        name='number_of_days_from_office'
        radioContent='1'
      />
      <RadioInput
        register={register('number_of_days_from_office', { required: true })}
        name='number_of_days_from_office'
        radioContent='2'
      />
      <RadioInput
        register={register('number_of_days_from_office', { required: true })}
        name='number_of_days_from_office'
        radioContent='3'
      />
      <RadioInput
        register={register('number_of_days_from_office', { required: true })}
        name='number_of_days_from_office'
        radioContent='4'
      />
      <RadioInput
        register={register('number_of_days_from_office', { required: true })}
        name='number_of_days_from_office'
        radioContent='5'
      />
      <TextAreaInput
        register={register('what_about_meetings_in_live')}
        label='რას ფიქრობ ფიზიკურ შეკრებებზე?'
        name='what_about_meetings_in_live'
      />
      <TextAreaInput
        register={register('tell_us_your_opinion_about_us')}
        label={
          <h1>
            რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </h1>
        }
        name='tell_us_your_opinion_about_us'
      />
      <FinishButton />
      <button type='submit' className=' ml-[100%] mt-52 mb-20'>
        <LeftArrow />
      </button>
    </form>
  );
};

export default AdviceForm;
