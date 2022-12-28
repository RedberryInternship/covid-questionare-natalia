import { useWatch } from 'react-hook-form';
const useCheckAdviceInput = (control) => {
  const checkInputs = useWatch({
    control,
    name: [
      'non_formal_meetings',
      'number_of_days_from_office',
      'what_about_meetings_in_live',
      'tell_us_your_opinion_about_us',
    ],
  });
  return checkInputs;
};

export default useCheckAdviceInput;
