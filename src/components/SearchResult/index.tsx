import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paper, Box, Typography, Stack, Button } from '@mui/material';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { Syllabus } from '../../interfaces/Syllabus';
import { getUnsignedURL } from '../../utils/backendRequests';

const ResultHeader = styled(Stack)`
    color: #505050;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    justify-content: space-between;
`;

const AttributeTypographyDark = styled(Typography)`
    && {
        color: #505050;
        display: inline;
        font-weight: 500;
        font-size: 1rem;
    }
`;

const AttributeTypographyLight = styled(Typography)`
    && {
        display: inline;
    }
`;

const SearchResult: React.FC<Syllabus> = ({
    id,
    credits,
    description,
    professor: { fullName, email },
    courseNumber,
    courseTitle,
    semester,
    syllabusURL,
}) => {
    const [link, setLink] = useState(syllabusURL);

    useEffect(() => {
        getUnsignedURL(id).then((url) => {
            setLink(url);
        });
    }, [id]);

    return (
        <Paper
            elevation={5}
            sx={{
                marginBottom: '2rem',
            }}>
            <ResultHeader direction='row'>
                <Typography variant='h6'>{`${courseNumber}: ${courseTitle}`}</Typography>
                <Typography variant='h6'>
                    {parseInt(credits, 10) > 1
                        ? `${credits} CREDITS`
                        : `${credits} CREDIT`}
                </Typography>
            </ResultHeader>
            <Box sx={{ padding: '1.5rem 1.5rem 0 1.5rem' }}>
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                    {description}
                </Typography>
            </Box>
            <Stack
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: { xs: 'flex-start', md: 'space-between' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    padding: '0 1.5rem 1.5rem 1.5rem',
                }}>
                <Box>
                    <Box>
                        <AttributeTypographyDark variant='body2'>
                            {`Professor: `}
                        </AttributeTypographyDark>
                        <AttributeTypographyLight variant='body1'>
                            {fullName}
                        </AttributeTypographyLight>
                    </Box>
                    <Box>
                        <AttributeTypographyDark variant='body2'>
                            {`Email: `}
                        </AttributeTypographyDark>
                        <AttributeTypographyLight variant='body1'>
                            {email}
                        </AttributeTypographyLight>
                    </Box>
                    <Box>
                        <AttributeTypographyDark variant='body2'>
                            {`Semester: `}
                        </AttributeTypographyDark>
                        <AttributeTypographyLight variant='body1'>
                            {`${semester} Semester`}
                        </AttributeTypographyLight>
                    </Box>
                </Box>
                <Button
                    variant='outlined'
                    onClick={() => window.open(link, '_blank')}
                    startIcon={<PictureAsPdfOutlinedIcon />}
                    color='primary'
                    sx={{ marginTop: { xs: '1rem', md: 0 } }}>
                    Open Syllabus PDF
                </Button>
            </Stack>
        </Paper>
    );
};

export default SearchResult;
