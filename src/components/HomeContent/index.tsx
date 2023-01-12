import React, { useState } from 'react';
import styled from 'styled-components';
import { Stack, Typography, Paper } from '@mui/material';
import ToggleButtonGroup from '../ToggleButtonGroup';
import { NEU_RED, SECONDARY_COLOR } from '../../utils/colors';

const SearchForm = styled(Paper)`
    && {
        background-color: transparent;
        border-radius: 10px;
    }
    margin-top: 1rem;
    padding: 0.5rem 1rem;
`;

const HomeContent: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState(NEU_RED);
    return (
        <>
            <Stack direction='row'>
                <Typography
                    variant='h2'
                    sx={{
                        color: selectedColor,
                        marginRight: '0.7rem',
                    }}>
                    Syllabus
                </Typography>
                <Typography variant='h2' sx={{ color: SECONDARY_COLOR }}>
                    NEU
                </Typography>
            </Stack>
            <SearchForm elevation={12}>
                <ToggleButtonGroup setSelectedColor={setSelectedColor} />
            </SearchForm>
        </>
    );
};

export default HomeContent;
