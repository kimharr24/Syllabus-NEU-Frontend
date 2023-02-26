import React, { useState } from 'react';
import {
    Stack,
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Select,
    SelectChangeEvent,
    FormControl,
    InputLabel,
    MenuItem,
    Switch,
} from '@mui/material';
import { AvailableSemesters } from '../../utils/AvailableSemesters';
import { Semester } from '../../interfaces/Semester';
import { SUBJECT_DESCRIPTIONS } from '../../utils/completeSubjects';

const SearchResultsSidebar: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [campus, setCampus] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSubject(event.target.value as string);
    };

    const handleCampusChange = (event: SelectChangeEvent) => {
        setCampus(event.target.value as string);
    };

    return (
        <Stack
            sx={{
                padding: '1rem',
                backgroundColor: '#f6f6f6',
                flexDirection: 'column',
                display: { xs: 'none', md: 'flex' },
                position: 'fixed',
                top: '74px',
                bottom: 0,
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
            <Box width='268px'>
                <Box sx={{ marginTop: '2rem', marginBottom: '3rem' }}>
                    <Typography
                        variant='h6'
                        color='#505050'
                        fontSize='1.15rem'
                        marginBottom='1rem'>
                        Course Subject
                    </Typography>
                    <FormControl
                        fullWidth
                        size='small'
                        sx={{ backgroundColor: '#fff' }}>
                        <InputLabel>Subject</InputLabel>
                        <Select
                            value={subject}
                            onChange={handleChange}
                            label='Subject'>
                            {SUBJECT_DESCRIPTIONS.map(
                                (subjectDescription: string) => {
                                    return (
                                        <MenuItem
                                            key={subjectDescription}
                                            value={subjectDescription}>
                                            {subjectDescription}
                                        </MenuItem>
                                    );
                                },
                            )}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ marginBottom: '3rem' }}>
                    <Typography
                        variant='h6'
                        color='#505050'
                        fontSize='1.15rem'
                        marginBottom='1rem'>
                        Course Campus
                    </Typography>
                    <FormControl
                        fullWidth
                        size='small'
                        sx={{ backgroundColor: '#fff' }}>
                        <InputLabel>Campus</InputLabel>
                        <Select
                            value={campus}
                            onChange={handleCampusChange}
                            label='Campus'>
                            <MenuItem value='Boston Campus'>Boston</MenuItem>
                            <MenuItem value='Online'>Online</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Stack
                    direction='row'
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '3rem',
                    }}>
                    <Typography variant='h6' color='#505050' fontSize='1.15rem'>
                        Honors
                    </Typography>
                    <FormGroup>
                        <Switch />
                    </FormGroup>
                </Stack>

                <Box>
                    <Typography
                        variant='h6'
                        color='#505050'
                        mb='.5rem'
                        fontSize='1.15rem'>
                        Course Semester
                    </Typography>
                    <FormGroup>
                        {AvailableSemesters.map((semester: Semester) => {
                            return (
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={semester.semester}
                                    key={semester.id}
                                />
                            );
                        })}
                    </FormGroup>
                </Box>
            </Box>
        </Stack>
    );
};

export default SearchResultsSidebar;
