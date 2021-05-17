import React from 'react';
import styled from "styled-components";
import {tokens} from "@sparkimaginations/imperion-system";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

import Layout from "./layouts";

const StyledAPOD = styled.div`
    padding: ${tokens.spacers.spacer10};
    height: 25%;
    
    & img {
        width: 25%
    }
`;

function APOD({ data }) {
    return <Layout>
        <StyledAPOD>
            <img src={data.apod.hdurl} alt={data.apod.explanation} />
            <h1>{data.apod.title}</h1>
            <h3>{data.apod.date}</h3>
            <p>{data.apod.explanation}</p>
        </StyledAPOD>
    </Layout>
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query {
              apod {
                copyright
                date
                explanation
                hdurl
                media_type
                service_version
                title
                url
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

export default APOD;