
import './index.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Microsoft from './components/Microsoft';
import Verify from './components/Verify';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Microsoft />} />
       <Route path="/verify" element={<Verify />} />
    </Routes>
  </BrowserRouter>
);
