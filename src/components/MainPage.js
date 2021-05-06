import React from 'react';
import { useQuery } from '@apollo/client';
import { components, themes } from '@sparkimaginations/imperion-system';
import { FEED_QUERY, HEROKU } from '../queries';

const MainPage = () => {
    const data = [];// = useQuery(FEED_QUERY).data;
    const myGraphQL = useQuery(HEROKU).data;
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
            {myGraphQL && myGraphQL["locations"] && myGraphQL.locations.map((loc, i)=>(<span key={i}>{loc.name}<br /></span>))}
            {data && data["bannerCollection"] && data["bannerCollection"].items.map((obj, index) => {
                const myObj = {...obj}
                myObj.theme = themes[obj.theme];
                return <Banner key={index} {...myObj} ref={refs[index]}/>
            })}
            {data && data["blogPostCollection"] && data["blogPostCollection"].items.map((obj, index) => {
                const myObj = {...obj}
                myObj.author = obj.author.name;
                myObj.theme = themes[obj.theme];
                return <BlogPost key={index} {...myObj} ref={refs[index + 5]}/>
            })}
            {data && data["featuredQuoteCollection"] && data["featuredQuoteCollection"].items.map((obj, index) => {
                const myObj = {...obj}
                myObj.url = obj.image.url;
                myObj.theme = themes[obj.theme];
                return <FeaturedQuote key={index} {...myObj} ref={refs[index+10]} />;
            })}
        </div>
    );
};

export default MainPage;