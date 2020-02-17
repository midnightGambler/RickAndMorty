import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Page from "../../components/Page/Page";
import Loader from "../../components/Loader/Loader";
import ResidentInfo from "../../components/ResidentInfo/ResidentInfo";

const QUERY = query => gql`
{
  character(id: ${query}) {
    image
    name
    type
    location {
      name
      id
    }
    status
    origin {
      name
    }
  }
}
`;

const ResidentPage = () => {
  const { query } = useRouter();
  const { loading, data, error } = useQuery(QUERY(query.id));

  const renderPage = () => {
    if (loading) return <Loader />;
    if (error) return <h1>error</h1>;
    if (data) {
      const { character } = data;
      return (
        <Page href='/location/[id]' as={`/location/${character.location.id}`}>
          <ResidentInfo character={character} />
        </Page>
      );
    }
  };

  return renderPage();
};

export default ResidentPage;
