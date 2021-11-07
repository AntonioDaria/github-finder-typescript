import { Express, Request, Response } from "express";
import { getFavLanguageController } from "./controller/language.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/languages/:userName/", getFavLanguageController);
  
}

export default routes;
