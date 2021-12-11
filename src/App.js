import './css/App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <HomePage />;
    </div>
  );
}

export default App;