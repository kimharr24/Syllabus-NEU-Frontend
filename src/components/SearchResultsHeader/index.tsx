import React, { useState } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Paper, Typography, Stack, IconButton } from '@mui/material';
import { NEU_RED, SECONDARY_COLOR } from '../../utils/colors';

const HeaderContainer = styled(Stack)`
    && {
        padding: 1rem 2rem 1rem 2rem;
        border-bottom: 1px solid #e2dfdf;
    }
`;

const SearchFormContainer = styled(Box)`
    border: 1px solid #e2dfdf;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
`;

const SearchInput = styled('input')`
    border: 0;
    color: rgba(0, 0, 0, 0.6);
    padding-left: 10px;
    font-size: 16px;
    width: 100%;
    height: 100%;
`;

const SearchButton = styled(IconButton)`
    && {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        background-color: ${NEU_RED};
        color: #fff;
    }
`;

const SearchResultsHeader: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <HeaderContainer direction='row'>
            <Box
                component='a'
                href='/'
                sx={{ display: 'inline-block', marginRight: '5vw' }}>
                <Stack direction='row'>
                    <Typography
                        variant='h4'
                        sx={{ color: NEU_RED, marginRight: '0.3rem' }}>
                        Syllabus
                    </Typography>
                    <Typography variant='h4' sx={{ color: SECONDARY_COLOR }}>
                        NEU
                    </Typography>
                </Stack>
            </Box>
            <SearchFormContainer>
                <Paper
                    id='search-query-form'
                    elevation={0}
                    component='form'
                    sx={{
                        width: '35vw',
                        paddingLeft: '10px',
                        borderRadius: 0,
                        display: 'inline-block',
                    }}
                    onSubmit={() => {}}>
                    <SearchInput
                        value={searchQuery}
                        onChange={handleSearchQuery}
                        placeholder='Search for a class, professor, or course'
                    />
                </Paper>
                <SearchButton
                    disableRipple
                    type='submit'
                    form='search-query-form'>
                    <SearchOutlinedIcon />
                </SearchButton>
            </SearchFormContainer>
        </HeaderContainer>
    );
};

export default SearchResultsHeader;
