import { useWatch } from 'react-hook-form';
const useCheckQuestionaireInput = (control) => {
  const checkInputs = useWatch({
    control,
    name: [
      'had_covid',
      'had_antibody_test',
      'antibodies.test_date',
      'antibodies.number',
      'covid_sickness_date',
    ],
  });
  localStorage.setItem(
    'covidQuestionaire',
    JSON.stringify({
      had_covid: checkInputs[0],
      had_antibody_test: checkInputs[1],
      antibodies: {
        test_date: checkInputs[2],
        number: checkInputs[3],
      },
      covid_sickness_date: checkInputs[4],
    })
  );
  return checkInputs;
};

export default useCheckQuestionaireInput;
