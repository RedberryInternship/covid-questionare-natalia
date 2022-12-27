import { useForm, useWatch } from 'react-hook-form';
import {
  RadioInput,
  TextAreaInput,
  FinishButton,
  LeftArrow,
} from '@/components';
const AdviceForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      meetings: '',
      officeWork: '',
      offlineMeetings: '',
      advice: '',
    },
  });
  const checkInputs = useWatch({
    control,
    name: ['meetings', 'officeWork', 'offlineMeetings', 'advice'],
  });
  console.log(checkInputs);
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
        register={register('meetings', { required: true })}
        name='meetings'
        radioContent='კვირაში ორჯერ'
      />
      <RadioInput
        register={register('meetings', { required: true })}
        name='meetings'
        radioContent='კვირაში ერთხელ'
      />
      <RadioInput
        register={register('meetings', { required: true })}
        name='meetings'
        radioContent='ორ კვირაში ერთხელ'
      />
      <RadioInput
        register={register('meetings', { required: true })}
        name='meetings'
        radioContent='თვეში ერთხელ'
      />
      <h1 className='w-[36rem] text-[22px] font-bold mt-10 text-dark-gray'>
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </h1>
      <RadioInput
        register={register('officeWork', { required: true })}
        name='officeWork'
        radioContent='1'
      />
      <RadioInput
        register={register('officeWork', { required: true })}
        name='officeWork'
        radioContent='2'
      />
      <RadioInput
        register={register('officeWork', { required: true })}
        name='officeWork'
        radioContent='3'
      />
      <RadioInput
        register={register('officeWork', { required: true })}
        name='officeWork'
        radioContent='4'
      />
      <RadioInput
        register={register('officeWork', { required: true })}
        name='officeWork'
        radioContent='5'
      />
      <TextAreaInput
        register={register('offlineMeetings')}
        label='რას ფიქრობ ფიზიკურ შეკრებებზე?'
        name='offlineMeetings'
      />
      <TextAreaInput
        register={register('advice')}
        label={
          <h1>
            რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </h1>
        }
        name='advice'
      />
      <FinishButton />
      <button type='submit' className=' ml-[100%] mt-52 mb-20'>
        <LeftArrow />
      </button>
    </form>
  );
};

export default AdviceForm;
