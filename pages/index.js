import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../hooks/withApollo";

import LocationItem from "../components/LocationItem/LocationItem";
import Page from "../components/Page/Page";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";

const QUERY = () => gql`
  {
    locations {
      results {
        type
        id
        name
        residents {
          image
        }
      }
    }
  }
`;

const Index = () => {
  const { loading, data, error } = useQuery(QUERY());

  const renderPage = () => {
    if (loading) return <Loader />;
    if (error) return <h1>error</h1>;
    if (data) {
      console.log(data);
      const {
        locations: { results }
      } = data;
      return (
        <Layout>
          {results.map(props => (
            <LocationItem key={props.id} {...props} />
          ))}
        </Layout>
      );
    }
  };

  return <Page>{renderPage()}</Page>;
};

export default withApollo(Index);
