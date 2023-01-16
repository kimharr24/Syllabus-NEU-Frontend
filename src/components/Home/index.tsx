import React from 'react';
import styled from 'styled-components';
import { Box, Stack } from '@mui/material';
import Hero from '../../assets/hero-image.jpg';
import HomeContent from '../HomeContent';
import AdditionalActions from '../AdditionalActions';

const HeroImageContainer = styled(Box)`
    background-image: url('${Hero}');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 1px;
`;

const HeroContentContainer = styled(Stack)`
    margin-top: 29rem;
    margin-left: 16rem;
    width: 36vw;
`;

const Home: React.FC = () => {
    return (
        <main>
            <HeroImageContainer>
                <HeroContentContainer>
                    <HomeContent />
                </HeroContentContainer>
                <AdditionalActions />
            </HeroImageContainer>
        </main>
    );
};

export default Home;
