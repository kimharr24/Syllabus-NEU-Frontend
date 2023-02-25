import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField,
    Box,
} from '@mui/material';
import { isEmptyField } from '../../interfaces/Syllabus';
import StatusAlert from '../StatusAlert';

interface BugReportFormProps {
    isBugReportOpen: boolean;
    handleCloseBugReport: () => void;
}

const BugReportForm: React.FC<BugReportFormProps> = ({
    isBugReportOpen,
    handleCloseBugReport,
}) => {
    const [bugDescription, setBugDescription] = useState('');
    const [formError, setFormError] = useState(false);
    const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
    const resetFormDefaults = () => {
        setBugDescription('');
        setFormError(false);
    };
    const handleFormSubmission = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (isEmptyField(bugDescription)) {
            setFormError(true);
            return;
        }
        handleCloseBugReport();
        resetFormDefaults();
        setIsSuccessAlertOpen(true); // needs real bug report upload validation and pipeline
    };

    return (
        <>
            <Dialog open={isBugReportOpen} onClose={handleCloseBugReport}>
                <DialogTitle>Bug Report Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ marginBottom: '2rem' }}>
                        See an issue with our website? Encountering unexpected
                        search results? Experiencing faulty login authorization
                        or problems with submitting a syllabus? Please provide a
                        description of the issue you are facing and a member of
                        our team will review the bug. Thank you for contributing
                        towards improving our website!
                    </DialogContentText>
                    <Box
                        component='form'
                        id='bug-report-form'
                        onSubmit={handleFormSubmission}>
                        <TextField
                            id='bug-report-description'
                            value={bugDescription}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setBugDescription(e.target.value)}
                            label='Description'
                            variant='outlined'
                            multiline
                            fullWidth
                            rows={6}
                            error={formError && isEmptyField(bugDescription)}
                        />
                    </Box>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                handleCloseBugReport();
                                resetFormDefaults();
                            }}>
                            Cancel
                        </Button>
                        <Button type='submit' form='bug-report-form'>
                            Submit
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <StatusAlert
                isAlertOpen={isSuccessAlertOpen}
                handleAlertClose={() => setIsSuccessAlertOpen(false)}
                alertType='success'>
                Bug Report Submission Successful!
            </StatusAlert>
        </>
    );
};

export default BugReportForm;
