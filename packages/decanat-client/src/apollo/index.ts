import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client';

const URI = 'http://localhost:3000/graphql';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache({})
});