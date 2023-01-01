import { Layout } from '@/components';
import VaccinationForm from './VaccinationForm';
import VaccinationPageNum from '@/assets/images/vaccination-page-num.png';
import Doctor from '@/assets/images/doctor.png';
import Star from '@/assets/images/star.png';
import { motion } from 'framer-motion';
const Vaccination = () => {
  return (
    <Layout pageNumber={VaccinationPageNum}>
      <VaccinationForm />
      <img src={Doctor} alt='Doctor' className=' mt-10' />
      <motion.img
        src={Star}
        alt='star'
        className='absolute'
        initial={{ opacity: 0, top: 230, right: 500 }}
        // initial={{ opacity: 0, top: 365, right: 780 }}
        animate={{ opacity: 0.7, top: 160, right: 660 }}
        transition={{ duration: 0.5 }}
      />
    </Layout>
  );
};

export default Vaccination;
