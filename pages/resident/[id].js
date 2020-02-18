import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import Page from "../../components/Page/Page";
import Loader from "../../components/Loader/Loader";
import ResidentInfo from "../../components/ResidentInfo/ResidentInfo";
import { ResidentPageQuery } from "../../store/queries";
import Header from "../../components/Header/Header";

const ResidentPage = () => {
  const { query } = useRouter();
  const { loading, data, error } = useQuery(ResidentPageQuery(query.id));

  const renderPage = () => {
    if (loading)
      return (
        <>
          <Header />
          <Loader />
        </>
      );
    if (error) return <h1>error</h1>;
    if (data) {
      const { character } = data;
      return (
        <Page href="/location/[id]" as={`/location/${character.location.id}`}>
          <ResidentInfo character={character} />
        </Page>
      );
    }
  };

  return renderPage();
};

export default ResidentPage;
