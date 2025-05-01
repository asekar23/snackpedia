import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/countries/:country" element={<CountryDetail />} />
    </Routes>
  );
}
