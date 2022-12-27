import { Layout } from '@/components';
import VaccinationForm from './VaccinationForm';
import VaccinationPageNum from '@/assets/images/vaccination-page-num.png';
import Doctor from '@/assets/images/doctor.png';
const Vaccination = () => {
  return (
    <Layout pageNumber={VaccinationPageNum}>
      <VaccinationForm />
      <img src={Doctor} alt='doctor' />
    </Layout>
  );
};

export default Vaccination;
