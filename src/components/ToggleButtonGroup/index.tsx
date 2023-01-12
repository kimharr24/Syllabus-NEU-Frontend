import React, { useState } from 'react';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import {
    NEU_RED,
    TOGGLE_BUTTON_GREEN,
    TOGGLE_BUTTON_YELLOW,
} from '../../utils/colors';
import { ToggleButtonState } from '../../assets/ToggleButtonState';
import ToggleButton from './ToggleButton';

interface ToggleButtonGroupProps {
    setSelectedColor: (color: string) => void;
}

const ButtonGroupContainer = styled(Stack)`
    && {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
    margin-bottom: 1rem;
`;

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
    setSelectedColor,
}) => {
    const [toggleButtonState, setToggleButtonState] =
        useState<ToggleButtonState>(ToggleButtonState.NEU);

    return (
        <ButtonGroupContainer>
            <ToggleButton
                actualToggleButtonState={toggleButtonState}
                expectedToggleButtonState={ToggleButtonState.NEU}
                icon={<SchoolOutlinedIcon style={{ color: NEU_RED }} />}
                color={NEU_RED}
                setToggleButtonState={setToggleButtonState}
                setSelectedColor={setSelectedColor}>
                NEU
            </ToggleButton>
            <ToggleButton
                actualToggleButtonState={toggleButtonState}
                expectedToggleButtonState={ToggleButtonState.CPS}
                icon={
                    <WorkOutlineOutlinedIcon
                        style={{ color: TOGGLE_BUTTON_YELLOW }}
                    />
                }
                color={TOGGLE_BUTTON_YELLOW}
                setToggleButtonState={setToggleButtonState}
                setSelectedColor={setSelectedColor}>
                CPS
            </ToggleButton>
            <ToggleButton
                actualToggleButtonState={toggleButtonState}
                expectedToggleButtonState={ToggleButtonState.LAW}
                icon={
                    <BalanceOutlinedIcon
                        style={{ color: TOGGLE_BUTTON_GREEN }}
                    />
                }
                color={TOGGLE_BUTTON_GREEN}
                setToggleButtonState={setToggleButtonState}
                setSelectedColor={setSelectedColor}>
                LAW
            </ToggleButton>
        </ButtonGroupContainer>
    );
};

export default ToggleButtonGroup;
