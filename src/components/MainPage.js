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
      theme
    }
  }
  featuredQuoteCollection {
    items {
      alt
      caption
      heading
      human
      quote
      subtext
      theme
      title
      url {
        image {
          url
        }
      }
    }
  }
}
`
const MainPage = () => {
    const data = useQuery(FEED_QUERY).data;
    const Banner = components.modules.Banner;
    const FeaturedQuote = components.modules.FeaturedQuote;
    const refs = [
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef()
    ];
    return (
        <div>
            {data && data.bannerCollection && data.bannerCollection.items.map((obj, index) => (
                <Banner key={index} body={obj.body} buttonText={obj.buttonText} heading={obj.heading} theme={themes[obj.theme]} ref={refs[index]}/>
            ))}
            {data && data.blogPostCollection && data.blogPostCollection.items.map((obj, index) => (
                <BlogPost key={index} title={obj.title} author={obj.author.name} body={obj.body} publishDate={obj.publishDate} theme={themes[obj.theme]} />
            ))}
            {data && data.featuredQuoteCollection && data.featuredQuoteCollection.items.map((obj, index) => {
                const myObj = {...obj}
                myObj.url = obj.url.image.url;
                myObj.theme = themes[obj.theme];
                return (
                    <FeaturedQuote key={index} {...myObj} ref={refs[index+5]} />
                );

            })}
        </div>
    );
};

export default MainPage;