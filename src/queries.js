import { gql } from "@apollo/client";

export const HEROKU = gql`
query {
    neos {
        near_earth_objects {
            id
            name
            is_potentially_hazardous_asteroid
            diameter
        }
    }
    locations {
        id
        name
    }
    apod {
        date
        explanation
        hdurl
        media_type
        service_version
        title
        url
    }
}`
