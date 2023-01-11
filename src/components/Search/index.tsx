import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import ToggleButtonGroup from '../ToggleButtonGroup';

const SearchForm = styled(Paper)`
    && {
        background-color: transparent;
        border-radius: 10px;
    }
    margin-top: 1rem;
    padding: 0.5rem 1rem;
`;

const Search: React.FC = () => {
    const syllabusCountPlaceholder = 25;
    const [syllabusCount, setSyllabusCount] = useState<number>(
        syllabusCountPlaceholder,
    );

    useEffect(() => {
        // scan DynamoDB via client API to get count of syllabi
        setSyllabusCount(syllabusCountPlaceholder);
    }, []);

    return (
        <SearchForm elevation={12}>
            <ToggleButtonGroup />
        </SearchForm>
    );
};

export default Search;
