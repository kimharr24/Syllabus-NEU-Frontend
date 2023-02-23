/* eslint-disable import/prefer-default-export */
import { Semester } from '../interfaces/Semester';

// Replace with a dynamic approach of querying DynamoDB for available semesters
export const AvailableSemesters: Semester[] = [
    {
        id: 0,
        semester: 'Fall 2020',
    },
    {
        id: 1,
        semester: 'Spring 2021',
    },
    {
        id: 2,
        semester: 'Summer 1 2021',
    },
    {
        id: 3,
        semester: 'Summer 2 2021',
    },
    {
        id: 4,
        semester: 'Spring 2023',
    },
];
