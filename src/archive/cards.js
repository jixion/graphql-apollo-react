import React from 'react';
import styled from "styled-components";
import {tokens} from "@sparkimaginations/imperion-system";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Card from "../components/Card";
import Layout from "../pages/layouts";

const StyledCards = styled.div`
    background: url("https://duomly.nyc3.digitaloceanspaces.com/articles/coding/alps-lake.jpg");
    background-color: green;
    width: 450px;
    padding: ${tokens.spacers.spacer10}
`

const CardWrapper = styled.div`
    width: 400px;
    padding: ${tokens.spacers.spacer10}
`

function Cards({ data }) {
    return <Layout><StyledCards>
        {data.cards.map((card, i) =>
            <CardWrapper key={i}>
                <Card card={card} />
            </CardWrapper>
        )}
    </StyledCards></Layout>
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query {           
              cards(user: "jburroug-graphql-apollo-react") {
                id
                description
                status
                title
                username
                order
              }
            }
      `,
    });

    return {
        props: {
            data: data,
        },
    };
}

export default Cards;