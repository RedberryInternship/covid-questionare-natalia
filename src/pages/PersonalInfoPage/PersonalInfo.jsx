import Layout from '@/componenets/Layout/Layout';
import PersonalInfoForm from './PersonalInfoForm';
import page1 from '@/assets/images/page-1.svg';
import identificationImage from '@/assets/images/identificationImage.png';

const PersonalInfo = () => {
  return (
    <Layout pageNumber={page1}>
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
          className='-mt-14'
        />
      </div>
    </Layout>
  );
};

export default PersonalInfo;
