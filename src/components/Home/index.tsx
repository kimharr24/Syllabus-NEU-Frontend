import React from 'react';
import styled from 'styled-components';
import { Box, Stack, Typography } from '@mui/material';
import Hero from '../../assets/hero-image.png';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/colors';

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
    flex-direction: column;
`;

const SyllabusNEUContainer = styled(Stack)`
    font-weight: 400;
    letter-spacing: 0.15rem;
`;

const Home: React.FC = () => {
    return (
        <main>
            <HeroImageContainer>
                <HeroContentContainer>
                    <SyllabusNEUContainer direction='row'>
                        <Typography
                            variant='h2'
                            sx={{
                                color: PRIMARY_COLOR,
                                marginRight: '0.5rem',
                            }}>
                            Syllabus
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{ color: SECONDARY_COLOR }}>
                            NEU
                        </Typography>
                    </SyllabusNEUContainer>
                </HeroContentContainer>
            </HeroImageContainer>
        </main>
    );
};

export default Home;
