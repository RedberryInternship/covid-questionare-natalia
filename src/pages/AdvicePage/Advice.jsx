import { Layout } from '@/components';
import AdvicePageNum from '@/assets/images/AdvicePageNum.png';
import AdviceForm from './AdviceForm';
import bike from '@/assets/images/bike.png';
const Advice = () => {
  return (
    <Layout pageNumber={AdvicePageNum}>
      <AdviceForm />
      <img
        src={bike}
        alt='Identification'
        className=' sticky top-[20%] h-[47rem] pb-20'
      />
    </Layout>
  );
};

export default Advice;
