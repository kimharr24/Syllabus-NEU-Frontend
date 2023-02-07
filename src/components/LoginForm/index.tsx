import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Box,
} from '@mui/material';
import { isEmptyField } from '../../interfaces/Syllabus';

interface LoginFormProps {
    handleCloseLoginForm: () => void;
    isLoginFormOpen: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
    handleCloseLoginForm,
    isLoginFormOpen,
}) => {
    const [loginError, setLoginError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetFormDefaults = () => {
        setEmail('');
        setPassword('');
        setLoginError(false);
    };

    const handleLoginForm = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (email.length === 0 || password.length === 0) {
            setLoginError(true);
            return;
        }

        handleCloseLoginForm();
        resetFormDefaults();
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPassword(event.target.value);
    };

    return (
        <Dialog open={isLoginFormOpen} onClose={handleCloseLoginForm}>
            <DialogTitle>Sign Into Syllabus NEU</DialogTitle>
            <DialogContent>
                <Box
                    component='form'
                    id='login-form'
                    onSubmit={handleLoginForm}>
                    <TextField
                        id='user-email'
                        value={email}
                        label='Email Address'
                        onChange={handleEmailChange}
                        variant='outlined'
                        error={loginError && isEmptyField(email)}
                        fullWidth
                        sx={{ marginTop: '1rem' }}
                    />
                    <TextField
                        id='user-password'
                        type='password'
                        value={password}
                        label='Password'
                        onChange={handlePasswordChange}
                        variant='outlined'
                        error={loginError && isEmptyField(password)}
                        fullWidth
                        sx={{ marginTop: '1rem' }}
                    />
                </Box>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleCloseLoginForm();
                            resetFormDefaults();
                        }}>
                        Cancel
                    </Button>
                    <Button type='submit' form='login-form'>
                        Sign In
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default LoginForm;
