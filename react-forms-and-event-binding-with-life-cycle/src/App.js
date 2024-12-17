import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LifeCycle from './components/LifeCycle';
import Navbar from './components/Navbar';
import Parent from './components/Parent';
import './style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/form-binding' element={<Parent />} />
          <Route path='' redirect='/form-binding' />
          {/* CLASSBASED LIFE CYCLE URL */}
          <Route path='/life-cycle' element={<LifeCycle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
