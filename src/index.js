import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

import {Provider} from 'react-redux';
import store from './redux/store.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<Provider store={store}><AppContainer><App/></AppContainer></Provider>, document.querySelector('#clock'));

if (module && module.hot) {
  module.hot.accept('./', () => {
    render(
      <Provider store={store}>
        <AppContainer>
          <App/>
        </AppContainer>
      </Provider>,
      document.querySelector('#clock')
    );
  });
}
