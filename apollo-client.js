// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://jixion.com:5000",
    cache: new InMemoryCache(),
});

export default client;