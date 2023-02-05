import { Professor } from './Professor';

/**
 * Represents a Syllabus object to be stored in DynamoDB tables. The
 * syllabus URL and id are not entered by the user. They are always stored as an
 * empty string in the DynamoDB table. When a user searches for a syllabus,
 * the syllabus URL value is automatically populated by an S3 GET request.
 */
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

/**
 * A default syllabus assumes that none of the fields have
 * been populated by the user.
 */
export const DefaultSyllabus: Syllabus = {
    id: '',
    credits: '',
    description: '',
    professor: {
        fullName: '',
        email: '',
    },
    courseNumber: '',
    courseTitle: '',
    semester: '',
    syllabusURL: '',
};

/**
 * Determines whether the inputted string is empty.
 * @param field the input string.
 * @returns true if the string is empty, false otherwise.
 */
export const isEmptyField = (field: string): boolean => {
    return field.length === 0;
};

/**
 * Determines whether any of the relevant fields in a syllabus are empty.
 * Used for validating user input to the syllabus submission form. The id and
 * syllabus URL are not inputted by the user; therefore, they are not checked.
 * @param syllabus the syllabus to be validated.
 * @returns true if the syllabus is valid, false if the syllabus is missing information.
 */
export const validateSyllabus = (syllabus: Syllabus): boolean => {
    return (
        !isEmptyField(syllabus.credits) &&
        !isEmptyField(syllabus.description) &&
        !isEmptyField(syllabus.professor.fullName) &&
        !isEmptyField(syllabus.professor.email) &&
        !isEmptyField(syllabus.courseNumber) &&
        !isEmptyField(syllabus.courseTitle) &&
        !isEmptyField(syllabus.semester)
    );
};
