import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: "bearer 51172310de1000b9ee2fdcea121ec3d62fd708e9"
    }
});

export default client;