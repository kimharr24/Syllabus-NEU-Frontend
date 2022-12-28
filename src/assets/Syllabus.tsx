import { Professor } from './Professor';

export interface Syllabus {
    id: number;
    professor: Professor;
    syllabusURL: string;
}
