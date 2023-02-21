import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Stack } from '@mui/material';
import SearchEngine from '../SearchEngine';

const HeaderContainer = styled(Stack)`
    && {
        border-bottom: 1px solid #e2dfdf;
        height: 42px;
        position: fixed;
        width: 100%;
        background-color: #fff;
        z-index: 10;
    }
`;

const SearchResultsHeader: React.FC = () => {
    return (
        <HeaderContainer
            sx={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                padding: { xs: '16px 0 16px 0', md: '16px 32px 16px 32px' },
            }}>
            <Box
                component='a'
                href='/'
                sx={{
                    display: { xs: 'none', md: 'inline-block' },
                    marginRight: { xs: 0, md: '2rem' },
                }}>
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
            <Box>
                <SearchEngine responsiveWidth={{ xs: '60vw', md: '35vw' }} />
            </Box>
        </HeaderContainer>
    );
};

export default SearchResultsHeader;
