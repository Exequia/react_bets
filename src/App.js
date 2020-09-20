import React, { Suspense } from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './views/home';

// page uses the hook
function Page() {}

// loading component for suspense fallback
const Loader = () => (
  <div className='App'>
    <img src={logo} className='App-logo' alt='logo' />
    <div> loading... </div>{' '}
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className='container'>
        <Home />
      </div>
    </Suspense>
  );
}
