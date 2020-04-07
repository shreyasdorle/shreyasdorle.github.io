import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
