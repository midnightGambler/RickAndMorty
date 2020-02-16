import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Page from "../../components/Page/Page";
import withApollo from "../../hooks/withApollo";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";

const QUERY = query => gql`
{
  location(id: ${query}) @client {
    name
    type
    residents {
      image
    }
  }
}
`;

const LocationPage = () => {
  const { query } = useRouter();
  const { loading, data, error } = useQuery(QUERY(query.id));

  const renderPage = () => {
    if (loading) return <Loader />;
    if (error) return <h1>error</h1>;
    if (data) {
      console.log(data);
      const {
        location: { name, type, residents }
      } = data;
      return (
        <>
          <img src={`/locations/${type}/${type}.png`} />
          <h1>{name}</h1>
          <p>{type}</p>
          <Layout>
            <h3>Residents</h3>
            {residents.map(({ image }) => (
              <img src={image} />
            ))}
          </Layout>
        </>
      );
    }
  };

  return (
    <Page breadcrumb="/">
      <Layout>{renderPage()}</Layout>
    </Page>
  );
};

export default withApollo(LocationPage);
