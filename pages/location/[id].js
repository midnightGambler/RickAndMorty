import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Page from "../../components/Page/Page";
import withApollo from "../../hooks/withApollo";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import LocationInfo from "../../components/LocationInfo/LocationInfo";
import ResidentsItem from "../../components/ResidentsItem/ResidentsItem";

const QUERY = query => gql`
{
  location(id: ${query}) {
    name
    type
    residents {
      image
      name
      type
      id
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
          <LocationInfo type={type} name={name} />
          <Layout title="Residents">
            {residents.map(resident => (
              <ResidentsItem location={name} {...resident} />
            ))}
          </Layout>
        </>
      );
    }
  };

  return <Page breadcrumb="/">{renderPage()}</Page>;
};

export default LocationPage;
