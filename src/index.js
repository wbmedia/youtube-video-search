// import dependencies 
import React from 'react';
import ReactDOM from 'react-dom';

// import Component Modules
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
