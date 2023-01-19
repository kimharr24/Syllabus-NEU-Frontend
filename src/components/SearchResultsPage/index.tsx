import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Syllabus } from '../../assets/Syllabus';
import { getDynamoDBItems } from '../../utils/backendRequests';
import { matchesSearchTerm } from '../../utils/matchesSearchTerm';
import SearchResult from '../SearchResult';

const SearchResultsPage: React.FC = () => {
    const { semester = '', searchTerm = '' } = useParams();
    const [searchResults, setSearchResults] = useState<Syllabus[]>([]);

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
        </>
    );
};

export default SearchResultsPage;
