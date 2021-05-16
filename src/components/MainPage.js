import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { HEROKU } from '../queries';
import { tokens } from "@sparkimaginations/imperion-system";
import Card from "./Card";

const APOD = styled.div`
    padding: ${tokens.spacers.spacer10};
    height: 25%;
    
    & img {
        width: 100%
    }
`;

const ISSLocs = styled.div`
    background-color: orange;
    padding: ${tokens.spacers.spacer10};
`;

const NEO = styled.div`
    background-color: blue;
    padding: ${tokens.spacers.spacer10};
`

const Cards = styled.div`
    background: url("https://duomly.nyc3.digitaloceanspaces.com/articles/coding/alps-lake.jpg");
    background-color: green;
    width: 450px;
    padding: ${tokens.spacers.spacer10}
`

const CardWrapper = styled.div`
    width: 400px;
    padding: ${tokens.spacers.spacer10}
`

const MainPage = () => {
    const { loading, error, data } = useQuery(HEROKU);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            {data.neos.map(neo =>
                <NEO>
                    <h1>The NEO called: {neo.name} with id {neo.id} {neo.is_potentially_hazardous_asteroid ? 'might kill us' : 'might not kill us'}</h1>
                </NEO>
            )}
            {data.locations.map(loc =>
                <ISSLocs>
                    <h1>Position info at timestamp: {loc.timestamp} for satellite: {loc.name} with ID#: {loc.id}</h1>
                    <h2>Travelling at a velocity of: {loc.velocity} relative to the earth</h2>
                    <h2>{loc.name} is currently over earth at a latitude of: {loc.latitude} and longitude of: {loc.longitude}</h2>
                </ISSLocs>
            )}
            <APOD>
                <img src={data.apod.hdurl} alt={data.apod.explanation} />
                <h1>{data.apod.title}</h1>
                <h3>{data.apod.date}</h3>
                <p>{data.apod.explanation}</p>
            </APOD>
            <Cards>
                {data.cards.map(card =>
                    <CardWrapper>
                        <Card card={card} />
                    </CardWrapper>
                )}
            </Cards>
        </>
    );
}

export default MainPage;