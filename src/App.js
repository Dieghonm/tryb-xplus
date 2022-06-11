import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';

import Header from './pages/Header';
import Footer from './pages/footer';
import Home from './pages/Home';
import Conteudo from './pages/conteudo';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
      <Footer/>
      <Conteudo/>
    </BrowserRouter>
  );
}

export default App;
