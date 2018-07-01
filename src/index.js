import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/index';

ReactDOM.render(<Hello firstname="test" lastname="world" />, document.getElementById('root'));
registerServiceWorker();
