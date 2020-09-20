import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <div className='row'>
        <div className='col'>
          <div className='alert alert-info'> {t('title')} </div>
          <Link to='/loader'>Loader</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
