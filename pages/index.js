import { useQuery } from "@apollo/react-hooks";
import InfiniteScroll from "react-infinite-scroller";

import LocationItem from "../components/LocationItem/LocationItem";
import Page from "../components/Page/Page";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import { IndexPageQuery } from "../store/queries";

const Index = () => {
  const { loading, data, error, fetchMore } = useQuery(IndexPageQuery);

  const updateList = () =>
    fetchMore({
      variables: {
        page: data.locations.info.next
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const newData = {
          ...fetchMoreResult,
          locations: {
            ...fetchMoreResult.locations,
            info: fetchMoreResult.locations.info,
            results: [
              ...prev.locations.results,
              ...fetchMoreResult.locations.results
            ]
          }
        };
        return newData;
      }
    });

  const renderPage = () => {
    if (loading) return <Loader />;
    if (error) return <h1>error</h1>;
    if (data) {
      const {
        locations: {
          results,
          info: { next }
        }
      } = data;
      return (
        <>
          <InfiniteScroll
            initialLoad={false}
            loader={<Loader />}
            pageStart={0}
            loadMore={updateList}
            hasMore={!!next}
          >
            <Layout>
              {results.map(props => (
                <LocationItem key={props.id} {...props} />
              ))}
            </Layout>
          </InfiniteScroll>
        </>
      );
    }
  };

  return <Page>{renderPage()}</Page>;
};

export default Index;
