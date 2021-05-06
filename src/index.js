import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloProvider,
    ApolloClient,
    ApolloLink,
    HttpLink, InMemoryCache
} from '@apollo/client';
import './styles/index.css';
import App from './components/App';

const client = new ApolloClient({
    link: ApolloLink.from([
        new HttpLink({
            uri: `http://graphql-experiment.herokuapp.com`,
            credentials: 'same-origin',
        })
    ]),
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);