import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { useState } from 'react';

function App() {
  const [showOrder, setShowOrder] = useState(false);

  const displayOder = (yesno) => {
    setShowOrder(yesno);
  }

  return (
    <div className='wrapper'>
      <Header showOrder={showOrder} displayOder={displayOder} />
      <Main showOrder={showOrder} />
    </div>
      
  );
}

export default App;
