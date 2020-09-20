import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <div className='row'>
        <div className='col'>
          <div className='alert alert-info'> {t('title')} </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default Home;
