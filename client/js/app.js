import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/index/App.jsx';
import store from './redux/store';

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('react-app'),
);

if (module.hot) {
  module.hot.accept('./components/index/App.jsx', () => {
    const NextApp = require('./components/index/App.jsx').default; // eslint-disable-line

    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      document.getElementById('react-app'),
    );
  });
}
