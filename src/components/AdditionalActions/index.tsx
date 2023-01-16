import React, { useState } from 'react';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
import SubmitSyllabusForm from '../SubmitSyllabusForm';
import { NEU_RED } from '../../utils/colors';

const SpeedDialContainer = styled(Box)`
    position: fixed;
    bottom: 1rem;
    left: 1rem;
`;

const AdditionalActions: React.FC = () => {
    const [isOpenSyllabusForm, setIsOpenSyllabusForm] = useState(false);
    const handleOpenSyllabusForm = () => setIsOpenSyllabusForm(true);
    const handleCloseSyllabusForm = () => setIsOpenSyllabusForm(false);

    // eslint-disable-next-line no-console
    const handleOpenBugReport = () => console.log('not yet implemented');
    const handleOpenGitHubCodebase = () => {
        window.location.href = 'https://github.com/kimharr24/Syllabus-NEU';
    };

    const actions = [
        {
            icon: <PictureAsPdfIcon />,
            name: 'Upload Syllabus',
            onClick: handleOpenSyllabusForm,
        },
        {
            icon: <BugReportIcon />,
            name: 'Bug Report',
            onClick: handleOpenBugReport,
        },
        {
            icon: <GitHubIcon />,
            name: 'GitHub',
            onClick: handleOpenGitHubCodebase,
        },
    ];

    return (
        <>
            <SpeedDialContainer>
                <SpeedDial
                    ariaLabel='additional actions'
                    icon={<KeyboardArrowUpOutlinedIcon />}
                    sx={{
                        '& .MuiFab-primary': {
                            backgroundColor: NEU_RED,
                            color: '#fff',
                            width: '40px',
                            height: '40px',
                            '&:hover': {
                                backgroundColor: NEU_RED,
                            },
                        },
                    }}>
                    {actions.map((action) => {
                        return (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={action.onClick}
                            />
                        );
                    })}
                </SpeedDial>
            </SpeedDialContainer>
            <SubmitSyllabusForm
                handleCloseSyllabusForm={handleCloseSyllabusForm}
                isOpenSyllabusForm={isOpenSyllabusForm}
            />
        </>
    );
};

export default AdditionalActions;
