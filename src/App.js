import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bai1 from './baitap/Bai1';
import Bai2 from './baitap/Bai2';
import Bai3 from './baitap/Bai3';
import Bai4 from './baitap/Bai4';
import Bai5 from './baitap/bai5/Bai5';
import Bai6 from './baitap/bai6/Bai6';
import Bai7 from './baitap/bai7/Bai7';
import Bai8 from './baitap/bai8/Bai8';
import Bai9 from './baitap/bai9/Bai9';
import Bai10 from './baitap/bai10/Bai10';
import Bai11 from './baitap/bai11/Bai11';
import Bai12 from './baitap/bai12/Bai12';
import Bai13 from './baitap/bai13/Bai13';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Bài 1</Link></li>
            <li><Link to="/bai2">Bài 2</Link></li>
            <li><Link to="/bai3">Bài 3</Link></li>
            <li><Link to="/bai4">Bài 4</Link></li>
            <li><Link to="/bai5">Bài 5</Link></li>
            <li><Link to="/bai6">Bài 6</Link></li>
            <li><Link to="/bai7">Bài 7</Link></li>
            <li><Link to="/bai8">Bài 8</Link></li>
            <li><Link to="/bai9">Bài 9</Link></li>
            <li><Link to="/bai10">Bài 10</Link></li>
            <li><Link to="/bai11">Bài 11</Link></li>
            <li><Link to="/bai12">Bài 12</Link></li>
            <li><Link to="/bai13">Bài 13</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Bai1 />} />
          <Route path="/bai2" element={<Bai2 />} />
          <Route path="/bai3" element={<Bai3 />} />
          <Route path="/bai4" element={<Bai4 />} />
          <Route path="/bai5" element={<Bai5 />} />
          <Route path="/bai6" element={<Bai6 />} />
          <Route path="/bai7" element={<Bai7 />} />
          <Route path="/bai8" element={<Bai8 />} />
          <Route path="/bai9" element={<Bai9 />} />
          <Route path="/bai10" element={<Bai10 />} />
          <Route path="/bai11" element={<Bai11 />} />
          <Route path="/bai12" element={<Bai12 />} />
          <Route path="/bai13" element={<Bai13 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
