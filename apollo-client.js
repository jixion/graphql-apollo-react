// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://graphql-experiment.herokuapp.com",
    cache: new InMemoryCache(),
});

export default client;