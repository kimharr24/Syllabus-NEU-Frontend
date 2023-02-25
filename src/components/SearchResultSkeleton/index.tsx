import React from 'react';
import { Paper, Skeleton, Box, Typography, Stack } from '@mui/material';

const SearchResultSkeleton: React.FC = () => {
    return (
        <Paper elevation={5} sx={{ marginBottom: '2rem' }}>
            <Box>
                <Typography variant='h6'>
                    <Skeleton
                        variant='rounded'
                        sx={{
                            padding: '1.5rem',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        }}
                    />
                </Typography>
            </Box>
            <Box sx={{ height: '30vh' }}>
                <Box
                    sx={{
                        padding: '1.5rem 1.5rem 0 1.5rem',
                        marginBottom: '2rem',
                    }}>
                    <Skeleton variant='rounded' sx={{ height: '10vh' }} />
                </Box>
                <Stack
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 1.5rem 1.5rem 1.5rem',
                    }}>
                    <Box sx={{ width: '15vw' }}>
                        <Skeleton variant='text' sx={{ lineHeight: 1.5 }} />
                        <Skeleton variant='text' sx={{ lineHeight: 1.5 }} />
                        <Skeleton variant='text' sx={{ lineHeight: 1.5 }} />
                    </Box>
                    <Box sx={{ width: '10vw' }}>
                        <Skeleton variant='rounded' sx={{ height: '4vh' }} />
                    </Box>
                </Stack>
            </Box>
        </Paper>
    );
};

export default SearchResultSkeleton;
