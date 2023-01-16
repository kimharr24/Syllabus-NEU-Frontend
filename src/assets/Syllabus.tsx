import { Professor } from './Professor';

export interface Syllabus {
    id: number;
    credits: string;
    description: string;
    professor: Professor;
    courseNumber: string;
    courseTitle: string;
    semester: string;
    syllabusURL: string;
}
