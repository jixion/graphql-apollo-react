import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { HEROKU } from '../queries';
import {tokens} from "@sparkimaginations/imperion-system";

const APOD = styled.div`
    padding: ${tokens.spacers.spacer40} ${tokens.spacers.spacer20};
    
    & img {
        width: 100%
    }
`;

const MainPage = () => {
    const { loading, error, data } = useQuery(HEROKU);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (<>{data && data.apod &&
                <APOD>
                    <img src={data.apod.hdurl} alt={data.apod.explanation} />
                    <h1>{data.apod.title}</h1>
                    <h2>Copyright {data.apod.copyright}</h2>
                    <h3>{data.apod.date}</h3>
                    <p>{data.apod.explanation}</p>
                </APOD>
            }</>
    );
}

export default MainPage;