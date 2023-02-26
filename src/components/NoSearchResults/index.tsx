/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Typography, Stack, Box, Button } from '@mui/material';
import SearchEngine from '../SearchEngine';
import BugReportForm from '../BugReportForm';

interface NoSearchResultsProps {
    searchQuery: string;
}

const NoSearchResults: React.FC<NoSearchResultsProps> = ({ searchQuery }) => {
    const [isBugReportFormOpen, setIsBugReportFormOpen] = useState(false);
    return (
        <>
            <Stack>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                    {`We're sorry. We weren't able to find a match for "${
                        searchQuery.length > 15
                            ? `${searchQuery.slice(0, 15)}..`
                            : searchQuery
                    }."`}
                </Typography>

                <Typography variant='h5' sx={{ marginBottom: '1rem' }}>
                    Try Another Search?
                </Typography>

                <Box sx={{ marginBottom: '2rem' }}>
                    <SearchEngine
                        responsiveWidth={{ xs: '60vw', md: '30vw' }}
                    />
                </Box>

                <Typography variant='body1'>Suggestions:</Typography>
                <ul style={{ margin: '0.5rem 0.5rem 2rem 0.5rem' }}>
                    <li>
                        <Typography variant='body2'>
                            Check for typos and spelling errors
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body2'>
                            Try more general keywords such as "math" or
                            "chemistry"
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body2'>
                            Try typing the exact course subject and number (e.g.
                            CS 3000)
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body2'>
                            Try different keywords
                        </Typography>
                    </li>
                </ul>

                <Stack
                    sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                    }}>
                    <Typography
                        variant='body1'
                        sx={{ marginRight: { xs: 0, sm: '1rem' } }}>
                        Still can't find what you're looking for?
                    </Typography>
                    <Button
                        variant='text'
                        size='large'
                        onClick={() => setIsBugReportFormOpen(true)}
                        sx={{ textTransform: 'none' }}>
                        Report a bug
                    </Button>
                </Stack>
            </Stack>
            <BugReportForm
                isBugReportOpen={isBugReportFormOpen}
                handleCloseBugReport={() => setIsBugReportFormOpen(false)}
            />
        </>
    );
};

export default NoSearchResults;
