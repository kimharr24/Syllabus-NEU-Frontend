/* eslint-disable import/prefer-default-export */
import crypto from 'crypto';

export const generateDecimalHash = (bytes = 16): string => {
    return parseInt(crypto.randomBytes(bytes).toString('hex'), 16).toString();
};

export const generateHexHash = (bytes = 32): string => {
    return crypto.randomBytes(bytes).toString('hex');
};
