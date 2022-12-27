import { useWatch } from 'react-hook-form';
const useCheckAdviceInput = (control) => {
  const checkInputs = useWatch({
    control,
    name: ['meetings', 'officeWork', 'offlineMeetings', 'advice'],
  });
  return checkInputs;
};

export default useCheckAdviceInput;
