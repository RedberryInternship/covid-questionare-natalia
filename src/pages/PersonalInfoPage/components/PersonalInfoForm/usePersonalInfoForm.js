import { useWatch } from 'react-hook-form';
const usePersonalInfoForm = (control) => {
  const checkInputs = useWatch({
    control,
    name: ['first_name', 'last_name', 'email'],
  });

  localStorage.setItem(
    'personalInfo',
    JSON.stringify({
      first_name: checkInputs[0],
      last_name: checkInputs[1],
      email: checkInputs[2],
    })
  );
  return checkInputs;
};

export default usePersonalInfoForm;
