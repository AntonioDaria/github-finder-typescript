import { Request, Response } from "express";
import { getFavLanguageService } from "../service/language.service";
export async function getFavLanguageController(req: Request, res: Response) {
  try {
    const favLanguage = await getFavLanguageService(req.params.userName);
    return res.status(200).send(favLanguage);
  } catch (error) {
    console.log(error);
    return res.status(409); //conflicts
  }
}
