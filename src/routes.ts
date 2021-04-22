import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

/**
 * tipos de parâmetros:
 * routes params => parâmetros de rotas : http://localhost:4747/settings/1
 * query params => filtros e buscas : http://localhost:4747/settings/1?search=queryparam
 * body params => parâmetros de corpo : { }
 */

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes };