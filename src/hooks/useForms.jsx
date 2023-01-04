import { useForm } from 'react-hook-form';

const useForms = (getItems) => {
  const form = useForm({ defaultValues: getItems, mode: 'all' });

  return form;
};

export default useForms;
