import { gql } from "@apollo/client";

export const HEROKU = gql`
query {
  satellites {
    name
    id
  }
  locations (limit: 1) {
    name
    id
    latitude
    longitude
    velocity
    visibility
    timestamp
  }
  apod {
    copyright
    date
    explanation
    hdurl
    media_type
    service_version
    title
    url
  }
  neos {
    id
    name
    is_potentially_hazardous_asteroid
  }
  cards(user: "jburroug-graphql-apollo-react") {
    id
    description
    status
    title
    username
    order
  }
}`
