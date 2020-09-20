import React from 'react';

// loading component for suspense fallback
const Loader = () => (
  <div className='d-flex justify-content-center mt-5 pt-5'>
    <div className='spinner-grow text-primary' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
);

export default Loader;
