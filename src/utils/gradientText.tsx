/* eslint-disable import/prefer-default-export */
import { PRIMARY_COLOR, SECONDARY_COLOR } from './colors';

export const GRADIENT_SX = {
    backgroundImage: `linear-gradient(90deg, ${SECONDARY_COLOR}, ${PRIMARY_COLOR})`,
    backgroundClip: 'text',
    color: 'transparent',
};
