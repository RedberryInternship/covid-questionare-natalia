import './App.css';
import {
  StartQuestions,
  PersonalInfo,
  CovidQuestionaire,
  Vaccination,
  Advice,
  ThankYou,
} from '@/pages';
import { Route } from 'react-router-dom';
import FormProviderComponent from './context/FormProvider';
function App() {
  return (
    <div>
      <FormProviderComponent>
        <Route exact path='/'>
          <StartQuestions />
        </Route>
        <Route path='/info'>
          <PersonalInfo />
        </Route>
        <Route path='/covid-questionaire'>
          <CovidQuestionaire />
        </Route>
        <Route path='/vaccination'>
          <Vaccination />
        </Route>
        <Route path='/advice'>
          <Advice />
        </Route>
        <Route path='/thank-you'>
          <ThankYou />
        </Route>
      </FormProviderComponent>
    </div>
  );
}

export default App;
