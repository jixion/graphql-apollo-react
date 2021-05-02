import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { components, themes } from '@sparkimaginations/imperion-system';


const FEED_QUERY = gql`
query {
  blogPostCollection(order: publishDate_DESC)  {
    items {
      title
      author {
        name
      }
      body
    }
  }
}
`
const LinkList = () => {
    const data = useQuery(FEED_QUERY).data;
    const Banner = components.modules.Banner;
    console.log(Object.keys(themes))
    return (
        <div>
            {data && (
                <>
                    {data.blogPostCollection.items.map((obj, index) => (
                        <Banner body={obj.body} buttonText={obj.author.name} heading={obj.title} theme={themes[Object.keys(themes)[index]]} />
                    ))}
                </>
            )}
        </div>
    );
};

export default LinkList;