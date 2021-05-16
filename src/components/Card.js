import React from 'react';
import styled from 'styled-components';
import { tokens } from "@sparkimaginations/imperion-system";


const StyledCard = styled.div`
    width: 90%;
    background-color: white;
    background-color: rgba(255, 255, 255, .35);  
    backdrop-filter: blur(5px);
    padding: ${tokens.spacers.spacer10};
    border-radius: ${tokens.spacers.spacer20};
    transform: translateX(20px);
`;

const Title = styled.h1`
    margin: 0;
    text-transform: capitalize;
    font-size: ${tokens.spacers.spacer40};
`;

const Description = styled.span`
    font-size: ${tokens.spacers.spacer20};
    padding-top: ${tokens.spacers.spacer10};
`;

const Card = ({ card }) => {
    return <StyledCard>
        <Title>{card.title}</Title>
        <Description>{card.description || "No description found"}</Description>
    </StyledCard>;
}

export default Card;