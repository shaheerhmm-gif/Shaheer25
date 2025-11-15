import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import NewHome from './pages/NewHome';
import NewServices from './pages/NewServices';
import Work from './pages/Work';
import Process from './pages/Process';
import NewContact from './pages/NewContact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Nav />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/services" element={<NewServices />} />
            <Route path="/work" element={<Work />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<NewContact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
