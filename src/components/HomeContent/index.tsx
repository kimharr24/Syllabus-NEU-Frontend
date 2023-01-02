import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/colors';
import Search from '../Search';

const HomeContent: React.FC = () => {
    return (
        <Container sx={{ position: 'relative', top: '15rem' }}>
            <Stack direction='column' sx={{ alignItems: 'flex-start' }}>
                <Typography
                    variant='h2'
                    sx={{
                        backgroundImage: `linear-gradient(90deg, ${SECONDARY_COLOR}, ${PRIMARY_COLOR})`,
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}>
                    Syllabus NEU
                </Typography>
                <Search />
            </Stack>
        </Container>
    );
};

export default HomeContent;
