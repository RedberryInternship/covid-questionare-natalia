import { useWatch } from 'react-hook-form';
const useCheckVaccinationInput = (control) => {
  const checkRadio = useWatch({
    control,
    name: ['had_vaccine', 'vaccination_stage', 'i_am_waiting'],
  });
  return checkRadio;
};

export default useCheckVaccinationInput;
