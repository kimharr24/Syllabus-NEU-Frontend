import React, { useState } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import SearchEngine from '../SearchEngine';
import Hero from '../../assets/hero-image.svg';
import SubmitSyllabusForm from '../SubmitSyllabusForm';
import LoginForm from '../LoginForm';
import { GRAY } from '../../utils/colors';

const Home: React.FC = () => {
    const [isSyllabusFormOpen, setIsSyllabusFormOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    return (
        <Box sx={{ height: '100vh' }}>
            <Stack
                sx={{
                    flexDirection: 'row',
                    justifyContent: { xs: 'center', lg: 'space-between' },
                    alignItems: 'center',
                    padding: '1rem 2rem 1rem 2rem',
                }}>
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                    }}>
                    <Stack
                        direction='row'
                        sx={{
                            marginBottom: { xs: '1rem', md: 0 },
                        }}>
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
                                marginRight: { xs: 0, md: '2rem' },
                            }}>
                            NEU
                        </Typography>
                    </Stack>
                    <SearchEngine
                        responsiveWidth={{ xs: '60vw', md: '35vw' }}
                    />
                </Stack>
                <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Button
                        variant='outlined'
                        size='large'
                        onClick={() => setIsSyllabusFormOpen(true)}
                        sx={{ marginRight: '1rem' }}>
                        Submit a Syllabus
                    </Button>
                    <Button
                        variant='contained'
                        size='large'
                        onClick={() => setIsLoginFormOpen(true)}>
                        Sign In
                    </Button>
                </Box>
            </Stack>
            <Stack
                sx={{
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '90%',
                }}>
                <Stack
                    sx={{
                        flexDirection: 'column',
                        alignItems: { xs: 'center', lg: 'flex-start' },
                        width: { xs: '80%', lg: '40%' },
                        paddingLeft: { xs: 0, lg: '10vw' },
                        margin: { xs: '3rem 0 3rem 0', lg: 0 },
                    }}>
                    <Typography
                        variant='h2'
                        sx={{
                            color: '#20212',
                            textAlign: { xs: 'center', lg: 'left' },
                        }}>
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
                            textAlign: { xs: 'center', lg: 'left' },
                        }}>
                        Review grading breakdowns, major assignments, and exam
                        dates for classes anytime, anywhere.
                    </Typography>

                    <Stack
                        sx={{
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'center', sm: 'flex-start' },
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }}>
                        <Button
                            variant='contained'
                            size='large'
                            onClick={() => setIsLoginFormOpen(true)}
                            sx={{
                                marginRight: { xs: 0, sm: '1rem' },
                                marginBottom: { xs: '1rem', sm: 0 },
                            }}>
                            Sign In
                        </Button>
                        <Button
                            variant='outlined'
                            size='large'
                            onClick={() => setIsSyllabusFormOpen(true)}>
                            Submit a Syllabus
                        </Button>
                    </Stack>
                    <Stack
                        sx={{
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                        }}>
                        <Typography
                            variant='body2'
                            sx={{
                                color: '#5f6368',
                                fontWeight: 400,
                                fontSize: '1rem',
                                marginRight: { xs: 0, sm: '1rem' },
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
                </Stack>
                <img
                    src={Hero}
                    alt='hero'
                    style={{ minWidth: '300px', height: '80%' }}
                />
                ;
            </Stack>
            <SubmitSyllabusForm
                isSyllabusFormOpen={isSyllabusFormOpen}
                handleCloseSyllabusForm={() => setIsSyllabusFormOpen(false)}
            />
            <LoginForm
                isLoginFormOpen={isLoginFormOpen}
                handleCloseLoginForm={() => setIsLoginFormOpen(false)}
            />
        </Box>
    );
};

export default Home;
