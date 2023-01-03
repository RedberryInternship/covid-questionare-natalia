import { Layout } from '@/components';
import questionsPageNum from '@/assets/images/questions-page-num.png';
import CovidQuestionaireForm from './CovidQuestionaireForm';
import QuestionaireImage from '@/assets/images/questionaire-image.png';
import Circle from '@/assets/images/circle.png';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { FormContext } from '@/context/FormProvider';
const CovidQuestionaire = () => {
  const { isNext } = useContext(FormContext);

  return (
    <Layout pageNumber={questionsPageNum}>
      <CovidQuestionaireForm />
      <img
        src={QuestionaireImage}
        alt='questionaire'
        className='w-[57rem] -mt-5'
      />
      <motion.img
        src={Circle}
        alt='red circle'
        className='absolute'
        initial={
          isNext
            ? { opacity: 0, top: 300, right: 600, width: 190 }
            : { opacity: 0, top: 160, right: 660, width: 190 }
        }
        animate={{ opacity: 0.6, top: 365, right: 800, width: 230 }}
        transition={{ duration: 0.5 }}
      />
    </Layout>
  );
};

export default CovidQuestionaire;
