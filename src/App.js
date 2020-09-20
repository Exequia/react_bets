import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/loader';
import Home from './views/home';

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/loader' component={Loader} />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
