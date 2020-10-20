import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import history from './services/history';
import Routes from './routes/index';

import ResetCSS from './styles/reset';
import BaseCSS from './styles/base';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ResetCSS />
          <BaseCSS />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
