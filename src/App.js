import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Modal } from './Components/Modal';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <Modal />
    </div>
      
  );
}

export default App;
