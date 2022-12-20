import React from 'react';


import {Footer, Header, Skills, Works} from './container';
import {Navbar} from "./components";

import './App.scss';
import CubeEscape from './components/CubeEscape/CubeEscape';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
                <Header />
                <Works />
                <Skills />
                <Footer />
            </>
          } />
          <Route path="/CubeEscape" element={<CubeEscape/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
