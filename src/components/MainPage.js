import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { HEROKU } from '../queries';
import {tokens} from "@sparkimaginations/imperion-system";

const APOD = styled.div`
    padding: ${tokens.spacers.spacer20} ${tokens.spacers.spacer40};
`;

const MainPage = () => {
    const { loading, error, data } = useQuery(HEROKU);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            {data && data.apod && <APOD>
                <h1>{data.apod.title}</h1>
                <h3>{data.apod.date}</h3>
                <p>{data.apod.explanation}</p>
                <img src={data.apod.hdurl} alt={data.apod.explanation} />
            </APOD>}
        </>
    );
}

export default MainPage;