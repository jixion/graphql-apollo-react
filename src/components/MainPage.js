import React from 'react';
import { useQuery } from '@apollo/client';
import { HEROKU } from '../queries';

const MainPage = () => {
    const data = useQuery(HEROKU).data;
    let apod = data["apod"];

    // copyright
    // date
    // explanation
    // hdurl
    // media_type
    // service_version
    // title
    // url
    return (
        <div>
            {apod && <div>
                <h1>{apod.title}</h1>
                <p>{apod.explanation}</p>
                <img src={apod.hdurl} alt={apod.explanation} />
            </div>}
        </div>
    );
}

export default MainPage;