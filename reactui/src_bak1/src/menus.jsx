import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App_Menus';

import { loadEnv } from './_helpers';
// setup fake backend
import { configureFakeBackend } from './_helpers';

loadEnv();
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

