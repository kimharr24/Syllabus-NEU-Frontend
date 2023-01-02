import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeContent from '../HomeContent';
import DefaultPage from '../DefaultPage';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Home: React.FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <DefaultPage>
                <HomeContent />
            </DefaultPage>
        </ThemeProvider>
    );
};

export default Home;
