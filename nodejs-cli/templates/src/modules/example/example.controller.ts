// src/controllers/user.controller.ts
import { Request, Response, NextFunction } from 'express';
import ExampleService from './example.service';

class ExampleController {
  private static instance: ExampleController;

  private constructor() {}

  public static getInstance(): ExampleController {
    if (!ExampleController.instance) {
        ExampleController.instance = new ExampleController();
    }
    return ExampleController.instance;
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await ExampleService.getAll();
      res.json({ success: true, data: users });
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await ExampleService.create(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }
}

export default ExampleController.getInstance();