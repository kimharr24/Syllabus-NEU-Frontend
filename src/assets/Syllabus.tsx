import { Professor } from './Professor';
import { Department } from './Department';
import { Semester } from './Semester';

export interface Syllabus {
    id: number;
    professor: Professor;
    department: Department;
    courseNumber: number;
    courseTitle: string;
    semester: Semester;
    syllabusURL: string;
}
