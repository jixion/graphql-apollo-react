import { gql } from "@apollo/client";

export const HEROKU = gql`
query {
    locations {
        name
    }
}`

export const FEED_QUERY = gql`
query {
  bannerCollection(limit: 5, order: sys_firstPublishedAt_ASC) {
    items {
      heading
      buttonText
      body
      theme
    }
  }
  blogPostCollection(limit: 5, order: publishDate_DESC)  {
    items {
      title
      author {
        name
      }
      body
      publishDate
      theme
    }
  }
  featuredQuoteCollection(limit: 5) {
    items {
      alt
      caption
      heading
      human
      quote
      subtext
      theme
      title
      image {
        url
      }
    }
  }
}
`