import React from 'react';
import styled from 'styled-components';
import { tokens } from '@sparkimaginations/imperion-system';
import ReactMarkdown from 'react-markdown';

const StyledBlogPost = styled.div`
    color: ${(props) => props.theme.fg};
    background-color: ${(props) => props.theme.bg};
    padding: ${tokens.spacers.spacer40} ${tokens.spacers.spacer20};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    background-color: ${(props) => props.theme.bg};
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
    color: ${(props) => props.theme.fg};
    background-color: ${(props) => props.theme.bg};
    text-align: left;
    width: 800px;
    overflow: scroll;
`;

const BlogPost = (props) => {
    const { title, author, body, publishDate, theme } = props;
    return (
        <StyledBlogPost theme={theme}>
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