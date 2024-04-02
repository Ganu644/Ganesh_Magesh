import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;