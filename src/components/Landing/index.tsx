import React from 'react';
import { Box } from '@mui/material';
import HomeContent from '../HomeContent';
import { BODY_BACKGROUND_COLOR } from '../../utils/colors';
import WaveSVG from '../../assets/layered-waves.svg';

const Landing: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: BODY_BACKGROUND_COLOR, height: '100vh' }}>
            <div
                style={{
                    backgroundImage: `url(${WaveSVG})`,
                    aspectRatio: '960/150',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <HomeContent />
            </div>
        </Box>
    );
};

export default Landing;
