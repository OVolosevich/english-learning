import React from 'react';
import Home from './src/pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
