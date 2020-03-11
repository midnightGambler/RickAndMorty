import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import { resolvers, typeDefs } from "../store/resolvers";
import "../styles.css";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql",
  fetch
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    currentResidentsPage: 0
  }
});

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
