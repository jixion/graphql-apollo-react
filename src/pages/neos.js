import React from 'react';
import styled from "styled-components";
import {tokens} from "@sparkimaginations/imperion-system";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Layout from "./layouts";

const NEO = styled.div`
    padding: ${tokens.spacers.spacer10};
    background-color: blue;
    height: 25%;
    
    & img {
        width: 100%
    }
`;

function NEOS({ data }) {
    return <Layout>
        {data.neos.map((neo, i) =>
            <NEO key={i}>
                <h1>The NEO called: {neo.name} with id {neo.id} {neo.is_potentially_hazardous_asteroid ? 'might kill us' : 'might not kill us'}</h1>
            </NEO>
        )}
    </Layout>;
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query {
              neos {
                id
                name
                is_potentially_hazardous_asteroid
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

export default NEOS;