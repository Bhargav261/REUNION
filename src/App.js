import React from 'react';
import Home from './Pages/Home';
import Header from './Pages/Header';

function App() {
  return (
    <div className='main'>
      <div className="box">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
