import { Layout } from '@/components';
import questionsPageNum from '@/assets/images/questions-page-num.png';
import CovidQuestionaireForm from './CovidQuestionaireForm';
import QuestionaireImage from '@/assets/images/questionaire-image.png';
const CovidQuestionaire = () => {
  return (
    <Layout pageNumber={questionsPageNum}>
      <CovidQuestionaireForm />
      <img
        src={QuestionaireImage}
        alt='questionaire'
        className='w-[57rem] -mt-5'
      />
    </Layout>
  );
};

export default CovidQuestionaire;
