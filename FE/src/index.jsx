import ReactDOM from 'react-dom';
import React from 'react';

const rootElement = document.getElementById('root');

import(/*webpackChunkName: 'App' */ '@/App').then(({ default: App }) => ReactDOM.render(<App />, rootElement));
