import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Button, Stack } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/colors';
import { ToggleButtonState } from '../../assets/ToggleButtonState';

const ButtonGroupContainer = styled(Stack)`
    && {
        flex-direction: row;
        gap: 1rem;
    }
`;

const ToggleButtonText = styled(Typography)`
    color: ${SECONDARY_COLOR};
`;

const SearchButtonGroup: React.FC = () => {
    const [toggleButtonState, setToggleButtonState] =
        useState<ToggleButtonState>(ToggleButtonState.NEU);

    return (
        <ButtonGroupContainer>
            <Button
                variant='text'
                startIcon={
                    <SchoolOutlinedIcon style={{ color: PRIMARY_COLOR }} />
                }
                onClick={() => setToggleButtonState(ToggleButtonState.NEU)}>
                <ToggleButtonText variant='button'>NEU</ToggleButtonText>
            </Button>
            <Button
                variant='text'
                startIcon={
                    <WorkOutlineOutlinedIcon style={{ color: PRIMARY_COLOR }} />
                }
                onClick={() => setToggleButtonState(ToggleButtonState.CPS)}>
                <ToggleButtonText variant='button'>CPS</ToggleButtonText>
            </Button>
            <Button
                variant='text'
                startIcon={
                    <BalanceOutlinedIcon style={{ color: PRIMARY_COLOR }} />
                }
                onClick={() => setToggleButtonState(ToggleButtonState.LAW)}>
                <ToggleButtonText variant='button'>LAW</ToggleButtonText>
            </Button>
        </ButtonGroupContainer>
    );
};

export default SearchButtonGroup;
