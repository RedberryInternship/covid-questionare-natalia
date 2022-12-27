import { useWatch } from 'react-hook-form';
const useCheckVaccinationInput = (control) => {
  const checkRadio = useWatch({
    control,
    name: ['vaccinated', 'dose', 'planVaccination'],
  });
  return checkRadio;
};

export default useCheckVaccinationInput;
