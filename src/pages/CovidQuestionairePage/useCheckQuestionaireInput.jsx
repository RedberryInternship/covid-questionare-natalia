import { useWatch } from 'react-hook-form';
const useCheckQuestionaireInput = (control) => {
  const checkInputs = useWatch({
    control,
    name: [
      'had_covid',
      'had_antibody_test',
      'antibodies.test_date',
      'antibodies.number',
      'covid_date',
    ],
  });
  return checkInputs;
};

export default useCheckQuestionaireInput;
