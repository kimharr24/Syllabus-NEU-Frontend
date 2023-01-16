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
} from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

const SubmitSyllabusForm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [file, setFile] = useState<File>();
    const [fileName, setFileName] = useState('');

    const handleClickOpen = () => {
        setIsModalOpen(true);
    };
    const handleClickClose = () => {
        setIsModalOpen(false);
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
            setIsModalOpen(false);
            return;
        }

        const formData = new FormData();
        formData.append('pdf-file', file);
        await axios.post('http://localhost:5000/api/post/syllabus', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log('file submitted successfully');
        setIsModalOpen(false);
    };

    return (
        <>
            <Button variant='outlined' onClick={handleClickOpen}>
                Submit Syllabus
            </Button>
            <Dialog open={isModalOpen} onClose={handleClickClose}>
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
                        <Button onClick={handleClickClose}>Cancel</Button>
                        <Button type='submit' form='syllabus-submission-form'>
                            Submit
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default SubmitSyllabusForm;
