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
function App() {
  return (
    <div>
      <Route path='/welcome'>
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
    </div>
  );
}

export default App;
