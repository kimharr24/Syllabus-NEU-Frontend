import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Syllabus } from '../../interfaces/Syllabus';
import { getDynamoDBItems } from '../../utils/backendRequests';
import { matchesSearchTerm } from '../../utils/matchesSearchTerm';
import SearchResult from '../SearchResult';
import SearchResultsHeader from '../SearchResultsHeader';
import {
    defaultPage,
    getNumberOfPages,
    getCurrentPageResults,
} from '../../utils/pagination';

const ResultsContainer = styled(Box)`
    margin: 2rem;
`;

const SearchResultsPage: React.FC = () => {
    const { semester = '', searchTerm = '' } = useParams();
    const [allSearchResults, setAllSearchResults] = useState<Syllabus[]>([]);
    const [currentPageResults, setCurrentPageResults] = useState<Syllabus[]>(
        [],
    );

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        setCurrentPageResults(getCurrentPageResults(allSearchResults, value));
    };

    useEffect(() => {
        getDynamoDBItems().then((objects: Syllabus[]) => {
            const unfilteredSearchResults: Syllabus[] = objects;
            const filteredResults = unfilteredSearchResults.filter(
                (object: Syllabus) => {
                    return matchesSearchTerm(searchTerm, object, semester);
                },
            );
            setAllSearchResults(filteredResults);
            setCurrentPageResults(
                getCurrentPageResults(filteredResults, defaultPage),
            );
        });
    }, [semester, searchTerm]);

    return (
        <>
            <SearchResultsHeader />
            <ResultsContainer>
                {currentPageResults.map((syllabus: Syllabus) => {
                    return (
                        <SearchResult
                            id={syllabus.id}
                            key={syllabus.id}
                            credits={syllabus.credits}
                            description={syllabus.description}
                            professor={syllabus.professor}
                            courseNumber={syllabus.courseNumber}
                            courseTitle={syllabus.courseTitle}
                            semester={syllabus.semester}
                            syllabusURL={syllabus.syllabusURL}
                        />
                    );
                })}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <Pagination
                        color='primary'
                        count={getNumberOfPages(allSearchResults)}
                        size='large'
                        defaultPage={defaultPage}
                        onChange={handlePageChange}
                    />
                </Box>
            </ResultsContainer>
        </>
    );
};

export default SearchResultsPage;
