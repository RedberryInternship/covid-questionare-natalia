import React from 'react';
import {
  StartQuestions,
  PersonalInfo,
  CovidQuestionaire,
  Vaccination,
  Advice,
  ThankYou,
} from '@/pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<StartQuestions />} />
        <Route path='/info' element={<PersonalInfo />} />
        <Route path='/covid-questionaire' element={<CovidQuestionaire />} />
        <Route path='/vaccination' element={<Vaccination />} />
        <Route path='/advice' element={<Advice />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
