import React, { useState } from 'react';
import { IconButton, Box, Paper } from '@mui/material';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const SearchEngineContainer = styled(Box)`
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
    &:placeholder-shown {
        text-overflow: ellipsis;
    }
`;

const SearchButton = styled(IconButton)`
    && {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        background-color: #1976d2;
        color: #fff;
    }
`;

interface SearchEngineProps {
    responsiveWidth: object;
}

const SearchEngine: React.FC<SearchEngineProps> = ({ responsiveWidth }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search/All Semesters/${searchQuery}`);
    };

    const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <SearchEngineContainer>
            <Paper
                id='search-query-form'
                elevation={0}
                component='form'
                sx={{
                    width: responsiveWidth,
                    paddingLeft: '10px',
                    borderRadius: 0,
                    display: 'inline-block',
                }}
                onSubmit={handleSearch}>
                <SearchInput
                    value={searchQuery}
                    onChange={handleSearchQuery}
                    placeholder='Search for a class, professor, or course'
                />
            </Paper>
            <SearchButton
                type='submit'
                form='search-query-form'
                color='primary'>
                <SearchOutlinedIcon />
            </SearchButton>
        </SearchEngineContainer>
    );
};

export default SearchEngine;
