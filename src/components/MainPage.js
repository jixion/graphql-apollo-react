import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { components, themes } from '@sparkimaginations/imperion-system';


const FEED_QUERY = gql`
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
const MainPage = () => {
    const data = useQuery(FEED_QUERY).data;
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
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef(),
        React.useRef()
    ];
    const Banner = components.modules.Banner;
    const FeaturedQuote = components.modules.FeaturedQuote;
    const BlogPost = components.modules.BlogPost;

    return (
        <div>
            {data && data.bannerCollection && data.bannerCollection.items.map((obj, index) => {
                const myObj = {...obj}
                myObj.theme = themes[obj.theme];
                return <Banner key={index} {...myObj} ref={refs[index]}/>
            })}
            {data && data.blogPostCollection && data.blogPostCollection.items.map((obj, index) => {
                const myObj = {...obj}
                myObj.author = obj.author.name;
                myObj.theme = themes[obj.theme];
                return <BlogPost key={index} {...myObj} ref={refs[index + 5]}/>
            })}
            {data && data.featuredQuoteCollection && data.featuredQuoteCollection.items.map((obj, index) => {
                const myObj = {...obj}
                myObj.url = obj.image.url;
                myObj.theme = themes[obj.theme];
                return <FeaturedQuote key={index} {...myObj} ref={refs[index+10]} />;

            })}
        </div>
    );
};

export default MainPage;