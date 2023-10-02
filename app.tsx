import React from 'react';

import Home from './src/pages/Home/Home';
import Auth from './src/pages/Auth/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Auth />} />
        <Route path='/sign-up' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
