import { Professor } from './Professor';

export interface Syllabus {
    id: string;
    credits: string;
    description: string;
    professor: Professor;
    courseNumber: string;
    courseTitle: string;
    semester: string;
    syllabusURL: string;
}
