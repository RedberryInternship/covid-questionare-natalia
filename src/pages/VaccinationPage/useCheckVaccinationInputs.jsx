import { useWatch } from 'react-hook-form';
const useCheckVaccinationInput = (control) => {
  const checkRadio = useWatch({
    control,
    name: ['had_vaccine', 'vaccination_stage', 'i_am_waiting'],
  });
  localStorage.setItem(
    'vaccination',
    JSON.stringify({
      had_vaccine: checkRadio[0],
      vaccination_stage: checkRadio[1],
      i_am_waiting: checkRadio[2],
    })
  );
  return checkRadio;
};

export default useCheckVaccinationInput;
