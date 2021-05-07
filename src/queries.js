import { gql } from "@apollo/client";

export const HEROKU = gql`
query {
    neos {
        near_earth_objects {
            id
            name
        }
    }
    locations {
        id
        name
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
}`
