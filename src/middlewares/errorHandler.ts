import { NextFunction, Response, Request, ErrorRequestHandler } from "express";
import { AppError } from "../errors/AppError";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { status = 500, message } = err instanceof AppError ? err : { message: err.message };
  
  res.status(status).json({
    error: message,
    status,
  });
};

export { errorHandler };
