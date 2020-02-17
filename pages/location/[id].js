import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Page from "../../components/Page/Page";
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
      const {
        location: { name, type, residents }
      } = data;
      return (
        <>
          <LocationInfo type={type} name={name} />
          <Layout title="Residents">
            {residents.map(resident => (
              <ResidentsItem key={resident.id} location={name} {...resident} />
            ))}
          </Layout>
        </>
      );
    }
  };

  return <Page href="/">{renderPage()}</Page>;
};

export default LocationPage;
