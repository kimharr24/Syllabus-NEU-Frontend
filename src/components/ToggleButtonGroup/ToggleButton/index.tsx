import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Box } from '@mui/material';
import { SECONDARY_COLOR } from '../../../utils/colors';
import { ToggleButtonState } from '../../../assets/ToggleButtonState';

interface ToggleButtonProps {
    children: React.ReactNode;
    actualToggleButtonState: ToggleButtonState;
    expectedToggleButtonState: ToggleButtonState;
    icon: React.ReactNode;
    color: string;
    setToggleButtonState: (state: ToggleButtonState) => void;
    setSelectedColor: (selectedColor: string) => void;
}

const ToggleButtonText = styled(Typography)`
    color: ${SECONDARY_COLOR};
    && {
        font-size: 1rem;
    }
`;

const ToggleButton: React.FC<ToggleButtonProps> = ({
    children,
    actualToggleButtonState,
    expectedToggleButtonState,
    icon,
    color,
    setToggleButtonState,
    setSelectedColor,
}) => {
    return (
        <Box
            style={{
                borderBottom: `${
                    actualToggleButtonState === expectedToggleButtonState
                        ? `3px solid ${color}`
                        : 'none'
                }`,
            }}>
            <Button
                variant='text'
                startIcon={icon}
                disableRipple
                onClick={() => {
                    setToggleButtonState(expectedToggleButtonState);
                    setSelectedColor(color);
                }}>
                <ToggleButtonText variant='button'>{children}</ToggleButtonText>
            </Button>
        </Box>
    );
};

export default ToggleButton;
