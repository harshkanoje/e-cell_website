import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Events/Events';
import Founder from './components/Founder/Founder';
import Team from './components/Team/Team';

function App() {
  return (
  <div>
    <Navbar />
    <Dashboard />
    <Founder />
    <Events />
    <Team />
  </div>
  );
}

export default App;
