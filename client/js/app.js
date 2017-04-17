import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index/App';
import { AppContainer } from 'react-hot-loader';
import Perf from 'react-addons-perf';

if (process.env.NODE_ENV === 'development') {
  window.Perf = Perf;
}

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('react-app')
);

if (module.hot) {
  module.hot.accept('./components/index/App.jsx', () => {
    const NextApp = require('./components/index/App.jsx').default; // eslint-disable-line

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('react-app')
    );
  });
}
