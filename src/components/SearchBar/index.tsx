import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { NEU_RED } from '../../utils/colors';

const SearchButton = styled(IconButton)`
    && {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: ${NEU_RED};
        color: #fff;
    }
`;

const SearchInput = styled('input')`
    border: none;
    padding: 0;
    width: 100%;
    height: 100%;
`;

interface SearchBarProps {
    selectedSemester: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ selectedSemester }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search/${selectedSemester}/${searchQuery}`);
    };

    return (
        <>
            <Paper
                id='search-query-form'
                elevation={0}
                component='form'
                sx={{ width: '50%', paddingLeft: '10px', borderRadius: 0 }}
                onSubmit={handleSearch}>
                <SearchInput
                    value={searchQuery}
                    onChange={handleSearchQuery}
                    placeholder='Class, professor, or course'
                />
            </Paper>
            <SearchButton disableRipple type='submit' form='search-query-form'>
                <SearchOutlinedIcon />
            </SearchButton>
        </>
    );
};

export default SearchBar;
