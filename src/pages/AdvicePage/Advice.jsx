import { Layout } from '@/components';
import AdvicePageNum from '@/assets/images/advice-page-num.png';
import AdviceForm from './components/form/AdviceForm';
import bike from '@/assets/images/bike.png';
import Heart from '@/assets/images/heart.png';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { FormContext } from '@/context/FormProvider';

const Advice = () => {
  const { finish } = useContext(FormContext);
  return (
    <Layout pageNumber={AdvicePageNum}>
      {finish && (
        <motion.div
          className=' h-max w-screen bg-dark-gray absolute z-30 top-0 left-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <AdviceForm />
      <motion.img
        src={Heart}
        alt=' heart'
        className=' sticky  w-48 h-44 '
        initial={{ opacity: 0, top: 180, width: 220, left: 1050 }}
        animate={
          !finish
            ? { opacity: 1, top: 270, width: 192, left: 1130 }
            : { scale: 12 }
        }
        transition={{ duration: 0.5 }}
      />
      <img
        src={bike}
        alt='Identification'
        className=' sticky top-[20%] h-[47rem] pb-20'
      />
    </Layout>
  );
};

export default Advice;
