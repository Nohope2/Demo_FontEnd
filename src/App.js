import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';

import '../src/Components/assets/App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

import Wallet from './Components/Wallet';
import Trans from './Components/Trans';
import Category from './Components/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<Trans />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
