import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProviderWrapper from './providers/ProviderWrapper';

ReactDOM.render(
    <ProviderWrapper/>,
    document.getElementById('root')
);

reportWebVitals();
