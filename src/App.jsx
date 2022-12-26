import './App.css';
import { StartQuestions, PersonalInfo, CovidQuestionaire } from '@/pages';
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
    </div>
  );
}

export default App;
