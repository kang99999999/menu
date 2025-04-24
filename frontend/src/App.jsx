import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
// import Board from './pages/Board';
// import Admin from './pages/Admin';
// import Check from './pages/CheckOrder';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/board" element={<Board />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/check" element={<Check />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;