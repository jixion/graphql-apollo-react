import React from 'react';
import styled from "styled-components";
import {tokens} from "@sparkimaginations/imperion-system";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Layout from "./layouts";

const ISSLocs = styled.div`
    background-color: orange;
    padding: ${tokens.spacers.spacer10};
`;

function ISS({ data }) {
    return <Layout>{data.locations.map((loc, i) =>
        <ISSLocs key={i}>
            <h1>Position info at timestamp: {loc.timestamp} for satellite: {loc.name} with ID#: {loc.id}</h1>
            <h2>Travelling at a velocity of: {loc.velocity} relative to the earth</h2>
            <h2>{loc.name} is currently over earth at a latitude of: {loc.latitude} and longitude of: {loc.longitude}</h2>
        </ISSLocs>
    )}</Layout>;
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query {
              locations (limit: 1) {
                name
                id
                latitude
                longitude
                velocity
                visibility
                timestamp
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

export default ISS;