import './App.css';
import FormProviderComponent from './context/FormProvider';
import { AnimatedRoutes } from '@/components';
function App() {
  return (
    <div>
      <FormProviderComponent>
        <AnimatedRoutes />
      </FormProviderComponent>
    </div>
  );
}

export default App;
