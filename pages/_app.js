import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "node-fetch";
import "../styles.css";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql",
  fetch
});

const client = new ApolloClient({
  cache,
  link
});

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
