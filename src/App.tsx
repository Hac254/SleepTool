import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import SleepDiary from './components/SleepDiary';
import Relaxation from './components/Relaxation';
import Education from './components/Education';
import SleepRestriction from './components/SleepRestriction';
import { AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="diary" element={<SleepDiary />} />
            <Route path="relax" element={<Relaxation />} />
            <Route path="learn" element={<Education />} />
            <Route path="restriction" element={<SleepRestriction />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;