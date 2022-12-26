import { Layout } from '@/componenets';
import VaccinationForm from './VaccinationForm';
import VaccinationPageNum from '@/assets/images/VaccinationPageNum.png';
import doctor from '@/assets/images/doctor.png';
const Vaccination = () => {
  return (
    <Layout pageNumber={VaccinationPageNum}>
      <VaccinationForm />
      <div>
        <img src={doctor} alt='doctor' className='mt-5' />
      </div>
    </Layout>
  );
};

export default Vaccination;
