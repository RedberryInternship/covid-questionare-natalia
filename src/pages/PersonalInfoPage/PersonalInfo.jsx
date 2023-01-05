import { Layout } from '@/components/Layout';
import PersonalInfoForm from './PersonalInfoForm';
import identificationPageNum from '@/assets/images/identification-page-num.png';
import identificationImage from '@/assets/images/identification-image.png';
import Rectangle from '@/assets/images/rectangle.png';
import { motion } from 'framer-motion';
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
      <motion.img
        src={Rectangle}
        alt='yellow rectangle'
        className='absolute top-[20.5rem] right-80 '
        initial={{ opacity: 0, width: 300, top: 400, right: 700 }}
        animate={{ opacity: 1, width: 630, top: 328, right: 350 }}
        transition={{ duration: 0.5 }}
      />
      <img
        src={identificationImage}
        alt='Identification'
        className=' -mt-10 z-20 '
      />
    </Layout>
  );
};

export default PersonalInfo;
