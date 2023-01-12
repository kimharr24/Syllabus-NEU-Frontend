import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Search from '../Search';
import { NEU_RED, SECONDARY_COLOR } from '../../utils/colors';

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
            <Search setSelectedColor={setSelectedColor} />
        </>
    );
};

export default HomeContent;
