import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';


class SettingsController {

  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try {
      const setting = await settingsService.create({ chat, username });

      return response.json(setting);
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }

  }

  async findByUserName(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = new SettingsService();

    const setting = await settingsService.findByUserName(username);
    
    try {
      return response.json(setting);
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }

  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = settingsService.update(username, chat);

    return response.json(settings);
  }
  
}

export { SettingsController };