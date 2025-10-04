// App.js
import './App.css';
import { Header } from './components/Header';  // Ensure header is imported correctly
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Always visible */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
