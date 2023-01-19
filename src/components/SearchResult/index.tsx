import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paper, Box, Typography } from '@mui/material';
import { Syllabus } from '../../assets/Syllabus';
import { getUnsignedURL } from '../../utils/backendRequests';

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
        <Paper elevation={5} sx={{ mt: '2rem' }}>
            <div>{`${courseNumber}: ${courseTitle} is a ${credits} credit course.`}</div>
            <div>{`Professor: ${fullName} | Email: ${email}`}</div>
            <br />
            <div>{description}</div>
            <div>{`Semester: ${semester}`}</div>
            <a href={link}>Get Syllabus</a>
        </Paper>
    );
};

export default SearchResult;
