import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ImageExtractor from './pages/ImageExtractor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Toaster position="top-center" />
        <Navbar />

        {/* SEO for the whole app */}
        <Helmet>
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/image-extractor" element={<ImageExtractor />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
