import { Layout } from '@/components';
import AdvicePageNum from '@/assets/images/advice-page-num.png';
import AdviceForm from './AdviceForm';
import bike from '@/assets/images/bike.png';
import Heart from '@/assets/images/heart.png';
import { motion } from 'framer-motion';
const Advice = () => {
  return (
    <Layout pageNumber={AdvicePageNum}>
      <AdviceForm />
      <motion.img
        src={Heart}
        alt=' heart'
        className=' sticky  w-48 h-44 '
        initial={{ opacity: 0, top: 180, width: 220, left: 1050 }}
        animate={{ opacity: 1, top: 270, width: 192, left: 1130 }}
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
