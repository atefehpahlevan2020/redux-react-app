import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store,{ persistor } from './stateManagement/store';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
