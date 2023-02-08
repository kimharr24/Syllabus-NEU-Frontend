import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Stack } from '@mui/material';
import SearchEngine from '../SearchEngine';

const HeaderContainer = styled(Stack)`
    && {
        padding: 1rem 2rem 1rem 2rem;
        border-bottom: 1px solid #e2dfdf;
    }
`;

const SearchResultsHeader: React.FC = () => {
    return (
        <HeaderContainer
            sx={{
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
            }}>
            <Box
                component='a'
                href='/'
                sx={{ display: 'inline-block', marginRight: '5vw' }}>
                <Stack direction='row'>
                    <Typography
                        variant='h4'
                        color='primary'
                        sx={{ fontWeight: 300, marginRight: '0.3rem' }}>
                        Syllabus
                    </Typography>
                    <Typography
                        variant='h4'
                        sx={{ fontWeight: 300, color: '#1C3557' }}>
                        NEU
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{ marginTop: { xs: '1rem', md: 0 } }}>
                <SearchEngine responsiveWidth={{ xs: '60vw', md: '35vw' }} />
            </Box>
        </HeaderContainer>
    );
};

export default SearchResultsHeader;
