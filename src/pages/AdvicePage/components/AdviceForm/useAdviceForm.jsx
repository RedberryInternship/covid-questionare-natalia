import { useWatch } from 'react-hook-form';
const useAdviceForm = (control) => {
  const checkInputs = useWatch({
    control,
    name: [
      'non_formal_meetings',
      'number_of_days_from_office',
      'what_about_meetings_in_live',
      'tell_us_your_opinion_about_us',
    ],
  });
  localStorage.setItem(
    'advice',
    JSON.stringify({
      non_formal_meetings: checkInputs[0],
      number_of_days_from_office: checkInputs[1],
      what_about_meetings_in_live: checkInputs[2],
      tell_us_your_opinion_about_us: checkInputs[3],
    })
  );
  return checkInputs;
};

export default useAdviceForm;
