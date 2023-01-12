import React from 'react';
import styled from 'styled-components';
import { Box, Stack } from '@mui/material';
import Hero from '../../assets/hero-image.png';
import HomeContent from '../HomeContent';

const HeroImageContainer = styled(Box)`
    background-image: url('${Hero}');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 1px;
`;

const HeroContentContainer = styled(Stack)`
    margin-top: 25.5rem;
    margin-left: 16rem;
    width: fit-content;
`;

const Home: React.FC = () => {
    return (
        <main>
            <HeroImageContainer>
                <HeroContentContainer>
                    <HomeContent />
                </HeroContentContainer>
            </HeroImageContainer>
        </main>
    );
};

export default Home;
