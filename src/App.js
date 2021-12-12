import './css/App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PacksPage from './pages/PacksPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/packs-list" element={<PacksPage />} exact />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;