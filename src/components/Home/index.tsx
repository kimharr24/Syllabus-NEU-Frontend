import React, { useState } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import SearchEngine from '../SearchEngine';
import Hero from '../../assets/Layer 1.svg';
import { GRAY } from '../../utils/colors';
import SubmitSyllabusForm from '../SubmitSyllabusForm';

const Home: React.FC = () => {
    const [isSyllabusFormOpen, setIsSyllabusFormOpen] = useState(false);

    return (
        <Box sx={{ height: '100vh' }}>
            <Stack
                direction='row'
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '10%',
                    padding: '0 2rem 0 2rem',
                }}>
                <Stack direction='row'>
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#1976d2',
                            marginRight: '0.3rem',
                            fontWeight: 300,
                        }}>
                        Syllabus
                    </Typography>
                    <Typography
                        variant='h4'
                        sx={{
                            color: `${GRAY}`,
                            fontWeight: 300,
                            marginRight: '2rem',
                        }}>
                        NEU
                    </Typography>
                    <SearchEngine />
                </Stack>
                <Box>
                    <Button
                        variant='outlined'
                        size='large'
                        onClick={() => setIsSyllabusFormOpen(true)}
                        sx={{ marginRight: '1rem' }}>
                        Submit a Syllabus
                    </Button>
                    <Button variant='contained' size='large'>
                        Sign In
                    </Button>
                </Box>
            </Stack>
            <Stack
                direction='row'
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '90%',
                    flexWrap: 'wrap',
                }}>
                <Box sx={{ width: '40%', paddingLeft: '10vw' }}>
                    <Typography variant='h2' sx={{ color: '#20212' }}>
                        Search and access previous Northeastern class syllabuses
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            marginTop: '2rem',
                            fontSize: '20px',
                            color: '#5f6368',
                            lineHeight: '28px',
                            fontWeight: 400,
                        }}>
                        Review grading breakdowns, major assignments, and exam
                        dates for classes anytime, anywhere.
                    </Typography>
                    <Box sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
                        <Button
                            variant='contained'
                            size='large'
                            sx={{ marginRight: '1rem' }}>
                            Sign In
                        </Button>
                        <Button
                            variant='outlined'
                            size='large'
                            onClick={() => setIsSyllabusFormOpen(true)}>
                            Submit a Syllabus
                        </Button>
                    </Box>
                    <Stack direction='row' sx={{ alignItems: 'center' }}>
                        <Typography
                            variant='body2'
                            sx={{
                                color: '#5f6368',
                                fontWeight: 400,
                                fontSize: '1rem',
                                marginRight: '1rem',
                            }}>
                            See an issue with this website?
                        </Typography>
                        <Button
                            variant='text'
                            size='large'
                            sx={{ textTransform: 'none' }}>
                            Report a bug
                        </Button>
                    </Stack>
                </Box>
                <img
                    src={Hero}
                    alt='hero'
                    style={{ minWidth: '650px', height: '80%' }}
                />
                ;
            </Stack>
            <SubmitSyllabusForm
                isSyllabusFormOpen={isSyllabusFormOpen}
                handleCloseSyllabusForm={() => setIsSyllabusFormOpen(false)}
            />
        </Box>
    );
};

export default Home;
