import React from 'react';
import styled from 'styled-components';
import { tokens } from '@sparkimaginations/imperion-system/';
import ReactMarkdown from 'react-markdown';

const StyledBlogPost = styled.div`
    padding: ${tokens.spacers.spacer40} ${tokens.spacers.spacer20};
    color: ${tokens.colors.kleinBlue};
    background-color: ${tokens.colors.black};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    background-color: #020021;
    width: 500px;
    margin-bottom: ${tokens.spacers.spacer10}
`;

const PublishDate = styled.span`
    padding: 0;
    display: inline-block;
`;

const Title = styled.h1`
    padding: 0;
`;
const Author = styled.p`
    padding: 0;
`;

const Body = styled(ReactMarkdown)`
    padding: ${tokens.spacers.spacer50};
    background-color: #020021;
    text-align: left;
    width: 800px;
    overflow: scroll;
`;

const BlogPost = (props) => {
    const { title, author, body, publishDate } = props;
    return (
        <StyledBlogPost>
            <Header>
                <Title>{title}</Title>
                published by
                <Author>{author} on <PublishDate>{new Date(publishDate).toDateString()}</PublishDate></Author>
            </Header>
            <Body>{body}</Body>
        </StyledBlogPost>
    );
};

export default BlogPost;