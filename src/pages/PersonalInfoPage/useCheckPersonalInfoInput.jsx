import { useWatch } from 'react-hook-form';
const useCheckPersonalInfoInput = (control) => {
  const checkInputs = useWatch({
    control,
    name: ['first_name', 'last_name', 'email'],
  });
  return checkInputs;
};

export default useCheckPersonalInfoInput;
