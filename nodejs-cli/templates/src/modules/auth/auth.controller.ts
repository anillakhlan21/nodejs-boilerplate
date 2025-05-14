import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { sendResponse } from '../../utils/apiResponse.util';

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.register(req.body);
      sendResponse(res, 201, true, user, 'User registered successfully');
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenData = await AuthService.login(req.body);
      sendResponse(res, 200, true, tokenData, 'Login successful');
    } catch (error) {
      next(error);
    }
  }

  static async getProfile(req: Request, res: Response) {
    sendResponse(res, 200, true, req.user, 'User profile fetched');
  }
}