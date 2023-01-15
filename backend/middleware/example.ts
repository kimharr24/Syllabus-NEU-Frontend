import express, { Express, Request, Response, NextFunction } from 'express';

const example = (req: Request, res: Response, next: NextFunction) => {
    console.log('Middleware!');
    next();
};

export default example;
