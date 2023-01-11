import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import SearchButtonGroup from '../SearchButtonGroup';

const SearchForm = styled(Paper)`
    && {
        background-color: transparent;
    }
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
            <SearchButtonGroup />
        </SearchForm>
    );
};

export default Search;
