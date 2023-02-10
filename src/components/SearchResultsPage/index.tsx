import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Syllabus } from '../../interfaces/Syllabus';
import { getDynamoDBItems } from '../../utils/backendRequests';
import { matchesSearchTerm } from '../../utils/matchesSearchTerm';
import SearchResult from '../SearchResult';
import SearchResultsHeader from '../SearchResultsHeader';
import { defaultPage } from '../../utils/pagination';

const ResultsContainer = styled(Box)`
    margin: 2rem;
`;

const SearchResultsPage: React.FC = () => {
    const { semester = '', searchTerm = '' } = useParams();
    const [searchResults, setSearchResults] = useState<Syllabus[]>([]);
    const [currentPage, setCurrentPage] = useState(defaultPage);

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        getDynamoDBItems().then((objects: Syllabus[]) => {
            const unfilteredSearchResults: Syllabus[] = objects;
            const filteredResults = unfilteredSearchResults.filter(
                (object: Syllabus) => {
                    return matchesSearchTerm(searchTerm, object, semester);
                },
            );
            setSearchResults(filteredResults);
        });
    }, [semester, searchTerm]);

    return (
        <>
            <SearchResultsHeader />
            <ResultsContainer>
                {searchResults.map((syllabus: Syllabus) => {
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
                        count={10}
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
