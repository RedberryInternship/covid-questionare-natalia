import { Layout } from '@/components/Layout';
import PersonalInfoForm from './PersonalInfoForm';
import identificationPageNum from '@/assets/images/identificationPageNum.png';
import identificationImage from '@/assets/images/identificationImage.png';

const PersonalInfo = () => {
  return (
    <Layout pageNumber={identificationPageNum}>
      <div>
        <PersonalInfoForm />
        <div>
          <hr className=' mt-24 bg-black-700 border-none bg-black w-[15rem] h-[0.1rem]' />

          <p className='mt-5 text-gray-500 text-base'>
            *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
          </p>
        </div>
      </div>
      <div>
        <img
          src={identificationImage}
          alt='Identification'
          className=' -mt-10'
        />
      </div>
    </Layout>
  );
};

export default PersonalInfo;
