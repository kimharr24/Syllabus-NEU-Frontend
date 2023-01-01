import React from 'react';
import { Box } from '@mui/material';
import HeroSearch from '../HeroSearch';
import Waves from '../../assets/layered-waves.svg';

const Landing: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#001220' }}>
            <div
                style={{
                    backgroundImage: `url(${Waves})`,
                    aspectRatio: '960/300',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <HeroSearch />
            </div>
        </Box>
    );
};

export default Landing;
