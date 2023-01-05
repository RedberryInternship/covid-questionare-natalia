import {
  RadioInput,
  TextAreaInput,
  FinishButton,
  LeftArrow,
} from '@/components';
import useCheckInput from './useCheckAdviceInput';
import { Link, useNavigate } from 'react-router-dom';
import { FormContext } from '@/context/FormProvider';
import { useContext } from 'react';
import { ErrorMessage } from '@/components';
import { useForms } from '@/hooks';

const AdviceForm = () => {
  const { onPrev, updateFields, setFinish } = useContext(FormContext);
  const navigate = new useNavigate();
  const getItems = JSON.parse(localStorage.getItem('advice'));
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForms(getItems);

  useCheckInput(control);

  return (
    <form
      onSubmit={handleSubmit(() => {
        if (isValid) {
          setFinish(true);
          updateFields(getItems, true);
          setTimeout(() => navigate('/thank-you'), 300);
        }
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
        register={register('non_formal_meetings', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='non_formal_meetings'
        radioContent='კვირაში ორჯერ'
        value='twice_a_week'
      />
      <RadioInput
        register={register('non_formal_meetings', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='non_formal_meetings'
        radioContent='კვირაში ერთხელ'
        value='once_a_week'
      />
      <RadioInput
        register={register('non_formal_meetings', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='non_formal_meetings'
        radioContent='ორ კვირაში ერთხელ'
        value='once_in_a_two_weeks'
      />
      <RadioInput
        register={register('non_formal_meetings', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='non_formal_meetings'
        radioContent='თვეში ერთხელ'
        value='once_in_a_month'
      />
      <ErrorMessage errorMessage={errors.non_formal_meetings?.message} />

      <h1 className='w-[36rem] text-[22px] font-bold mt-10 text-dark-gray'>
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </h1>
      <RadioInput
        register={register('number_of_days_from_office', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='number_of_days_from_office'
        radioContent='1'
        value='1'
      />
      <RadioInput
        register={register('number_of_days_from_office', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='number_of_days_from_office'
        radioContent='2'
        value='2'
      />
      <RadioInput
        register={register('number_of_days_from_office', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='number_of_days_from_office'
        radioContent='3'
        value='3'
      />
      <RadioInput
        register={register('number_of_days_from_office', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='number_of_days_from_office'
        radioContent='4'
        value='4'
      />
      <RadioInput
        register={register('number_of_days_from_office', {
          required: 'ველის შევსება სავალდებულოა',
        })}
        name='number_of_days_from_office'
        radioContent='5'
        value='5'
      />
      <ErrorMessage errorMessage={errors.number_of_days_from_office?.message} />

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
      <Link to='/vaccination'>
        <button className=' ml-[100%] mt-52 mb-20' onClick={onPrev}>
          <LeftArrow />
        </button>
      </Link>
    </form>
  );
};

export default AdviceForm;
