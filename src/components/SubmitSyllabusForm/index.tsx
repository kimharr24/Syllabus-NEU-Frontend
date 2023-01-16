import React, { useState } from 'react';
import axios from 'axios';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Box,
    Snackbar,
} from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

interface SubmitSyllabusFormProps {
    handleCloseSyllabusForm: () => void;
    isOpenSyllabusForm: boolean;
}

const SubmitSyllabusForm: React.FC<SubmitSyllabusFormProps> = ({
    handleCloseSyllabusForm,
    isOpenSyllabusForm,
}) => {
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

        if (!file) {
            handleCloseSyllabusForm();
            return;
        }

        const formData = new FormData();
        formData.append('pdf-file', file);
        await axios.post('http://localhost:5000/api/post/syllabus', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        handleCloseSyllabusForm();
        handleSnackbarOpen();
    };

    return (
        <>
            <Dialog open={isOpenSyllabusForm} onClose={handleCloseSyllabusForm}>
                <DialogTitle>Syllabus Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: '0.5rem' }}>
                        Hello! Thank you for helping Syllabus NEU run by
                        submitting a syllabus from a class you took in the past!
                        Please fill out the fields below. We will review your
                        submission and send you an email to confirm its status.
                    </DialogContentText>
                    <Box
                        component='form'
                        id='syllabus-submission-form'
                        onSubmit={handleFormSubmission}>
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
                        <Button onClick={handleCloseSyllabusForm}>
                            Cancel
                        </Button>
                        <Button type='submit' form='syllabus-submission-form'>
                            Submit
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                onClose={handleSnackbarClose}>
                <Alert
                    onClose={handleSnackbarClose}
                    severity='success'
                    sx={{ width: '100%' }}>
                    Syllabus Submission Sucessful!
                </Alert>
            </Snackbar>
        </>
    );
};

export default SubmitSyllabusForm;
