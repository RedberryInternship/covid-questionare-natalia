import Layout from '../../componenets/Layout/Layout';
import page2 from '../../assets/images/page2.png';
import CovidQuestionaireForm from './CovidQuestionaireForm';
import QuestionaireImage from '../../assets/images/QuestionaireImage.png';
const CovidQuestionaire = () => {
  return (
    <Layout pageNumber={page2}>
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
