/* eslint-disable import/prefer-default-export */
import { Syllabus } from '../assets/Syllabus';

function transformTerm(term: string) {
    return term.toLowerCase().replace(/\s/g, '');
}

export function matchesSearchTerm(
    searchTerm: string,
    queriedSyllabus: Syllabus,
    selectedSemester: string,
): boolean {
    const transformedTerm = transformTerm(searchTerm);
    const {
        courseNumber,
        courseTitle,
        semester,
        professor: { fullName },
    } = queriedSyllabus;

    const matchesCourseNumber =
        transformTerm(courseNumber).includes(transformedTerm);
    const matchesCourseTitle =
        transformTerm(courseTitle).includes(transformedTerm);
    const matchesProfessor = transformTerm(fullName).includes(transformedTerm);
    const matchesSemester =
        selectedSemester === 'All Semesters'
            ? true
            : semester === selectedSemester;
    return (
        (matchesCourseNumber || matchesCourseTitle || matchesProfessor) &&
        matchesSemester
    );
}
