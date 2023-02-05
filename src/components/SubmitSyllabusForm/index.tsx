import React, { useState } from 'react';
import merge from 'ts-deepmerge';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Box,
    TextField,
} from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import {
    Syllabus,
    DefaultSyllabus,
    isEmptyField,
    validateSyllabus,
} from '../../interfaces/Syllabus';
import {
    uploadToS3Bucket,
    uploadToDynamoDB,
    getDynamoDBItems,
} from '../../utils/backendRequests';
import StatusAlert from '../StatusAlert';

interface SubmitSyllabusFormProps {
    handleCloseSyllabusForm: () => void;
    isOpenSyllabusForm: boolean;
}

const SubmitSyllabusForm: React.FC<SubmitSyllabusFormProps> = ({
    handleCloseSyllabusForm,
    isOpenSyllabusForm,
}) => {
    const [formError, setFormError] = useState(false);

    const [file, setFile] = useState<File>();
    const [fileName, setFileName] = useState('');

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const handleSnackbarOpen = () => setIsSnackbarOpen(true);
    const handleSnackbarClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSnackbarOpen(false);
    };

    const [syllabus, setSyllabus] = useState<Syllabus>(DefaultSyllabus);

    const handleCreditsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newCredits = {
            credits: event.target.value,
        };
        setSyllabus((prevSyllabus: Syllabus) => {
            return { ...prevSyllabus, ...newCredits };
        });
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newDescription = {
            description: event.target.value,
        };
        setSyllabus((prevSyllabus: Syllabus) => {
            return { ...prevSyllabus, ...newDescription };
        });
    };

    const handleProfessorFullNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newProfessorName = {
            professor: {
                fullName: event.target.value,
            },
        };
        setSyllabus((prevSyllabus: Syllabus) => {
            return merge(prevSyllabus, newProfessorName);
        });
    };

    const handleProfessorEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newProfessorEmail = {
            professor: {
                email: event.target.value,
            },
        };
        setSyllabus((prevSyllabus: Syllabus) => {
            return merge(prevSyllabus, newProfessorEmail);
        });
    };

    const handleCourseNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newCourseNumber = {
            courseNumber: event.target.value,
        };
        setSyllabus((prevSyllabus) => {
            return { ...prevSyllabus, ...newCourseNumber };
        });
    };

    const handleCourseTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newCourseTitle = {
            courseTitle: event.target.value,
        };
        setSyllabus((prevSyllabus) => {
            return { ...prevSyllabus, ...newCourseTitle };
        });
    };

    const handleSemesterChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newSemester = {
            semester: event.target.value,
        };
        setSyllabus((prevSyllabus) => {
            return { ...prevSyllabus, ...newSemester };
        });
    };

    const handleFileSelection = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (!event.target.files) return;
        const selectedFile: File = event.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
    };

    const handleFormSubmission = async (
        event: React.FormEvent<HTMLInputElement>,
    ) => {
        event.preventDefault();
        if (!validateSyllabus(syllabus)) {
            setFormError(true);
            return;
        }

        if (!file) {
            handleCloseSyllabusForm();
            setSyllabus(DefaultSyllabus);
            // also reset the file and filename on exit
            return;
        }

        const key = await uploadToS3Bucket(file);
        await uploadToDynamoDB(key, syllabus);
        await getDynamoDBItems();

        handleCloseSyllabusForm();
        handleSnackbarOpen();
    };

    return (
        <>
            <Dialog open={isOpenSyllabusForm} onClose={handleCloseSyllabusForm}>
                <DialogTitle>Syllabus Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: '1rem' }}>
                        Hello! Thank you for helping Syllabus NEU run by
                        submitting a syllabus from a class you took in the past!
                        Please fill out the fields below. We will review your
                        submission and send you an email to confirm its status.
                    </DialogContentText>
                    <Box
                        component='form'
                        id='syllabus-submission-form'
                        onSubmit={handleFormSubmission}>
                        <TextField
                            id='professor-full-name'
                            value={syllabus.professor.fullName}
                            onChange={handleProfessorFullNameChange}
                            label='Professor Full Name'
                            variant='outlined'
                            error={
                                formError &&
                                isEmptyField(syllabus.professor.fullName)
                            }
                            sx={{ margin: '0 1rem 1rem 0', width: '45%' }}
                        />
                        <TextField
                            id='professor-email'
                            value={syllabus.professor.email}
                            onChange={handleProfessorEmailChange}
                            label='Professor Email'
                            variant='outlined'
                            error={
                                formError &&
                                isEmptyField(syllabus.professor.email)
                            }
                            sx={{ margin: '0 1rem 1rem 0', width: '45%' }}
                        />
                        <TextField
                            id='course-number'
                            value={syllabus.courseNumber}
                            onChange={handleCourseNumberChange}
                            label='Course Number'
                            variant='outlined'
                            error={
                                formError && isEmptyField(syllabus.courseNumber)
                            }
                            helperText='e.g. CS3500'
                            sx={{ margin: '0 1rem 1rem 0', width: '40%' }}
                        />
                        <TextField
                            id='course-title'
                            value={syllabus.courseTitle}
                            onChange={handleCourseTitleChange}
                            label='Course Title'
                            variant='outlined'
                            error={
                                formError && isEmptyField(syllabus.courseTitle)
                            }
                            helperText='e.g. Object-Oriented Design'
                            sx={{ margin: '0 1rem 1rem 0', width: '50%' }}
                        />
                        <TextField
                            id='course-semester'
                            value={syllabus.semester}
                            onChange={handleSemesterChange}
                            label='Course Semester'
                            variant='outlined'
                            error={formError && isEmptyField(syllabus.semester)}
                            helperText='e.g. Summer 1 2020, Fall 2021'
                            sx={{ margin: '0 1rem 1rem 0', width: '60%' }}
                        />
                        <TextField
                            id='course-credits'
                            value={syllabus.credits}
                            onChange={handleCreditsChange}
                            label='Course Credits'
                            variant='outlined'
                            error={formError && isEmptyField(syllabus.credits)}
                            sx={{ margin: '0 1rem 1rem 0', width: '30%' }}
                        />
                        <TextField
                            id='course-description'
                            value={syllabus.description}
                            onChange={handleDescriptionChange}
                            label='Course Description'
                            variant='outlined'
                            error={
                                formError && isEmptyField(syllabus.description)
                            }
                            multiline
                            maxRows={5}
                            sx={{ width: '93%', margin: '0 1rem 1rem 0' }}
                        />
                        <label htmlFor='pdf-upload'>
                            <input
                                accept='application/pdf'
                                type='file'
                                id='pdf-upload'
                                hidden
                                onChange={handleFileSelection}
                            />
                            <Button
                                variant='outlined'
                                component='span'
                                endIcon={<AttachFileOutlinedIcon />}>
                                Upload
                            </Button>
                        </label>
                        <Typography
                            variant='body1'
                            component='span'
                            sx={{
                                marginLeft: '0.5rem',
                                color: 'rgba(0, 0, 0, 0.6)',
                            }}>
                            Selected: {fileName || 'None'}
                        </Typography>
                    </Box>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                handleCloseSyllabusForm();
                                setSyllabus(DefaultSyllabus);
                            }}>
                            Cancel
                        </Button>
                        <Button type='submit' form='syllabus-submission-form'>
                            Submit
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <StatusAlert
                isAlertOpen={isSnackbarOpen}
                handleAlertClose={handleSnackbarClose}
                alertType='success'>
                Syllabus Submission Successful!
            </StatusAlert>
        </>
    );
};

export default SubmitSyllabusForm;
