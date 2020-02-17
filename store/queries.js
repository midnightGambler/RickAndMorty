import gql from "graphql-tag";

export const LocationPageQuery = query => gql`
 {
  currentResidentsPage @client
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

export const IndexPageQuery = gql`
  query locations($page: Int) {
    locations(page: $page) {
      info {
        next
      }
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

export const ResidentPageQuery = query => gql`
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
