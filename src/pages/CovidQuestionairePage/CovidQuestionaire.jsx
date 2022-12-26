import { Layout } from '@/componenets';
import questionsPageNum from '@/assets/images/questionsPageNum.png';
import CovidQuestionaireForm from './CovidQuestionaireForm';
import QuestionaireImage from '@/assets/images/QuestionaireImage.png';
const CovidQuestionaire = () => {
  return (
    <Layout pageNumber={questionsPageNum}>
      <CovidQuestionaireForm />
      <img
        src={QuestionaireImage}
        alt='Identification'
        className='w-[57rem] -mt-5'
      />
    </Layout>
  );
};

export default CovidQuestionaire;
