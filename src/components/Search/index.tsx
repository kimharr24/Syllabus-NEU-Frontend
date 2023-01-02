import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const Search: React.FC = () => {
    const syllabusCountPlaceholder = 25;
    const [syllabusCount, setSyllabusCount] = useState<number>(
        syllabusCountPlaceholder,
    );

    useEffect(() => {
        // scan DynamoDB via client API to get count of syllabi
        setSyllabusCount(syllabusCountPlaceholder);
    }, []);

    return (
        <Box>
            <Box sx={{ width: '30vw' }}>
                <Typography
                    variant='body1'
                    sx={{ color: 'white', marginTop: '1rem' }}>
                    {`Browse Syllabus NEU's collection of over ${syllabusCount}+ 
                      syllabi belonging to classes ranging from journalism to quantum physics
                      offered at Northeastern University. Syllabus NEU was designed and developed
                      by students, for students.`}
                </Typography>
            </Box>
        </Box>
    );
};

export default Search;
