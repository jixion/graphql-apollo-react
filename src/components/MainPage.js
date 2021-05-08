import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { HEROKU } from '../queries';
import { tokens } from "@sparkimaginations/imperion-system";

const APOD = styled.div`
    padding: ${tokens.spacers.spacer20} ${tokens.spacers.spacer10};
    height: 25%;
    
    & img {
        width: 100%
    }
`;

const ISSLocs = styled.div`
    background-color: orange;
    padding: ${tokens.spacers.spacer40} ${tokens.spacers.spacer20};
`;

const NEO = styled.div`
    background-color: blue;
    padding: ${tokens.spacers.spacer40} ${tokens.spacers.spacer20};
`

const MainPage = () => {
    const { loading, error, data } = useQuery(HEROKU);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            {data.neos.map(neo =>
                <NEO>
                    <h1>{neo.name}</h1>
                    <h2>{neo.id}</h2>
                    <h3>{neo.is_potentially_hazardous_asteroid ? 'Might kill us' : 'Might not kill us'}</h3>
                </NEO>
            )}
            {data.locations.map(loc =>
                <ISSLocs>
                    <h1>Satellite name: {loc.name}</h1>
                    <h2>Sattelite ID#: {loc.id}</h2>
                </ISSLocs>
            )}
            <APOD>
                <img src={data.apod.hdurl} alt={data.apod.explanation} />
                <h1>{data.apod.title}</h1>
                <h3>{data.apod.date}</h3>
                <p>{data.apod.explanation}</p>
            </APOD>
        </>
    );
}

export default MainPage;