import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SignInSide from './component/SignInSide';
import AdminPage from './routes/AdminPage'; 
import LeadGenerationPage from './routes/LeadGenerationPage';

function Home() {
  return (
    <div>
      <h1>Hoşgeldiniz</h1>
      <p>No-Code Lead Generation Tool Projesine Giriş Yapmak Mı İstiyorsunuz?</p>
      <Link to="/login">
        <button>Giriş Yap</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignInSide />} />
            <Route path="/admins" element={<AdminPage />} />
            <Route path="/apps" element={<LeadGenerationPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
