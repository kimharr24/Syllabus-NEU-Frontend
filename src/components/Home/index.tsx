import React from 'react';
import styled from 'styled-components';
import { Box, Stack, Typography } from '@mui/material';
import Hero from '../../assets/hero-image.png';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/colors';
import Search from '../Search';

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
                    <Stack direction='row'>
                        <Typography
                            variant='h2'
                            sx={{
                                color: PRIMARY_COLOR,
                                marginRight: '0.7rem',
                            }}>
                            Syllabus
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{ color: SECONDARY_COLOR }}>
                            NEU
                        </Typography>
                    </Stack>
                    <Search />
                </HeroContentContainer>
            </HeroImageContainer>
        </main>
    );
};

export default Home;
