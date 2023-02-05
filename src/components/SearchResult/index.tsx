import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paper, Box, Typography, Stack, Button } from '@mui/material';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { Syllabus } from '../../interfaces/Syllabus';
import { getUnsignedURL } from '../../utils/backendRequests';
import { NEU_RED } from '../../utils/colors';

const ResultHeader = styled(Stack)`
    color: #505050;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    justify-content: space-between;
`;

const AttributeContainer = styled(Stack)`
    padding: 0 1.5rem 1.5rem 1.5rem;
    justify-content: space-between;
    align-items: center;
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
        <Paper elevation={5} sx={{ marginBottom: '2rem' }}>
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
            <AttributeContainer direction='row'>
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
                    disableRipple
                    sx={{
                        color: NEU_RED,
                        border: '1px solid rgba(0, 0, 0, 0.87)',
                    }}>
                    <Typography
                        variant='body1'
                        sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                        Open Syllabus PDF
                    </Typography>
                </Button>
            </AttributeContainer>
        </Paper>
    );
};

export default SearchResult;
