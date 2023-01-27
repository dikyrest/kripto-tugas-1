import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Vigenere from './pages/Vigenere';
import AutoKey from './pages/AutoKey';
import Extended from './pages/Extended';
import Affine from './pages/Affine';
import Playfair from './pages/Playfair';
import Hill from './pages/Hill';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vigenere-cipher" element={<Vigenere />} />
        <Route path="/autokey-vigenere-cipher" element={<AutoKey />} />
        <Route path="/extended-vigenere-cipher" element={<Extended />} />
        <Route path="/affine-cipher" element={<Affine />} />
        <Route path="/playfair-cipher" element={<Playfair />} />
        <Route path="/hill-cipher" element={<Hill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
