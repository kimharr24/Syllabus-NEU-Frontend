import React, { useState } from 'react';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { PRIMARY_COLOR } from '../../utils/colors';
import { ToggleButtonState } from '../../assets/ToggleButtonState';
import ToggleButton from './ToggleButton';

const ButtonGroupContainer = styled(Stack)`
    && {
        flex-direction: row;
        gap: 1rem;
    }
`;

const ToggleButtonGroup: React.FC = () => {
    const [toggleButtonState, setToggleButtonState] =
        useState<ToggleButtonState>(ToggleButtonState.NEU);

    return (
        <ButtonGroupContainer>
            <ToggleButton
                actualToggleButtonState={toggleButtonState}
                expectedToggleButtonState={ToggleButtonState.NEU}
                icon={<SchoolOutlinedIcon style={{ color: PRIMARY_COLOR }} />}
                setToggleButtonState={setToggleButtonState}>
                NEU
            </ToggleButton>
            <ToggleButton
                actualToggleButtonState={toggleButtonState}
                expectedToggleButtonState={ToggleButtonState.CPS}
                icon={
                    <WorkOutlineOutlinedIcon style={{ color: PRIMARY_COLOR }} />
                }
                setToggleButtonState={setToggleButtonState}>
                CPS
            </ToggleButton>
            <ToggleButton
                actualToggleButtonState={toggleButtonState}
                expectedToggleButtonState={ToggleButtonState.LAW}
                icon={<BalanceOutlinedIcon style={{ color: PRIMARY_COLOR }} />}
                setToggleButtonState={setToggleButtonState}>
                LAW
            </ToggleButton>
        </ButtonGroupContainer>
    );
};

export default ToggleButtonGroup;
