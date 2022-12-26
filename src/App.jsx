import './App.css';
import StartQuestions from './pages/StartQuestionsPage/StartQuestions';
import PersonalInfo from './pages/PersonalInfoPage/PersonalInfo';
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
    </div>
  );
}

export default App;
