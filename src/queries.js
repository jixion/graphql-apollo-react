import { gql } from "@apollo/client";

export const HEROKU = gql`
query {
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
