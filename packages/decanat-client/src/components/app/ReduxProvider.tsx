import React, {FC} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {store} from '../../store';

const ReduxProvider: FC = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default ReduxProvider;