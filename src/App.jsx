// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<div>
            <Header></Header>
            <Home></Home>

          </div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;