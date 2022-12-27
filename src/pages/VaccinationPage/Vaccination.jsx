import { Layout } from '@/components';
import VaccinationForm from './VaccinationForm';
import VaccinationPageNum from '@/assets/images/VaccinationPageNum.png';
import doctor from '@/assets/images/doctor.png';
const Vaccination = () => {
  return (
    <Layout pageNumber={VaccinationPageNum}>
      <VaccinationForm />
      <img src={doctor} alt='doctor' />
    </Layout>
  );
};

export default Vaccination;
