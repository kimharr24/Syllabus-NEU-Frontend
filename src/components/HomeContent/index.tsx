import React from 'react';
import { Typography, Stack, Container } from '@mui/material';

const HomeContent: React.FC = () => {
    return (
        <Container sx={{ position: 'absolute' }}>
            <Stack
                direction='column'
                sx={{
                    position: 'relative',
                    top: '15rem',
                    alignItems: 'flex-start',
                }}>
                <Typography variant='h2'>Syllabus NEU</Typography>
            </Stack>
        </Container>
    );
};

export default HomeContent;
