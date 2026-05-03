import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './components/LangContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Download from './pages/Download.jsx';
import './App.css';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LangProvider>
  );
}
