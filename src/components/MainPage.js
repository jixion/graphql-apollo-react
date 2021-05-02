import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { components, themes } from '@sparkimaginations/imperion-system';
import BlogPost from "./BlogPost";


const FEED_QUERY = gql`
query {
  bannerCollection(limit: 3, order: sys_firstPublishedAt_ASC) {
    items {
      heading
      buttonText
      body
      theme
    }
  }
  blogPostCollection(limit: 10, order: publishDate_DESC)  {
    items {
      title
      author {
        name
      }
      body
      publishDate
    }
  }
}
`
const MainPage = () => {
    const data = useQuery(FEED_QUERY).data;
    const Banner = components.modules.Banner;
    const FeaturedQuote = components.modules.FeaturedQuote;
    return (
        <div>
            {data && data.bannerCollection && data.bannerCollection.items.map((obj, index) => (
                <Banner body={obj.body} buttonText={obj.buttonText} heading={obj.heading} theme={themes[obj.theme]} />
            ))}
            {data && data.blogPostCollection && data.blogPostCollection.items.map((obj, index) => (
                <BlogPost key={index} title={obj.title} author={obj.author.name} body={obj.body} publishDate={obj.publishDate} />
            ))}
            {data && data.featuredQuoteCollection && data.featuredQuoteCollection.items.map((obj, index) => (
                <FeaturedQuote body={obj.body} buttonText={obj.buttonText} heading={obj.heading} theme={themes[obj.theme]} />
            ))}
        </div>
    );
};

export default MainPage;