/* eslint-disable import/prefer-default-export */
import crypto from 'crypto';

export const generateDecimalHash = (bytes = 4): number => {
    return parseInt(crypto.randomBytes(bytes).toString('hex'), 16);
};

export const generateHexHash = (bytes = 32): string => {
    return crypto.randomBytes(bytes).toString('hex');
};
