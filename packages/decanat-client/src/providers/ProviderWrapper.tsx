import React, {FC} from 'react';
import App from '../components/app/App';
import {store} from '../store';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import {client} from '../apollo';

const ProviderWrapper: FC = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>
    )
}

export default ProviderWrapper;