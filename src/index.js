import React from 'react';
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import 'styles/global'
import Routes from 'routes'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();


// {/* store={configureStore()}} */ }