import React from 'react';

import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes/index';

import ResetCSS from './styles/reset';
import BaseCSS from './styles/base';

function App() {
  return (
    <Router history={history}>
      <ResetCSS />
      <BaseCSS />
      <Routes />
    </Router>
  );
}

export default App;
