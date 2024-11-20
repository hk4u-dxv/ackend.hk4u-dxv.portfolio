import { Request, Response, NextFunction } from 'express';
import { log } from '@utils/logger';
import { HTTP_STATUS, STATUS_MESSAGES } from '@utils/constants';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  log.error(`Error: ${err.message}`);
  
  res.status(HTTP_STATUS.SERVER_ERROR).json({
    error: STATUS_MESSAGES.ERROR_500,
    message: process.env.NODE_ENV === 'production' 
      ? STATUS_MESSAGES.UNEXPECTED_ERROR 
      : err.message
  });
}; 