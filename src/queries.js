import { gql } from "@apollo/client";

export const HEROKU = gql`
query {
    neos {
        id
        name
        is_potentially_hazardous_asteroid
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
