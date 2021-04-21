import { request, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

/**
 * tipos de parâmetros:
 * routes params => parâmetros de rotas : http://localhost:4747/settings/1
 * query params => filtros e buscas : http://localhost:4747/settings/1?search=queryparam
 * body params => parâmetros de corpo : { }
 */

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };