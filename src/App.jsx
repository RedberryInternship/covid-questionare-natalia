import './App.css';
import StartQuestions from './pages/StartQuestionsPage/StartQuestions';
import PersonalInfo from './pages/PersonalInfoPage/PersonalInfo';
import CovidQuestionaire from './pages/CovidQuestionairePage/CovidQuestionaire';
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
