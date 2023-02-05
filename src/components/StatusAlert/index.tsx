/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

interface StatusAlertProps {
    children: React.ReactNode;
    isAlertOpen: boolean;
    handleAlertClose: (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => void;
    alertType: AlertColor | undefined;
}

const StatusAlert: React.FC<StatusAlertProps> = ({
    children,
    isAlertOpen,
    handleAlertClose,
    alertType,
}) => {
    return (
        <Snackbar
            open={isAlertOpen}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handleAlertClose}>
            <Alert
                onClose={handleAlertClose}
                severity={alertType}
                sx={{ width: '100%' }}>
                {children}
            </Alert>
        </Snackbar>
    );
};

export default StatusAlert;
