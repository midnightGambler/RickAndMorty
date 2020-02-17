import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import InfiniteScroll from "react-infinite-scroller";

import Page from "../../components/Page/Page";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import LocationInfo from "../../components/LocationInfo/LocationInfo";
import ResidentsItem from "../../components/ResidentsItem/ResidentsItem";
import { LocationPageQuery } from "../../store/queries";

const LocationPage = () => {
  const { query } = useRouter();
  const { loading, data, error } = useQuery(LocationPageQuery(query.id));
  const client = useApolloClient();

  useEffect(() => {
    // resets pages counter for client side pagination on unmount
    return () =>
      client.writeData({
        data: { currentResidentsPage: 0 }
      });
  }, []);

  const renderPage = () => {
    if (loading) return <Loader />;
    if (error) return <h1>error</h1>;
    if (data) {
      const {
        location: { name, type, residents },
        currentResidentsPage
      } = data;

      // getting paginated data
      const pageData = [...residents].splice(
        0,
        20 * (currentResidentsPage + 1)
      );
      // boolean for checking if there is more items for render in the list
      const hasMore = residents.length - currentResidentsPage * 20 > 0;
      return (
        <>
          <LocationInfo type={type} name={name} />
          <InfiniteScroll
            initialLoad={false}
            loader={<Loader />}
            pageStart={0}
            loadMore={() => {
              client.writeData({
                data: { currentResidentsPage: currentResidentsPage + 1 }
              });
            }}
            hasMore={hasMore}
          >
            <Layout title="Residents">
              {pageData.map(resident => (
                <ResidentsItem
                  key={resident.id}
                  location={name}
                  {...resident}
                />
              ))}
            </Layout>
          </InfiniteScroll>
        </>
      );
    }
  };

  return <Page href="/">{renderPage()}</Page>;
};

export default LocationPage;
