import { Layout } from '@/components';
import VaccinationForm from './components/VaccinationForm/VaccinationForm';
import VaccinationPageNum from '@/assets/images/vaccination-page-num.png';
import Doctor from '@/assets/images/doctor.png';
import Star from '@/assets/images/star.png';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { FormContext } from '@/context/FormProvider';
const Vaccination = () => {
  const { isNext } = useContext(FormContext);

  return (
    <Layout pageNumber={VaccinationPageNum}>
      <VaccinationForm />
      <img src={Doctor} alt='Doctor' className=' mt-10 z-20' />
      <motion.img
        src={Star}
        alt='star'
        className='absolute'
        initial={
          isNext
            ? { opacity: 0, top: 365, right: 780 }
            : { opacity: 0, top: 230, right: 500 }
        }
        animate={{ opacity: 1, top: 160, right: 660 }}
        transition={{ duration: 0.5 }}
      />
    </Layout>
  );
};

export default Vaccination;
