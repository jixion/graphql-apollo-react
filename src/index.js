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

const { REACT_APP_SPACE_ID: SPACE_ID, REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN } = process.env;
const client = new ApolloClient({
    link: ApolloLink.from([
        new HttpLink({
            uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
            credentials: 'same-origin',
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
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