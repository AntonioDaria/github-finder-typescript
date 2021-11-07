import axios from 'axios'
import {extractFavLanguage} from "../utils/extractFavLanguage"
import { Request, Response } from "express";

export async function getFavLanguageService(userName: string){
    try {
        
        const url = `https://api.github.com/users/${userName}/repos`;

        const result = await axios.get(url);
        const requestedPackage = result.data

        const languagesArray: string[] = requestedPackage.map((repo: any) => {
            return repo.language
        })
       
        return extractFavLanguage(languagesArray);


    } catch (error: any) {
        throw new Error(error);
    }
}