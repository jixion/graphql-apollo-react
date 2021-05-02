import React from 'react';
import styled from 'styled-components';
import { tokens } from '@sparkimaginations/imperion-system/';

const StyledBlogPost = styled.div`
    padding: ${tokens.spacers.spacer40};
    color: ${tokens.colors.kleinBlue};
    background-color: ${tokens.colors.black};
    text-align: center;
`;

const Header = styled.div`
    background-color: #020021;
`;

const PublishDate = styled.p`
    padding: 0;
    display: inline-block;
`;

const Title = styled.h1`
    padding: 0;
`;
const Author = styled.p`
    padding: 0;
`;

const Body = styled.p`
    padding: ${tokens.spacers.spacer50};
    background-color: #020021;
`;

const BlogPost = (props) => {
    const { title, author, body, publishDate } = props;
    return (
        <StyledBlogPost>
            <Header>
                <Title>{title}</Title>
                published by
                <Author>{" "}{` ${author} on `}<PublishDate>{new Date(publishDate).toDateString()}</PublishDate></Author>
            </Header>
            <Body>{body}</Body>
        </StyledBlogPost>
    );
};

export default BlogPost;