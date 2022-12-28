import { Professor } from './Professor';
import { Department } from './Department';

export interface Syllabus {
    id: number;
    professor: Professor;
    department: Department;
    courseNumber: number;
    courseTitle: string;
    semester: string;
    syllabusURL: string;
}
