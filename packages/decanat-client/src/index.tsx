import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProviderWrapper from './providers/ProviderWrapper';

ReactDOM.render(
    <React.StrictMode>
        <ProviderWrapper/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
