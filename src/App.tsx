import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Information from './pages/Information';
import Gallery from './pages/Gallery';
import Page1 from './pages/Page1';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="*" element={<h1>Not Found</h1>} />

            

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;