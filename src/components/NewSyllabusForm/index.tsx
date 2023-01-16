import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

const NewSyllabusForm: React.FC = () => {
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={handleClickClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default NewSyllabusForm;
