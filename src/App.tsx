import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import AboutMe from './components/AboutMe.tsx'; // Adjust extension if needed
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx'; // Adjust case if needed
import Resume from './components/Resume.tsx';   // Adjust extension if needed


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;