import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../utils/colors';
import { ToggleButtonState } from '../../../assets/ToggleButtonState';

interface ToggleButtonProps {
    children: React.ReactNode;
    actualToggleButtonState: ToggleButtonState;
    expectedToggleButtonState: ToggleButtonState;
    icon: React.ReactNode;
    setToggleButtonState: (state: ToggleButtonState) => void;
}

const ToggleButtonText = styled(Typography)`
    color: ${SECONDARY_COLOR};
`;

const ToggleButton: React.FC<ToggleButtonProps> = ({
    children,
    actualToggleButtonState,
    expectedToggleButtonState,
    icon,
    setToggleButtonState,
}) => {
    return (
        <div
            style={{
                borderBottom: `${
                    actualToggleButtonState === expectedToggleButtonState
                        ? `3px solid ${PRIMARY_COLOR}`
                        : 'none'
                }`,
            }}>
            <Button
                variant='text'
                startIcon={icon}
                disableRipple
                onClick={() => setToggleButtonState(expectedToggleButtonState)}>
                <ToggleButtonText variant='button'>{children}</ToggleButtonText>
            </Button>
        </div>
    );
};

export default ToggleButton;
